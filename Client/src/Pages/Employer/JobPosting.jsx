import React from 'react'
import { Jobposting } from '../../Components/export'


function JobPosting() {
  const initialValues = {
    wantToHire: "Full-time",
  NoOfVacancy: "",
  JobTitle: "Software Developer",
  JobType: "Full Time",
  Gender: "Male",
  religion: "Christian",
  SalaryRange: {
    minimum: "50000",
    maximum: "80000"
  },
  WorkingShift: "Day",
  WorkTiming: "9 AM - 5 PM",
  JobLocation: {
    city: "New York",
    state: "NY"
  }
  };
  return (
    <Jobposting initialValues={initialValues}/>
  )
}

export default JobPosting