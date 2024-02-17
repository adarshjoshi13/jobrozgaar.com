import React, { useEffect, useState } from 'react'
import { Jobposting } from '../../Components/export'


function JobPosting({sendJobdetails}) {
  const initialValues = {
    wantToHire: "",
  NoOfVacancy: "",
  JobTitle: "",
  JobType: "",
  Gender: "",
  religion: "",
  SalaryRange: {
    minimum: "",
    maximum: ""
  },
  WorkingShift: "",
  WorkTiming: "",
  JobLocation: {
    city: "",
    state: ""
  }
  };
   
  const [jobData,SetJobData] = useState({});
  const [clicked,setclicked] =  useState(false);

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  // console.log('jammu',jobData)
  useEffect(()=>{
    if(isEmpty(jobData) === false){
      sendJobdetails(jobData)
    }

  },[jobData,clicked])
  function fillJobData(data){
    SetJobData(data)
    setclicked(!clicked)
  }
  return (
    <Jobposting initialValues={initialValues} utlityfnc={fillJobData}/>
  )
}

export default JobPosting