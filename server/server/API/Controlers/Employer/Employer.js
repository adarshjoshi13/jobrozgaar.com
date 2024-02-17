const {GetUserIdFromCookie,GetEmployerIdFromCookie} = require('../../Helper/getUserId');
const {uploadFileOnCloudinary,deleteFileFromCloudinary} = require('../../Helper/cloudinary');
const jobDetails = require('../../Models/Employer/JobDetails.model')
const companyDetails = require('../../Models/Employer/Company.model')
const EmployerInitalDetails = require('../../Models/Employer/EmployerInital');
const employerIntialdata = require('../../Models/Employer/EmployerInital');

async function JobDetails(req,res){
    console.log(req.body)
    console.log("token agay bhai",req.cookies.token);
    const employerId = GetEmployerIdFromCookie(req.cookies.token)
    console.log(employerId)
    if(!employerId){
       return res.status(401).json({message:'Unauthorized request'})
    }

    const {wantToHire,NoOfVacancy,JobTitle,JobType,Gender,religion,SalaryRange,WorkingShift,WorkTiming,JobLocation} = req.body.Job;
    const {candidateDetails} = req.body.Candidate

    try {
        const JobDetail = await jobDetails.create({
          user:employerId,
          wantToHire,
          NoOfVacancy,
          JobTitle,
          JobType,
          Gender,
          religion,
          SalaryRange,
          WorkingShift,
          WorkTiming,
          JobLocation,
          candidateDetails
          })
          return res.status(200).json({message:"details added"})
        
     } catch (error) {  
        if(error.name === "ValidationError"){
            const validationErrors = Object.values(error.errors).map((val) => val.message);
            console.log(validationErrors)
      
            return res.status(400).json({message:validationErrors[0]})
          }
         
          console.log(error)
        return res.status(500).json({message:"something went wrong"});
     }
} 

async function AddcandidateDetails(req,res){
  
   console.log(req.body)
  //  console.log("token agay bhai",req.cookies.token);
   const employerId = GetEmployerIdFromCookie(req.cookies.token);
   console.log(employerId)
   if(!employerId){
      return res.status(401).json({message:'Unauthorized request'})
   }

   const {candidateDetails} = req.body
   console.log(candidateDetails.MinimumQualification)
   if(!candidateDetails.MinimumQualification){
      return res.status(400).json({message:'MinimumQualification is required'});
   }
   if(!candidateDetails.PreferredSkills){
      return res.status(400).json({message:'PreferredSkills is required'})
   }

   if(!candidateDetails.LanguageKnown){
      return res.status(400).json({message:'Language Known is required'});
   }

   try {
      const updatedDocument = await jobDetails.findOneAndUpdate(
        { user: employerId },
        { $set: { candidateDetails, } },
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

async  function AddCompanyDetails(req,res){
  const employerId = GetEmployerIdFromCookie(req.cookies.token)
  console.log(employerId)
  if(!employerId){
     return res.status(401).json({message:'Unauthorized request'})
  }
  let filesOnCloudinary = []
  const Documentfile = req.files.find(file => file.fieldname === 'Logo')?.path ?? null;
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

  const Logo = await uploadimg(Documentfile);
  if(!Logo){
    return res.status(400).json({message:'Logo required'});
  }
  if(Logo === 'something went wrong'){
    throw new Error("Something Went Wrong while uploaidng doucment")
  }
 const { CompanyInformation,InterviewAddress,CompanyVerification} = req.body
  try {
    const companydetails = await companyDetails.create({
      user:employerId,
      CompanyInformation:JSON.parse(CompanyInformation),
      InterviewAddress:JSON.parse(InterviewAddress),
      CompanyVerification:{
        ...JSON.parse(CompanyVerification),Logo
      }
       
      })
      const updateEployerIntialData = await employerIntialdata.findByIdAndUpdate(
        employerId,
        {
          $set: { "CompanyDetails": companydetails._id },
          $inc: { ProfileCompleate: 90 },
        },
        { new: true }
      );
      console.log('hoagya  update',updateEployerIntialData)
      if(!updateEployerIntialData){
        companyDetails.findByIdAndDelete(companydetails._id)
        return res.status(500).json({message:"internal server errro can't update working details"})
      }
      return res.status(200).json({message:"details added"});
    
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
      console.log(error)
    return res.status(500).json({message:"something went wrong"});
 }
}

// get all data
async function GetAllDataOfEmployer(req,res){
  const employerId = GetEmployerIdFromCookie(req.cookies.token)
  console.log(employerId)
  if(!employerId){
     return res.status(401).json({message:'Unauthorized request'})
  }

  try {

    const EmployerAllData = await EmployerInitalDetails.findById({_id:employerId})
    .populate('CompanyDetails')
    .populate('jobs')
    if(!EmployerAllData){
      res.status(404).json({message:"no document found"})
    }
    else{
      res.status(200).json({data:EmployerAllData});

    }
    
  } catch (error) {
    console.log(error);
    res.status(500).json({message:"internal server error"});
  }
}

async function ChangeLogo(req,res){
  const employerId = GetEmployerIdFromCookie(req.cookies.token)
  console.log(employerId)
  if(!employerId){
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
      return res.status(400).json({message:'Logo is  missing'});
    }
    if(profilePicture === 'something went wrong'){
      throw new Error("Something Went Wrong")
    }

    try {
      const updatedDocument = await companyDetails.findOneAndUpdate(
        { user: employerId },
        { $set: {"CompanyVerification.Logo":profilePicture, } },
        { new: true }
      );
  
      if (updatedDocument) {
        res.status(200).json({ message: 'logo  updated successfully', updatedDocument });
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




module.exports = {JobDetails,AddcandidateDetails,AddCompanyDetails,GetAllDataOfEmployer,ChangeLogo}