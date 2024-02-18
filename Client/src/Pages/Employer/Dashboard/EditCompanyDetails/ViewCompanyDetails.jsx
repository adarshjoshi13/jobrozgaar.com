import React, { useState } from 'react'
import { Company,PersonalNav } from '../../../../Components/export'

function ViewCompanyDetails({AllData}) {
  console.log('dekh verree',AllData.CompanyDetails)
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
      CompanyVerfiaction:"",
      PanNo:'',
      GstNo:"",

    },
    companyAndInterviewAdressSame:false,

    CompanyAddress:{
      FlatNo: "",
      city: "",
      State: "",
      Landmark: ""
    }
  };
  // const [initialValues,SetinitialValues] = useState(AllData.CompanyDetails || {})
  return (
 
     <Company initialValues={AllData.CompanyDetails || companyDetailsObject} Edit={true}/>
 
  )
}

export default ViewCompanyDetails