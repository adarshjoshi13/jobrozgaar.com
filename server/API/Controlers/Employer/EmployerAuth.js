const {GetGoogleAuthToken,fetchGoogleUserInfo,Sendemail} = require('../../Service/employee.auth');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const employerIntialdata = require('../../Models/Employer/EmployerInital')
const {GetUserIdFromCookie,GetEmployerIdFromCookie} = require('../../Helper/getUserId');
// helper
async function findUserByEmail(email) {
    try {
      const user = await employerIntialdata.findOne({ email });
      return user; // If user is found, it will be returned; otherwise, null
    } catch (error) {
      console.error('Error finding user:', error.message);
      throw error;
    }
  }
async function Signup(req,res){
    const { CompanyName,mobile,email,password} = req.body
    console.log(CompanyName,mobile,email,password)
    try {
     const employerCehck = await findUserByEmail(email);
      if(employerCehck){
       return res.status(409).send({message:"This email is already registered"})
      }
     
      const NewEmployer = await employerIntialdata.create({
      CompanyName,
       email,
       mobile,
       password,
       provider:'local'
      })
    const mail = await Sendemail(CompanyName,email,NewEmployer._id,'employer/verify-mail');
    console.log("mail",mail)
     if(mail === true){
       return res.status(200).json({message:'account created sucessfully please check you mail for vefifaction link',data:NewEmployer})
     }
     else{
        const employeeDeleat = await employerIntialdata.deleteOne({_id:NewEmployer._id});
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

async function verifyUser(req, res) {
  try {
    const id = req.query.id;

    if (!id) {
     return res.render('signuperorr',  { error: { message: 'Something went wrong! Please Sign Up Again',url:process.env.BACKTOHOME } });
    }

    console.log('id', id);

    // check for again validation

    const checkverifaction = await employerIntialdata.findOne({_id:id});
    console.log("cehck data",checkverifaction);
    if(checkverifaction.check === true){
    return  res.render('signuperorr',  { error: { message: 'user already verfied',url:process.env.EMPLOYERSIGNUP } });
    }

    const employerUpdate = await employerIntialdata.findByIdAndUpdate(
      { _id: id },
      { isVerified: true, check:true },
      { new: true } 
    );

    if (!employerUpdate) {
     return res.render('signuperorr', { error: { message: 'Something went wrong! Please Sign Up Again',url:process.env.EMPLOYERSIGNUP } });
    }
    
    console.log(employerUpdate)


   return res.render('success', {data: employerUpdate.firstName,url:process.env.EMPLOYERSIGNIN})

  } catch (error) {
    console.error(error);
   return res.render('signuperorr',  { error: { message: 'Something went wrong! Please Sign Up Again',url:process.env.EMPLOYERSIGNUP } });
  }
}

async function SignIn(req,res){
  const { email, password } = req.body;
  const employer = await employerIntialdata.findOne({ email });
  console.log(employer, req.body);

  if (!employer) {
    return res.status(404).json({ message: 'user  not found' });
  }

  if(!employer.isVerified){
    return res.status(401).json({ message: 'email not verified please verify your email to login'});
  }


  const validPassword = await bcrypt.compare(password, employer.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'wrong password' });
  }

  const accessToken = jwt.sign({ employerId: employer._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d'  });
  const refershToken = jwt.sign({EmployerRefershToken:employer._id},process.env.REFRESH_TOKEN_SECRET)

 try {
  const result = await employerIntialdata.updateOne({ _id: employer._id }, { $set: { refershToken: refershToken } });
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

async function VerifyAuthentication(req,res){
  console.log("token agay bhai",req.cookies.token);
  const employerId = GetEmployerIdFromCookie(req.cookies.token)
  console.log(employerId)
  if(!employerId){
     return res.status(401).json({message:'Unauthorized request'})
  }

  try {
    const user = await employerIntialdata.findById(employerId);
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



module.exports = {Signup,verifyUser,SignIn,VerifyAuthentication}