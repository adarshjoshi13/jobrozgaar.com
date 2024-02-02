import React from 'react'
import './company.css'
import { Company } from '../../../Components/export'
function CompanyDetails() {
  const companyDetailsObject = {
    CompanyInformation: {
      companyName: "",
      Recruiter: "",
      HrWhatsAppNo: "",
      Email: ""
    },
    InterviewAddress: {
      FlatNo: "",
      city: "",
      State: "",
      Landmark: ""
    },
    CompanyVerification: {
      DocumentNo: "",
      Document: ""
    }
  };
  
  // console.log(companyDetailsObject);
  
  return (
    <Company initialValues={companyDetailsObject}/>
  )
}

export default CompanyDetails