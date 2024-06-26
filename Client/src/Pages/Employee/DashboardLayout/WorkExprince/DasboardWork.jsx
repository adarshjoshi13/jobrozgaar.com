
import React from 'react'
import {AboutMe, ArrowNavigate, WorkPage,} from '../../../../Components/export'
import employee from '../../../../API/Employee';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function DasboardWork({AllData,Reload}) {
  // console.log('update',AllData?.AdditionalUserinfo?.WorkingExperiences)
    const [initialValues,SetinitialValues] = useState({
        Position: "",
        Experience:[ {
            year: "",
            month: "",
            CompanyName: "",
            Designation: "",
            StartDate: "",
            EndDate: ""
          },],
        LookingForJobs: {
          JobTitle: "",
          JobType: ""
        },
        Skills:[]
      })
      // console.log('tata bye bye',initialValues)
      const  AddWorkingEXprince = function(data){
        return employee.UpdateWorkingExperince(data)
      }
      // const [formData, setFormData] =  useState({})
      useEffect(()=>{
         if(AllData){
          SetinitialValues({...AllData?.AdditionalUserinfo?.WorkingExperiences ?? {...initialValues} })
         }
        },[])
  return (
    <div className="container d-flex p-0 flex-wrap flex-lg-nowrap flex-md-nowrap">
    <div className="nav-tab-employee">
      {/* <Employeetab active={'work Experience'}/> */}
    </div>
    <div className="container p-0 mt-3" >
      {/* <PersonalNav/> */}
      <ArrowNavigate url={'/Utility/ex.png'}/>
      <AboutMe/>
      <WorkPage initialValues={initialValues} senrequest={AddWorkingEXprince} redirect={'/Dashboard/work-experience'} Edit={true} utlityfnc={Reload}/>
    </div>
  </div>
  )
}

export default DasboardWork