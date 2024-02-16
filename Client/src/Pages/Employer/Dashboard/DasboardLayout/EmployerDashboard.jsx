import React, { useState,useEffect } from 'react'
import './EmployerDashboard.css'
import { ProfileCard,Loader, } from '../../../../Components/export'
import { ToastContainer, toast } from 'react-toastify';
import employerData from '../../../../API/Employer/EmployerData'
import EmployerTabs from '../EmployerTabs/EmployerTabs'

function EmployerDashboard({children}) {
  const [loader,Setloader] = useState(false);

  const [formData, setFormData] = useState({})
  const [reload,setReload] = useState(false)
  useEffect(()=>{
      (async ()=>{
          Setloader(true)
        const result = await employerData.getEmployerData();
        if(result.status === 200){
          console.log('yel bhai',result.data)
          setFormData({...result.data.data})
          Setloader(false)
        }
       else{
          Setloader(false)
         toast.error("erro fetching data")
       }
      })()
    },[reload])

    console.log('bullha ki jana',formData)


  if(loader){
    return <Loader style={{ width: '100vw',
    height: '60vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}/>
  }
  return (
   <div className="container">
     <ProfileCard email={formData.email} compleateProfile={formData.ProfileCompleate} number={formData.mobile} proifePic={formData.CompanyDetails?.CompanyVerification.Logo || ""} />
     <EmployerTabs/>
     {React.cloneElement(children, { AllData:  formData })}
   </div>
  )
}

export default EmployerDashboard