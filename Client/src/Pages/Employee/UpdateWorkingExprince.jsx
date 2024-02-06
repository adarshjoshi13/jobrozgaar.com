import React from 'react'
import { PersonalNav, AboutMe, WorkPage,Employeetab } from '../../Components/export'
import employee from '../../API/Employee';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function UpdateWorkingExprince() {
    // const initialValues = {
    //     Position: "",
    //     Experience:[ {
    //         year: "",
    //         month: "",
    //         CompanyName: "",
    //         Designation: "",
    //         StartDate: "",
    //         EndDate: ""
    //       },],
    //     LookingForJobs: {
    //       JobTitle: "",
    //       JobType: ""
    //     },
    //     Skills:""
    //   };
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
        Skills:""
      })
      // console.log('tata bye bye',initialValues)
      const  AddWorkingEXprince = function(data){
        return employee.UpdateWorkingExperince(data)
      }
      // const [formData, setFormData] =  useState({})
      useEffect(()=>{
          (async ()=>{
            const result = await employee.getintialdata();
            if(result.status === 200){
            //   console.log('yel bhai',result.data.AdditionalUserinfo.
            //   WorkingExperiences ?? {})
              SetinitialValues({...result.data.AdditionalUserinfo.WorkingExperiences ?? {...initialValues} })
            }
           else{
             toast.error("erro fetching data")
           }
          })()
        },[])
      

  return (
    <div className="container d-flex flex-wrap flex-lg-nowrap flex-md-nowrap">
    <div className="nav-tab-employee">
      <Employeetab active={'work Experience'}/>
    </div>
    <div className="container" >
      <PersonalNav/>
      <AboutMe/>
      <WorkPage initialValues={initialValues} senrequest={AddWorkingEXprince} redirect={'/update-working-exprince'} Edit={true}/>
    </div>
  </div>
  )
  
}

export default UpdateWorkingExprince