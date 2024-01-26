const {GetGoogleAuthToken,fetchGoogleUserInfo,findUserByEmail,Sendemail} = require('../Service/employee.auth');
const jwt = require('jsonwebtoken')
const  employeeIntialdata = require('../Models/Employee.model');
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

function SignIn(req,res){
    res.send("hello working")
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
      return res.status(400).json({ error: 'Missing ID parameter' });
    }

    console.log('id', id);

    const employeeUpdate = await employeeIntialdata.findByIdAndUpdate(
      { _id: id },
      { isVerified: true },
      { new: true } 
    );

    if (!employeeUpdate) {
      res.render('signuperorr', { error: { message: 'Something went wrong! Please Sign Up Again' } });
    }
    0

    res.render('success', {data: employeeUpdate.firstName})

  } catch (error) {
    console.error(error);
    res.render('signuperorr', { error: { message: 'Something went wrong! Please Sign Up Again'} });
  }
}


module.exports = {SignIn,SignUP,logout,GoogleAUth,verifyUser}