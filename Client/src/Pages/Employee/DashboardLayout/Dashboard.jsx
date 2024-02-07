import React from 'react'
import './Dashboard.css'
import { ProfileCard,Employeetab } from '../../../Components/export'
import {Loader} from '../../../Components/export';
import employee from '../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';

function Dashboard({children}) {
    const [loader,Setloader] = useState(false);
    const [formData, setFormData] = useState({})
    useEffect(()=>{
        (async ()=>{
          const result = await employee.getintialdata();
          if(result.status === 200){
            // console.log('yel bhai',result.data)
            setFormData({...result.data})
          }
         else{
           toast.error("erro fetching data")
         }
        })()
      },[])
 const currentAddress = (
  (formData?.AdditionalUserinfo?.PersonalDetails ?? {}).CurrentAddress ?? null
)
const profileCompleate = formData?.ProfileCompleate
console.log("formdata",profileCompleate)
   


    if(loader){
        return <Loader style={{ width: '100vw',
        height: '60vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',}}/>
      }
  return (
  <>
     <ProfileCard email={formData.email || ""} proifePic={formData.profilePicture || ""
} number={formData.mobile || ""} name={formData.firstName
} location={currentAddress

|| " "}  compleateProfile={profileCompleate} />
<Employeetab/>
  
  </>
  )
}

export default Dashboard