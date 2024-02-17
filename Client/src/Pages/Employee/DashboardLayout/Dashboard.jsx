import React from 'react'
import './Dashboard.css'
import { ProfileCard,Employeetab, PersonalDetails } from '../../../Components/export'
import {Loader} from '../../../Components/export';
import employee from '../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';

function Dashboard({children,navtag}) {
    const [loader,Setloader] = useState(false);
    const [formData, setFormData] = useState({})
    const [reload,setReload] = useState(false)
    useEffect(()=>{
        (async ()=>{
            Setloader(true)
          const result = await employee.getintialdata();
          if(result.status === 200){
            // console.log('yel bhai',result.data)
            setFormData({...result.data})
            Setloader(false)
          }
         else{
            Setloader(false)
           toast.error("erro fetching data")
         }
        })()
      },[reload])
 const currentAddress = (
  (formData?.AdditionalUserinfo?.PersonalDetails ?? {}).CurrentAddress ?? null
)
const profileCompleate = formData?.ProfileCompleate
// console.log("CUrrent",currentAddress)
   
const fncForReload = ()=>{
  setReload(!reload)
  // console.log('')
}
 function UploadImg (img){
  return employee.ProfilePic(img)
 }
    if(loader){
        return <Loader style={{ width: '100%',
        height: '80vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',}}/>
      }
  return (
  <>
  <div className="container">
  <ProfileCard email={formData.email || ""} proifePic={formData.profilePicture || ""
} number={formData.mobile || ""} name={formData.firstName
} location={currentAddress || ""}  compleateProfile={profileCompleate} utlityFunction={fncForReload} UploadImg={UploadImg}/>
<Employeetab active={navtag}/>
{children}
  </div>
  
  </>
  )
}

export default Dashboard