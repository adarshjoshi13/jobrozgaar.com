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
          console.log('yel bhai',result.data)
          setFormData({...result.data})
          const result2 = await employee.getPersonalProfile()
          if(result2.status === 200){
              setFormData((prev)=>{
                return  {...prev,Location:result2.data.data?.CurrentAddress || "",
                  }
              })
          }
        }
       else{
         toast.error("erro fetching data")
       }
      })()
    },[])
    console.log("formdata",formData)
   
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
      <Employeetab />
      <div className="my-job-content">
        {/* <EmployeNav /> */}
        <ProfileCard email={formData.email || ""} proifePic={formData.profilePicture || ""
} number={formData.mobile || ""} name={formData.firstName
} location={formData.Location

|| " "}/>
        <div className="my-job-box">
          <h2>My Jobs</h2>
          <div className="row mb-3 justify-content-between job-imgs">
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
          <div className="col-md-2 mt-5">
            <img src="/Utility/myjob4.png" alt="" />
          </div>
        </div>
          <div className="container-sm sider-man-card">
            <div className="row">
              <div className="col-md-8">
                <div className="empty-text h-100 w-100 d-flex text-center flex-column justify-content-between">
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
