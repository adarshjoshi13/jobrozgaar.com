import React from 'react'
import JobBoxCard from '../JobBoxCard/JobBoxCard'
import employee from '../../../../../API/Employee'
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Loader } from '../../../../../Components/export';
import { Link } from 'react-router-dom';
import {getTimeDifferenceString} from '../../../../../utlity/utlityfnc'


function SavedJobs({AllData,Reload}) {
    console.log('jobs',AllData.SavedJObs)
    const [loader,Setloader] = useState(false);
    const [formData, setFormData] = useState(AllData?.SavedJObs || [])
    const [SaveLoader,SetSaveLoader] = useState(false)
    const [JobList,SetJobList] = useState([])
    const [Foreach,setForeach] = useState(false)
    const [run,setrun] = useState(0)
    console.log('saved',JobList)
    console.log('form',run)
  
    // Handle save
    const handleSave = async (id)=>{
      SetSaveLoader(true)
      const result = await employee.saveJob(id);
      if (result.status === 200) {
        Reload()
        toast.success(result.data.message)
        SetSaveLoader(false)
      }
      else {
        SetSaveLoader(false)
        toast.error(result.data.message)
      }
    }
      

useEffect(()=>{
        setrun(run+1)
   if(formData.length > 0){

      if(Foreach === false){
        const arr = []
        formData.map((i,index)=>{
          console.log('i',i)
          const newjob = {
            jobTitle: i.JobTitle,
            imageUrl: i.user.CompanyDetails.CompanyVerification.Logo,
            company: i.user.CompanyDetails.CompanyInformation.companyName,
            location: i.JobLocation.city,
            salary: i.SalaryRange.minimum + "-" + i.SalaryRange.maximum ,
            btnTitle: 'View',
            btnTitle1: 'Save',
            btnTitle2: 'Apply',
            timeAgo: getTimeDifferenceString(new Date(i.createdAt)),
            mobile: i.user.CompanyDetails.mobile,
            linkToDetails1: `/Dashboard/jobs/job-details/${i._id}`,
            id:i._id,
            onClick:(e)=>{
              console.log('saved job',e.target.id)
              handleSave(e.target.id)
            }
          }
          arr.push(newjob)
         
        // SetJobList([...JobList,newjob])
        })
        SetJobList([...arr]);
       
      }

    setForeach(true)
     
       
   }
      },[AllData])
      



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


    <div>
    {
      JobList.length > 0 ? (
        JobList.map((i, n) => {
          return <JobBoxCard key={n} {...i} />;
        })
      ) : (
        <div className="nosave text-center mb-5 mt-5">
            <h5>no saved jobs</h5>
        </div>
      )
    }
  </div>
  
  )

}

export default SavedJobs