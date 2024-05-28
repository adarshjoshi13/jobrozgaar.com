import React from 'react'
// import './company.css'
import  employerData from '../../../API/Employer/EmployerData'
import { Company } from '../../../Components/export'
import  { useState,useEffect} from "react"
import {Loader} from '../../../Components/export'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
function CompanyDetails() {
  const companyDetailsObject = {
    CompanyInformation: {
      companyName: "",
      Recruiter: "",
      HrWhatsAppNo: "",
      Email: "",
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

  const navigate = useNavigate()

  const [loader,Setloader] = useState(false);

  // check user's details is compleatd or not
  useEffect(()=>{
    (async ()=>{
        Setloader(true)
      const result = await employerData.getEmployerData();
      if(result.status === 200){
        // console.log('yel bhai',result.data)
        if(result.data.data.ProfileCompleate === 100){
        navigate('/employer-starter-Dashboard/view-candidates')
        }
        Setloader(false)
      }
     else{
        Setloader(false)
        toast.error('something went wrong can not verifiy user')
     }
    })()
  },[])
  
  // console.log(companyDetailsObject);
  
  if(loader){
    return <Loader style={{ width: '90%',
    height: '80vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}/>
  }
  return (
    <Company initialValues={companyDetailsObject} redirect={'/employer-plans'} Edit={false}/>
  )
}

export default CompanyDetails