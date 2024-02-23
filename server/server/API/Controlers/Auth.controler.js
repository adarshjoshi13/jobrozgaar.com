const {GetGoogleAuthToken,fetchGoogleUserInfo,findUserByEmail,Sendemail} = require('../Service/employee.auth');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const  employeeIntialdata = require('../Models/Employee.model');
const { default: mongoose } = require('mongoose');
const {GetUserIdFromCookie,GetEmployerIdFromCookie} = require('../Helper/getUserId');
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
   const mail = await Sendemail(firstName,email,NewEmployee._id,'verify');
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

      return res.status(400).json({message:validationErrors[0]})
    }
    console.log(error)
    return res.status(500).json({message:"internal server error"});
   }
}

async function SignIn(req, res) {
  const { email, password } = req.body;
  const employee = await employeeIntialdata.findOne({ email });

  if (!employee) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (!employee.isVerified) {
    return res.status(401).json({ message: 'Email not verified. Please verify your email to login' });
  }

  const validPassword = await bcrypt.compare(password, employee.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'Wrong password' });
  }

  const accessToken = jwt.sign({ employeeId: employee._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d'  });
  const refershToken = jwt.sign({ refreshToken: employee._id }, process.env.REFRESH_TOKEN_SECRET);

  try {
    const updatedEmployee = await employeeIntialdata.findOneAndUpdate(
      { _id: employee._id },
      { $set: { refershToken: refershToken } },
      { new: true }
    );
    // Use the updatedEmployee object for any further operations
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal server error' });
  }

  res.cookie('token', accessToken, {
    httpOnly: true,
    // Secure: true, // Uncomment this if using HTTPS
    // SameSite: 'None', // Uncomment this if using cross-site cookies
  });

  res.cookie('refresh-token', refershToken, {
    httpOnly: true,
    // Secure: true, // Uncomment this if using HTTPS
    // SameSite: 'None', // Uncomment this if using cross-site cookies
  });

  return res.status(200).json({ message: 'Successfully logged in', token: accessToken, refreshToken: refershToken });
}


function logout(req, res) {
  try {
    res.cookie('token', '', { expires: new Date(0), httpOnly: true });
    res.cookie('refresh-token', '', { expires: new Date(0), httpOnly: true });
    res.clearCookie("token");
    res.clearCookie("refresh-token");

    
    return res.status(200).json({ message: 'Loged out successfully' });
  } catch (error) {
    console.error('Logout error:', error);
    return res.status(500).json({ message: 'Failed to logout' });
  }
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


   return res.render('success', {data: employeeUpdate.firstName,url:process.env.EMPLOYEELOGIN})

  } catch (error) {
    console.error(error);
   return res.render('signuperorr',  { error: { message: 'Something went wrong! Please Sign Up Again',url:process.env.BACKTOHOME } });
  }
}
async function VerifyAuthentication(req,res){
  console.log("token agay bhai",req.cookies.token);
  const employeeId = GetUserIdFromCookie(req.cookies.token)
  console.log(employeeId)
  if(!employeeId){
     return res.status(401).json({message:'Unauthorized request'})
  }

  try {
    const user = await employeeIntialdata.findById(employeeId);
    console.log(user.ProfileCompleate)
    if(user){
      return res.status(200).json({ProfileCompleateness:user.ProfileCompleate})
    }
    else{
      return res.status(404)
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({message:"Internal Server Error"});
  }
}




module.exports = {SignIn,SignUP,logout,GoogleAUth,verifyUser,VerifyAuthentication}