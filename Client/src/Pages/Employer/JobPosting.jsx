import React, { useState } from 'react'
import { Jobposting } from '../../Components/export'


function JobPosting() {
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
  console.log('jammu',jobData)

  function fillJobData(data){
    SetJobData(data)
    setclicked(true)
  }
  return (
    <Jobposting initialValues={initialValues} utlityfnc={fillJobData}/>
  )
}

export default JobPosting