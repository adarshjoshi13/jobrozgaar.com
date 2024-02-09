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

function MyJob({children}) {
  console.log(children)
//   const [loader,Setloader] = useState(false);
//     const [formData, setFormData] = useState({})
//     useEffect(()=>{
//         (async ()=>{
//           const result = await employee.getintialdata();
//           if(result.status === 200){
//             // console.log('yel bhai',result.data)
//             setFormData({...result.data})
//           }
//          else{
//            toast.error("erro fetching data")
//          }
//         })()
//       },[])
//  const currentAddress = (
//   (formData?.AdditionalUserinfo?.PersonalDetails ?? {}).CurrentAddress ?? null
// )
// const profileCompleate = formData?.ProfileCompleate
// console.log("formdata",profileCompleate)
   
//     if(loader){
//       return(
//         <div className="contaienr">
//           <div className="row">
//               <div className="col-md-12">
//               <Loader/>
//               </div>
//           </div>
//         </div>
//       )
//     }
  return (
    <div className="container my-job-container">
      {/* <Employeetab active={'My-Jobs'} /> */}
      <div className="my-job-content w-100">
        {/* <EmployeNav /> */}
        <div className="my-job-box">
          <h4>My Jobs</h4>
          <div className="conatiner col-md-12">
              <div className="  mb-3 d-flex flex-wrap align-items-center gap-3 justify-content-center job-imgs">
          <div className="col-md-2 ">
           <Link to={'/Dashboard/jobs/my-jobs'}> <img src="/Utility/myjob.png" alt="" /></Link>
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
        
       <div className="container">
        {children}
       </div>
        

      
        </div>
      </div>
    </div>
  );
}

export default MyJob;
