import React from 'react'
import JobBoxCard from '../JobBoxCard/JobBoxCard'
import employee from '../../../../../API/Employee'
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Loader } from '../../../../../Components/export';
import { Link } from 'react-router-dom';
import {getTimeDifferenceString,checkIfsaved} from '../../../../../utlity/utlityfnc'


function SavedJobs() {
    // console.log('jobs',AllData.SavedJObs)
    const [AllData,SetAllData] =  useState([])
    const [loader,Setloader] = useState(false);
    const [SaveLoader,SetSaveLoader] = useState(false)
    const [JobList,SetJobList] = useState([])
    const [Foreach,setForeach] = useState(false)
    const [run,Setrun] = useState(false)
    console.log('saved',AllData)
    console.log('form',JobList)
  
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
      
    useEffect(() => {
        (async () => {
          Setloader(true)
          const result = await employee.getintialdata();
          if (result.status === 200) {
            console.log('alien bhai',result.data)
            SetAllData([ ...result.data.SavedJObs ])
            Setloader(false)
          }
          else {
            Setloader(false)
            toast.error("erro fetching data")
          }
        })()
      }, [run])

useEffect(()=>{
    console.log('running...', Date.now())
        const arr = []
        AllData.map((i,index)=>{
          console.log('i',i)
          const newjob = {
            jobTitle: i.JobTitle,
            imageUrl: i.user.CompanyDetails.CompanyVerification.Logo,
            company: i.user.CompanyDetails.CompanyInformation.companyName,
            location: i.JobLocation.city,
            salary: i.SalaryRange.minimum + "-" + i.SalaryRange.maximum ,
            btnTitle: 'View',
            btnTitle1: checkIfsaved(i._id,AllData),
            btnTitle2: 'Apply',
            timeAgo: getTimeDifferenceString(new Date(i.createdAt)),
            mobile: i.user.mobile,
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