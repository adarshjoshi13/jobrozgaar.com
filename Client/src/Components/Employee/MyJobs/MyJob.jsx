// MyJob.js

import React from 'react';
import './MyJob.css';
import { EmployeNav, ProfileCard } from '../../export';
import Employeetab from '../Global/Employee-tab/Employee-tab';
import { Loader } from '../../export';
import employee from '../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';

function MyJob() {
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
      return(
        <div className="contaienr">
          <div className="row">
              <div className="col-md-12">
              <Loader/>
              </div>
          </div>
        </div>
      )
    }
  return (
    <div className="container my-job-container">
      {/* <Employeetab active={'My-Jobs'} /> */}
      <div className="my-job-content">
        {/* <EmployeNav /> */}
        <div className="my-job-box">
          <h4>My Jobs</h4>
          <div className="conatiner col-md-12">
              <div className="  mb-3 d-flex flex-wrap align-items-center gap-3 justify-content-center job-imgs">
          <div className="col-md-2 ">
            <img src="/Utility/myjob.png" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/Utility/myjob1.png" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/Utility/myjob2.png" alt="" />
          </div>
          <div className="col-md-2">
            <img src="/Utility/myjob3.png" alt="" />
          </div>
          <div className="col-md-2 ">
            <img src="/Utility/myjob4.png" alt="" />
          </div>
        </div>
          </div>
        
          <div className="container-sm sider-man-card">
            <div className="row">
              <div className="col-md-8">
                <div className="empty-text  d-flex text-center flex-column justify-content-between">
                  <h2>You have no Recommended Jobs.</h2>
                  <button id='job-btn'>View Jobs</button>
                </div>
              </div>
              <div className="col-md-4 side-man">
                <img src="/Utility/8.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyJob;
