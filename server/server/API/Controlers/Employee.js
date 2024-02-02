const PersonalProfile = require('../Models/employeePersonalProf.model')
const {GetUserIdFromCookie} = require('../Helper/getUserId')
const {uploadFileOnCloudinary,deleteFileFromCloudinary} = require('../Helper/cloudinary')
const employePersonalDetails = require('../Models/Employee.model')
const { json } = require('express')
const WorkingExprince = require('../Models/Employee.workExprince')
async function AddPersonalProfile(req, res,) {
  console.log()
    const employeeId = GetUserIdFromCookie(req.cookies.token)
    console.log(employeeId)
    if(!employeeId){
       return res.status(401).json({message:'Unauthorized request'})
    }

    let filesOnCloudinary = []
    // geting images first
    const Adharcard = req.files.find(file => file.fieldname === 'Adharcard')?.path ?? null;
    const Pancard = req.files.find(file => file.fieldname === 'PanCard')?.path ?? null;
    const Drivinglicence = req.files.find(file => file.fieldname === 'DrivingLicence')?.path ?? null;

  // console.log(coverimg)
  const uploadimg = async (filepath)=>{
    if(!filepath){
        return null
      }
      const file = await uploadFileOnCloudinary(filepath)
      if(!file){
        for (const i of filesOnCloudinary) {
            try {
              const deletionResult = await deleteFileFromCloudinary(i);
              if (!deletionResult) {
                console.log(i, "not deleted");
              } else {
                console.log('File deletion successful.');
              }
            } catch (error) {
              console.error('Error deleting file:', error);
            }
          };
        return 'something went wrong'
      }
      filesOnCloudinary.push(file.url);
      return file.url;
  }

  const  AdharCardPic = await uploadimg(Adharcard);
  if(!AdharCardPic){
    return res.status(400).json({message:'AdharCard picture is missing'});
  }
  if(AdharCardPic === 'something went wrong'){
    throw new Error("Something Went Wrong")
  }
  const  PanCardPic = await uploadimg(Pancard);
  if(!PanCardPic){
    return res.status(400).json({message:'PanCard picture is missing '});
  }
  if(PanCardPic === 'something went wrong'){
    throw new Error("Something Went Wrong")
  }

  const DrivingLicencePic  = await uploadimg(Drivinglicence);
  if(!DrivingLicencePic){
    return res.status(400).json({message:'DrivingLicence picture is  missing'});
  }
  if(DrivingLicencePic === 'something went wrong'){
    throw new Error("Something Went Wrong")
  }
  const {fatherName, DOB, MaritalStatus, Gender, religion, CurrentAddress,CurrentCity, CurrentState, PermanentAddress,MobileNumber,AdharNumber,PanNumber,DrivingLicenceNumber} = req.body

 try {
    const employePersonalDetails = await PersonalProfile.create({
      user:employeeId,
        fatherName,
        DOB,
        MaritalStatus,
        Gender,
        religion,
        CurrentAddress,
        CurrentCity,
        CurrentState,
        PermanentAddress,
        MobileNumber,
        AdharCardPic,
        PanCardPic,
        DrivingLicencePic,
        PanNumber,
        AdharNumber,
        DrivingLicenceNumber
      })
      return res.status(200).json({message:"details added"})
    
 } catch (error) {
    for (const i of filesOnCloudinary) {
        try {
          const deletionResult = await deleteFileFromCloudinary(i);
          if (!deletionResult) {
            console.log(i, "not deleted");
          } else {
            console.log('File deletion successful.');
          }
        } catch (error) {
          console.error('Error deleting file:', error);
        }
      };
    if(error.name === "ValidationError"){
        const validationErrors = Object.values(error.errors).map((val) => val.message);
        console.log(validationErrors)
  
        return res.status(400).json({message:validationErrors[0]})
      }
      if ( error.code === 11000) {
        // Handle duplicate key error
        console.error('Duplicate key error:', error.message);
       return res.status(400).json({ message: 'phone Number already exist.' });
      }
      console.log(error)
    return res.status(500).json({message:"something went wrong"});
 }


 
    
   }

   async function EditPersonalProfile(req,res){
    console.log()
    const employeeId = GetUserIdFromCookie(req.cookies.token)
    console.log(employeeId)
    if(!employeeId){
       return res.status(401).json({message:'Unauthorized request'})
    }
    const {fatherName, DOB, MaritalStatus, Gender, religion, CurrentAddress,CurrentCity, CurrentState, PermanentAddress,MobileNumber,} = req.body
     console.log(typeof fatherName,DOB)
    try {
      const updatedDocument = await PersonalProfile.findOneAndUpdate(
        { user: employeeId },
        { $set: { fatherName,
          DOB,
          MaritalStatus,
          Gender,
          religion,
          CurrentAddress,
          CurrentCity,
          CurrentState,
          PermanentAddress,
          MobileNumber, } },
        { new: true }
      );
  
      if (updatedDocument) {
        res.status(200).json({ message: 'Document updated successfully', updatedDocument });
      } else {
        res.status(404).json({ message: 'Document not found' });
      }
    } catch (error) {
      console.error('Error updating document:', error.message);
      if(error.name === "ValidationError"){
        const validationErrors = Object.values(error.errors).map((val) => val.message);
        console.log(validationErrors)
  
        return res.status(400).json({message:validationErrors[0]})
      };
      if ( error.code === 11000) {
        console.error('Duplicate key error:', error.message);
       return res.status(400).json({ message: 'phone Number already exist.' });
      }
      res.status(500).json({ message: 'Internal server error' });
    }
   }

   async  function getPersonalProfile (req, res) {
    const employeeId = GetUserIdFromCookie(req.cookies.token)
    console.log(employeeId)
    if(!employeeId){
       return res.status(401).json({message:'Unauthorized request'})
    }

    try {
      const allData = await PersonalProfile.findOne({user:employeeId});
      res.status(200).json({message:"data fetched sucssefully",data:allData,});
    } catch (error) {
      console.error('Error fetching data:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }
  async  function getInitailData (req, res) {
    const employeeId = GetUserIdFromCookie(req.cookies.token)
    console.log(employeeId)
    if(!employeeId){
       return res.status(401).json({message:'Unauthorized request'})
    }

    try {
      const allData = await employePersonalDetails.findOne({_id:employeeId});
      res.status(200).json(allData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async function updateUserProiflePicture(req,res){
    const employeeId = GetUserIdFromCookie(req.cookies.token)
    console.log(employeeId)
    if(!employeeId){
       return res.status(401).json({message:'Unauthorized request'})
    }
    const Profilepic = req.files.find(file => file.fieldname === 'ProfilePicture')?.path ?? null;
    let filesOnCloudinary = []
    const uploadimg = async (filepath)=>{
      if(!filepath){
          return null
        }
        const file = await uploadFileOnCloudinary(filepath)
        if(!file){
          for (const i of filesOnCloudinary) {
              try {
                const deletionResult = await deleteFileFromCloudinary(i);
                if (!deletionResult) {
                  console.log(i, "not deleted");
                } else {
                  console.log('File deletion successful.');
                }
              } catch (error) {
                console.error('Error deleting file:', error);
              }
            };
          return 'something went wrong'
        }
        filesOnCloudinary.push(file.url);
        return file.url;
    }
    const profilePicture  = await uploadimg(Profilepic);
    if(!profilePicture){
      return res.status(400).json({message:'profile picture is  missing'});
    }
    if(profilePicture === 'something went wrong'){
      throw new Error("Something Went Wrong")
    }

    try {
      const updatedDocument = await employePersonalDetails.findOneAndUpdate(
        { _id: employeeId },
        { $set: { profilePicture, } },
        { new: true }
      );
  
      if (updatedDocument) {
        res.status(200).json({ message: 'profile picture  updated successfully', updatedDocument });
      } else {
        res.status(404).json({ error: 'something  went wrong' });
      }
    } catch (error) {
      console.error('Error updating document:', error.message);
      if(error.name === "ValidationError"){
        const validationErrors = Object.values(error.errors).map((val) => val.message);
        console.log(validationErrors)
  
        return res.status(400).json({message:validationErrors[0]})
      };
      res.status(500).json({ message: 'Internal server error' });
    }

  }

  async function WorkExprince(req,res){
    const {Position,Experience,LookingForJobs,Skills} =  req.body;
    console.log(req.body)
    const employeeId = GetUserIdFromCookie(req.cookies.token)
    console.log(employeeId)
    if(!employeeId){
       return res.status(401).json({message:'Unauthorized request'})
    }
    // check
    if(Position === "Experience"){
      if(Experience.year === "" &&  Experience.month === "" && Experience.CompanyName === "" &&  Experience.Designation === "" &&  Experience.StartDate === "" &&  Experience.EndDate === ""){
        return res.status(400).json({message:"Experience is required"})
      }
    }

    try {
      if(Position === "Experience"){
        const WorkExprince = await WorkingExprince.create({
          user:employeeId,
           Experience,
           Position,
           LookingForJobs,
           Skills,
          })
      }
     else{
      const WorkExprince = await WorkingExprince.create({
        user:employeeId,
         Position,
         LookingForJobs,
         Skills,
        })
     }
    
        return res.status(200).json({message:"details added"})
      
   } catch (error) {
    console.log(error)
      if(error.name === "ValidationError"){
          const validationErrors = Object.values(error.errors).map((val) => val.message);
          console.log(validationErrors)
    
          return res.status(400).json({message:validationErrors[0]})
        }
      
      return res.status(500).json({message:"something went wrong"});
   }
  
  }

  async function AddEducationDetails(req, res) {
    const EducationData = req.body;
    console.log(req.body)
    const employeeId = GetUserIdFromCookie(req.cookies.token)
    console.log(employeeId)
    if(!employeeId){
       return res.status(401).json({message:'Unauthorized request'})
    }


    for (let key in EducationData) {
        if (EducationData[key] === "") {
            return res.status(400).json({ message: `${key} is required` });
        }
    }

    let error = []

    let nestedObj = EducationData.Courses.some((e) => {
      for (let key in e) {
          if (e[key] === "") {
              console.log("runned");
              error.push(`${key} is required`)
              return true ;
          }
      }
      return false;
  });

  console.log("nessedtedva",nestedObj)
    if(nestedObj === true){
      return res.status(400).json({ message: error[0] });
    }

    try {
      const updatedDocument = await PersonalProfile.findOneAndUpdate(
        { user: employeeId },
        { $set: { Education: EducationData } },
        { new: true }
      );
  
      if (updatedDocument) {
        res.status(200).json({ message: 'Details added successfully', updatedDocument });
      } else {
        res.status(404).json({ message: 'something  went wrong' });
      }
    } catch (error) {
      console.error('Error updating document:', error.message);
      if(error.name === "ValidationError"){
        const validationErrors = Object.values(error.errors).map((val) => val.message);
        console.log(validationErrors)
  
        return res.status(400).json({message:validationErrors[0]})
      };
      res.status(500).json({ message: 'Internal server error' });
    }
}


   module.exports = {AddPersonalProfile,EditPersonalProfile,getPersonalProfile,getInitailData,updateUserProiflePicture,WorkExprince,AddEducationDetails}