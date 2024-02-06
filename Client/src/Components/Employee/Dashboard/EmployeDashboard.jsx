import React, { useState,useEffect } from 'react';
import "./EmployeDashboard.css";
import { Link } from 'react-router-dom';
import Buttons from '../Global/Buttons/Buttons';

import ProfileCard from '../Global/ProfileCard/ProfileCard';
import EmployeNav from '../Global/EmployeNav/EmployeNav';
import Employeetab from '../Global/Employee-tab/Employee-tab';
// import { useState,useEffect } from 'react';
import { Loader } from '../../export';
import employee from '../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';

function EmployeDash_Board() {
    const [loader,Setloader] = useState(false);
    const [formData, setFormData] = useState({})
    useEffect(()=>{
        (async ()=>{
          Setloader(true)
          const result = await employee.getintialdata();
          if(result.status === 200){
            Setloader(false)
            console.log('yel bhai',result.data)
            setFormData({...result.data})
          }
         else{
          Setloader(false)
           toast.error("erro fetching data")
         }
         Setloader(false)
        })()
      },[])
 const currentAddress = (
  (formData?.AdditionalUserinfo?.PersonalDetails ?? {}).CurrentAddress ?? null
)
const profileCompleate = formData?.ProfileCompleate
console.log("formdata",profileCompleate)

// console.log('araha hain',currentAddress)
     
if(loader){
  return <Loader style={{ width: '100vw',
  height: '60vh', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',}}/>
}
      


    return (
        <div className='employed-dashbaord'>
            {/* <EmployeNav /> */}
            <Employeetab/>

            <ProfileCard email={formData.email || ""} proifePic={formData.profilePicture || ""
} number={formData.mobile || ""} name={formData.firstName
} location={currentAddress} compleateProfile={profileCompleate} extraData={formData}  />
        </div>
    );
}

export default EmployeDash_Board;
