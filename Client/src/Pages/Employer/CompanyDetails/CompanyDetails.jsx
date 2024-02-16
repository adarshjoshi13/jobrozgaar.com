import React from 'react'
import './company.css'
import { Company } from '../../../Components/export'
function CompanyDetails() {
  const companyDetailsObject = {
    CompanyInformation: {
      companyName: "",
      Recruiter: "",
      HrWhatsAppNo: "",
      Email: "",
      ComapnyAdress:""
    },
    InterviewAddress: {
      FlatNo: "",
      city: "",
      State: "",
      Landmark: ""
    },
    CompanyVerification: {
      DocumentNo: "",
      CompanyVerfiaction:"",
      PanNo:'',
      GstNo:"",

    },
    companyAndInterviewAdressSame:false
  };
  
  // console.log(companyDetailsObject);
  
  return (
    <Company initialValues={companyDetailsObject} redirect={'/employer-plans'} Edit={false}/>
  )
}

export default CompanyDetails