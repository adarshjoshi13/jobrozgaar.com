const PersonalProfile = require('../Models/employeePersonalProf.model')
const {GetUserIdFromCookie} = require('../Helper/getUserId')
const {uploadFileOnCloudinary,deleteFileFromCloudinary} = require('../Helper/cloudinary')
const employePersonalDetails = require('../Models/Employee.model')
const { json } = require('express')
const WorkingExprince = require('../Models/Employee.workExprince')
const employeeIntialdata = require('../Models/Employee.model')
const bcrypt = require('bcrypt')
const JobDetail = require('../Models/Employer/JobDetails.model')
const jobDetails = require('../Models/Employer/JobDetails.model')

// controlers
async function AddPersonalProfile(req, res,) {
  console.log(req.body)
    const employeeId = GetUserIdFromCookie(req.cookies.token)
    console.log(req.body)
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
  const {fatherName,AboutMe, DOB, MaritalStatus, Gender, religion, CurrentAddress,CurrentCity, CurrentState, PermanentAddress,AdharNumber,PanNumber,DrivingLicenceNumber} = req.body

 try {
    const employePersonalDetails = await PersonalProfile.create({
      user:employeeId,
        fatherName,
        AboutMe,
        DOB,
        MaritalStatus,
        Gender,
        religion,
        CurrentAddress,
        CurrentCity,
        CurrentState,
        PermanentAddress,
        AdharCardPic,
        PanCardPic,
        DrivingLicencePic,
        PanNumber,
        AdharNumber,
        DrivingLicenceNumber
      })
      const updatingEmployeeInitalData = await employeeIntialdata.findByIdAndUpdate(
        employeeId,
        {
          $set: {
            'AdditionalUserinfo.PersonalDetails': employePersonalDetails._id,
          },
          $inc: { 'ProfileCompleate': 30 },
        },
        { new: true }
      );
      console.log("dekho bhai",updatingEmployeeInitalData,employePersonalDetails)
      if (!updatingEmployeeInitalData){
        PersonalProfile.findByIdAndDelete(employePersonalDetails._id)
        return res.status(500).json({message:"no updated"})
      }
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
    const {fatherName,AboutMe, DOB, MaritalStatus, Gender, religion, CurrentAddress,CurrentCity, CurrentState, PermanentAddress,} = req.body
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
          AboutMe
         } },
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
      const allData = await employePersonalDetails.findOne({_id:employeeId}) .populate('AdditionalUserinfo.PersonalDetails')
      .populate('AdditionalUserinfo.WorkingExperiences')
      .populate({
        path: 'SavedJObs',
        populate: {
          path: 'user',
          model: 'EmployerIntialData',
          populate: {
            path: 'CompanyDetails',
            model: 'CompanyDetails',
          },
        },
      })
      res.status(200).json(allData);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

  async function updateUserProiflePicture(req,res){
    const employeeId = GetUserIdFromCookie(req.cookies.token)
    console.log("file",req.files)
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
        res.status(404).json({ error: 'something  went wrong' });
      }
    } catch (error) {
      console.error('Error updating document:', error.message);
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
   
    let id;
    try {
      if(Position === "Experience"){
        const WorkExprince = await WorkingExprince.create({
          user:employeeId,
           Experience,
           Position,
           LookingForJobs,
           Skills,
          })
          id = WorkExprince._id
      }
     else{
      const WorkExprince = await WorkingExprince.create({
        user:employeeId,
         Position,
         LookingForJobs,
         Skills,
        })
        id = WorkExprince._id
     }
     const updatingEmployeeInitalData = await employeeIntialdata.findByIdAndUpdate(
      employeeId,
      { $set: { 'AdditionalUserinfo.WorkingExperiences': id },$inc: { 'ProfileCompleate': 30 } },
      { new: true }
    )
    console.log("dekho bhai",updatingEmployeeInitalData,employePersonalDetails)
    if (!updatingEmployeeInitalData){
      WorkingExprince.findByIdAndDelete(id)
      return res.status(500).json({message:"internal server errro can't update working details"})
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
        { $set: {  Education: EducationData,}},
        { new: true }
      );

      console.log("hogaya update",updatedDocument.update === true)
  
      if (updatedDocument) {
        if(updatedDocument.update === true){
          const updatingEmployeeInitalData = await employeeIntialdata.findByIdAndUpdate(
            employeeId,
            { $inc: { 'ProfileCompleate': 30 } },
            { new: true }
          )
          // console.log("dekho bhai",updatingEmployeeInitalData,employePersonalDetails)
          if (!updatingEmployeeInitalData){
            return res.status(500).json({message:"no updated"})
          }
          const finalUpdatedDocument = await PersonalProfile.findOneAndUpdate(
            { user: employeeId },
            { $set: { update:false} },
            { new: true }
          );
          console.log("finalupdate",typeof finalUpdatedDocument.Education.update)
          if(!finalUpdatedDocument){
            return res.status(500).json({message:"not updated"})
          }
        }
       
      return  res.status(200).json({ message: 'Details added successfully', updatedDocument });
      } else {
       return res.status(404).json({ message: 'something idk  went wrong' });
      }
    } catch (error) {
      console.error('Error updating document:', error);
      if(error.name === "ValidationError"){
        const validationErrors = Object.values(error.errors).map((val) => val.message);
        console.log(validationErrors)
  
        return res.status(400).json({message:validationErrors[0]})
      };
      res.status(500).json({ message: 'Internal server error' });
    }
}

async function UpdateWorkExprince(req,res){
  const { Position, Experience, LookingForJobs, Skills } = req.body;
  const employeeId = GetUserIdFromCookie(req.cookies.token);

  console.log(req.body)
  if (!employeeId) {
    return res.status(401).json({ message: 'Unauthorized request' });
  }

  const updateData = {
    Position,
    Experience,
    LookingForJobs,
    Skills,
  };


  if(Position === "Experience"){
    if(Experience.year === "" &&  Experience.month === "" && Experience.CompanyName === "" &&  Experience.Designation === "" &&  Experience.StartDate === "" &&  Experience.EndDate === ""){
      return res.status(400).json({message:"past company's experinces is required"})
    }
  }

  if(Position === "Experience"){
    if(Experience.length === 0){
      return res.status(400).json({message:"past company's experinces is required, Add company"})
    }
  }
  try {
  
    // Update the work experience
    const updatedWorkExperience = await WorkingExprince.findOneAndUpdate({user:employeeId}, updateData, {
      new: true, 
      runValidators: true, 
    });

    if (!updatedWorkExperience) {
      return res.status(404).json({ message: 'can not use this route' });
    }


    console.log(UpdateWorkExprince)
    return res.status(200).json({ message: 'Details updated successfully', updatedWorkExperience });
  } catch (error) {
    console.error(error);

    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((val) => val.message);
      return res.status(400).json({ message: validationErrors[0] });
    }

    return res.status(500).json({ message: 'Internal server error' });
  }
}

async function ChangePassword(req,res){
 try {
  const employeeId = GetUserIdFromCookie(req.cookies.token);
  console.log(employeeId)

  console.log(req.body)
  if (!employeeId) {
    return res.status(401).json({ message: 'Unauthorized request' });
  }
  
  const {oldpassword,newPassword,confirmNewPassword} = req.body;
  if(newPassword !== confirmNewPassword){
    return res.status(400).json({ message: 'New password and confirm password should be same' });
  }

  if(newPassword.length < 8){
    return res.status(400).json({ message: 'New password should contain more than 8 character' });
  }

  const employee = await employeeIntialdata.findById(employeeId);
  if(!employee){
    return res.status(404).json({ message:"user not found please sign up "});
  }

  console.log('user',employee)

  const validPassword = await bcrypt.compare(oldpassword, employee.password);
  if (!validPassword) {
    return res.status(401).json({ message: 'old password is  wrong' });
  }
  else{
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const updatingEmployeeInitalData = await employeeIntialdata.findOneAndUpdate(
        {_id:employeeId},
      { $set: { 'password': hashedPassword } },
      { new: true }
    )
    return res.status(200).json({ message: 'Password changed successfully',data:updatingEmployeeInitalData });

  }
 } catch (error) {
  console.log("erro while updating password",error);
  return res.status(500).json({ message: 'something went wrong, internal server error' });
 }


}

// job filtrations
async function GetRecommandJobs(req,res){
  const {jobTitle} = req.query

  console.log(jobTitle,req.query)


  try {
   const recommandedJobs = await JobDetail.aggregate([
  {
    $match: {
      JobTitle: jobTitle
    }
  },
  {
    $lookup: {
      from: 'employerintialdatas',
      localField: 'user',
      foreignField: '_id',
      as: 'CompanyDetails'
    }
  },
  {
    $addFields: {
      CompanyDetails: {
        $arrayElemAt: ["$CompanyDetails", 0]
      }
    }
  },
  {
    $lookup: {
      from: 'companydetails',
      localField: 'CompanyDetails.CompanyDetails',
      foreignField: '_id',
      as: 'CompanyDetails.CompanyDetails'
    }
  },
  {
    $addFields: {
      "CompanyDetails.CompanyData": {
        $arrayElemAt: ["$CompanyDetails.CompanyDetails", 0]
      }
    }
  },
  {
    $project: {
      "CompanyDetails.CompanyDetails": 0 // Remove the duplicate CompanyDetails field
    }
  }
]);
    return res.status(200).json({data:recommandedJobs})

  } catch (error) {
    console.log(error)
    return res.status(500).json({message:"Internal Server Error"});
  }

}


async function GetJobByID (req,res){
  try {
    const{ id} = req.params;
    console.log('here is the id',id)

    const jobdetails = await jobDetails.findById(id).populate({
      path: 'user',
      populate: [
        { path: 'CompanyDetails' },
        { path: 'jobs' }
      ]
    });
    if(!jobdetails) return res.status(404).json({message:'No  Job Found with this ID'});
    return res.status(200).json({data:jobdetails});
    
  } catch (error) {
    console.log(error)
    return res.status(500).json({message:"Internal Server Error"});
  }
}

async function SaveJOb(req, res) {
  const { id } = req.params;
  console.log('here is the id',req.cookies.token);
  const employeeId = GetUserIdFromCookie(req.cookies.token);
  console.log('cookie',employeeId);
  if (!employeeId) {
    return res.status(401).json({ message: 'Unauthorized request' });
  }

  try {

    const CheckJob =  await employeeIntialdata.findOne({
      _id: employeeId,
      SavedJObs: { $in: [id] }
    });

    if(!CheckJob){
      const result = await employeeIntialdata.findByIdAndUpdate(
        employeeId,
        { $push: {SavedJObs: id } },
        { new: true } 
      );
  
      if (!result) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      console.log('this is the result of save job',result);
      return res.status(200).json({ message: 'Job saved successfully', data: result });
    }
  else{
    const result = await employeeIntialdata.findByIdAndUpdate(
      employeeId,
      { $pull: {SavedJObs: id } },
      { new: true }
    );
    if (!result) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    console.log('this is the result of unsave job',result);
    return res.status(200).json({ message: 'Job Unsaved', data: result });
  }

   
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}


   module.exports = {AddPersonalProfile,EditPersonalProfile,getPersonalProfile,getInitailData,updateUserProiflePicture,WorkExprince,AddEducationDetails,UpdateWorkExprince,ChangePassword,GetRecommandJobs,GetJobByID,SaveJOb}