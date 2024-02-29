import React from 'react'
import JobBoxCard from '../JobBoxCard/JobBoxCard'
import { Link } from 'react-router-dom';
import { MakeSerchparams,getTimeDifferenceString,checkIfsaved } from '../../../../../utlity/utlityfnc';
import employee from '../../../../../API/Employee';
import { useState,useEffect } from 'react';
import { Loader } from '../../../../../Components/export';
import { ToastContainer, toast } from 'react-toastify';


function RecommandJobs() {
    // console.log('my',MakeSerchparams({jobTitle:AllData?.AdditionalUserinfo?.WorkingExperiences?.LookingForJobs?.JobTitle}));
    const [loader,Setloader] = useState(true);
    const [AllData,SetAllData] =  useState({})
    const [formData, setFormData] = useState([])
    const [SaveLoader,SetSaveLoader] = useState(false)
    const [JobList,SetJobList] = useState([])
    const [Foreach,setForeach] = useState(false)
    const [run,Setrun] = useState(false)
  
    // Handle save
    const handleSave = async (id)=>{
      SetSaveLoader(true)
      const result = await employee.saveJob(id);
      if (result.status === 200) {

        Setrun(!run)

        toast.success(result.data.message)
        SetSaveLoader(false)
      }
      else {
        SetSaveLoader(false)
        toast.error(result.data.message)
      }
    }
      

    // get user's curretn data for show 
   
      useEffect(() => {
        (async () => {
          Setloader(true)
          const result = await employee.getintialdata();
          if (result.status === 200) {
            console.log('alien bhai',result.data)
            SetAllData({ ...result.data })
            Setloader(false)
          }
          else {
            Setloader(false)
            toast.error("erro fetching data")
          }
        })()
      }, [run])
   

      useEffect(()=>{
    
   if(formData.length !== 0){
        let newArr = []
        formData.forEach((i,index)=>{
          // console.log('i',i)
          const newjob = {
            jobTitle: i.JobTitle,
            imageUrl: i.CompanyDetails.CompanyData.CompanyVerification.Logo,
            company: i.CompanyDetails.CompanyData.CompanyInformation.companyName,
            location: i.JobLocation.city,
            salary: i.SalaryRange.minimum + "-" + i.SalaryRange.maximum ,
            btnTitle: 'View',
            btnTitle1: checkIfsaved(i._id,AllData.SavedJObs),
            btnTitle2: 'Apply',
            timeAgo: getTimeDifferenceString(new Date(i.createdAt)),
            mobile: i.CompanyDetails.mobile,
            linkToDetails1: `/Dashboard/jobs/job-details/${i._id}`,
            id:i._id,
            onClick:(e)=>{
              console.log('saved job',e.target.id)
              handleSave(e.target.id)
            }
          }
          newArr.push(newjob)
        })
        SetJobList(newArr)
      
      
       
   }
      },[formData])
      
      useEffect(() => {
      if(AllData?.AdditionalUserinfo?.WorkingExperiences?.LookingForJobs?.JobTitle){
        (async () => {
            Setloader(true)
            const result = await employee.GetRecommandJobs(MakeSerchparams({jobTitle:AllData?.AdditionalUserinfo?.WorkingExperiences?.LookingForJobs?.JobTitle}));
            if (result.status === 200) {
              console.log('yel bhai',result.data.data)
              setFormData(result.data.data)
              Setloader(false)
            }
            else {
              Setloader(false)
              toast.error("erro fetching data")
            }
          })()
      }
      }, [AllData])





      if (loader) {
        return <Loader style={{
          width: '100%',
          height: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} />
    }
  return (
    <>
<>
  <div>
  {
  JobList.length > 0 ? (
    JobList.map((i, n) => {
      return <JobBoxCard key={n} {...i} />;
    })
  ) : (
    <div className="nosave text-center mb-5 mt-5">
            <h5>no jobs to Recommand right now</h5>
        </div>
  )
}
    <div className="row">
          <div className="col-lg-12">
            <div className="browse-btn2 text-center mt-50">
              <Link  to="/fliter-jobs" className="border-btn2">
                View more
              </Link>
            </div>
          </div>
        </div>
  </div>
</>
   </>
  )
}

export default RecommandJobs