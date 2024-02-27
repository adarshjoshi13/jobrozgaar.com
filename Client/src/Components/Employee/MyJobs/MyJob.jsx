// MyJob.js

import React from 'react';
import './MyJob.css';
import { EmployeNav, ProfileCard } from '../../export';
import Employeetab from '../Global/Employee-tab/Employee-tab';
import { Loader } from '../../export';
import employee from '../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';
import { Outlet,Link } from 'react-router-dom';

function MyJob({children,AllData,Reload}) {
 
  return (
    <div className="container my-job-container p-0">
      {/* <Employeetab active={'My-Jobs'} /> */}
      <div className="my-job-content w-100">
        {/* <EmployeNav /> */}
        <div className="my-job-box">
          <h4 className='p-1'>My Jobs</h4>
          <div className="conatiner col-md-12">
              <div className="  mb-3 d-flex flex-wrap align-items-center gap-3 justify-content-between job-imgs">
          <div className="col-md-2 myjob-img-btn ">
           <Link to={'/Dashboard/jobs/my-jobs'}> <img src="/Utility/myjob.png" alt="" /></Link>
          </div>
          <div className="col-md-2 myjob-img-btn">
            <Link to={'/Dashboard/jobs/recommand-jobs'}> <img src="/Utility/myjob1.png" alt="" /> </Link>
          </div>
          <div className="col-md-2 myjob-img-btn">
            <img src="/Utility/myjob2.png" alt="" />
          </div>
          <div className="col-md-2 myjob-img-btn">
            <img src="/Utility/myjob3.png" alt="" />
          </div>
          <div className="col-md-2 myjob-img-btn ">
            <img src="/Utility/myjob4.png" alt="" />
          </div>
        </div>
          </div>
        
       <div className="container p-0">
       {React.cloneElement(children, { AllData,Reload})}
       </div>
        

      
        </div>
      </div>
    </div>
  );
}

export default MyJob;
