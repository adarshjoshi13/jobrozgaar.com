const {GetGoogleAuthToken,fetchGoogleUserInfo,findUserByEmail,Sendemail} = require('../Service/employee.auth');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const  employeeIntialdata = require('../Models/Employee.model');
const { default: mongoose } = require('mongoose');
async function SignUP(req,res){
   const {firstName,mobile,email,password} = req.body
   console.log(firstName,mobile,email,password)
   try {
    const employeeCehck = await findUserByEmail(email);
     if(employeeCehck){
      return res.status(409).send({message:"This email is already registered"})
     }
    
     const NewEmployee = await employeeIntialdata.create({
      firstName:firstName,
      email,
      mobile,
      password,
      provider:'local'
     })
   const mail = await Sendemail(firstName,email,NewEmployee._id);
   console.log("mail",mail)
    if(mail === true){
      return res.status(200).json({message:'account created sucessfully please check you mail for vefifaction link',data:NewEmployee})
    }
    else{
       const employeeDeleat = await employeeIntialdata.deleteOne({_id:NewEmployee._id});
      return res.status(503).json({message:"troubal sending verification email"});
    }
   ;
   } catch (error) {
    if(error.name === "ValidationError"){
      const validationErrors = Object.values(error.errors).map((val) => val.message);
      console.log(validationErrors)

      return res.status(400).json({message:validationErrors[1]})
    }
    console.log(error)
    return res.status(500).json({message:"internal server error"});
   }
}

async function SignIn(req,res){
  const { email, password } = req.body;
  const employee = await employeeIntialdata.findOne({ email });
  console.log(employee, req.body);

  if (!employee) {
    return res.status(404).json({ message: 'user  not found' });
  }

  if(!employee.isVerified){
    return res.status(401).json({ message: 'email not verified please verify your email to login'});
  }


  const validPassword = await bcrypt.compare(password, employee.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'wrong password' });
  }

  const accessToken = jwt.sign({ employeeId: employee._id }, process.env.ACCESS_TOKEN_SECRET);
  const refershToken = jwt.sign({refershToken:employee._id},process.env.REFRESH_TOKEN_SECRET)

 try {
  const result = await employee.updateOne({ _id: employee._id }, { $set: { refershToken: refershToken } });
 } catch (error) {
    console.log(error)
   return res.json({message:"internal server error",}).status(500)
 }
  
  res.cookie('token', accessToken, {
    httpOnly: true,
  });

  res.cookie('refresh-token',refershToken,{
    httpOnly:true,
  })

  return res.json({message:"succesfuly login",token:accessToken,refershToken,}).status(200)
}

function logout(req,res){
    res.send("hello working")
}

async function GoogleAUth(req,res){
  try {
    const code = req.query.code;
   
    const{id_token,access_token} = await GetGoogleAuthToken(code);
    console.warn("id:",id_token,"accestoken:",access_token) 

    // const googleuser = jwt.decode(id_token)
    const googleuser = await fetchGoogleUserInfo(access_token)
    console.log(googleuser);

    const employeeCehck = await findUserByEmail(googleuser.email);
    if(!employeeCehck){
    try {
      const newEmployee = await employeeIntialdata.create({
        firstName:googleuser.name,
        email:googleuser.email,
        password:googleuser.id,
        profilePicture:googleuser.picture,
        isVerified:true,
        provider:"google",
        
      })
     return  res.status(200).json({message:"account created succesfully"})
      
    } catch (error) {
      console.log('while creating employee by google',error)
      throw new Error(error)
    }
    }
    else{
      return res.status(400).json({message:'email alreday exists'})
    }

 
    res.send('yooo!!')

    return res.send(error)
  }
  catch(error){
    console.log('in error block of google auth ',error)
  }
};

async function verifyUser(req, res) {
  try {
    const id = req.query.id;

    if (!id) {
     return res.render('signuperorr',  { error: { message: 'Something went wrong! Please Sign Up Again',url:process.env.BACKTOHOME } });
    }

    console.log('id', id);

    // check for again validation

    const checkverifaction = await employeeIntialdata.findOne({_id:id});
    console.log("cehck data",checkverifaction);
    if(checkverifaction.check === true){
    return  res.render('signuperorr',  { error: { message: 'user already verfied',url:process.env.BACKTOHOME } });
    }

    const employeeUpdate = await employeeIntialdata.findByIdAndUpdate(
      { _id: id },
      { isVerified: true, check:true },
      { new: true } 
    );

    if (!employeeUpdate) {
     return res.render('signuperorr', { error: { message: 'Something went wrong! Please Sign Up Again',url:process.env.BACKTOHOME } });
    }
    
    console.log(employeeUpdate)


   return res.render('success', {data: employeeUpdate.firstName,url:process.env.loginpageurl})

  } catch (error) {
    console.error(error);
   return res.render('signuperorr',  { error: { message: 'Something went wrong! Please Sign Up Again',url:process.env.BACKTOHOME } });
  }
}


module.exports = {SignIn,SignUP,logout,GoogleAUth,verifyUser}