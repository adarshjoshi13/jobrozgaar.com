import React from 'react'
import { PersonalNav, AboutMe, WorkPage,Employeetab} from '../../Components/export'
import employee from '../../API/Employee';
// import employee from '../../API/Employee';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {Loader} from '../../Components/export';
function WorkExperince() {
    const initialValues = {
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
      };
      const [loader,Setloader] = useState(false)
      const navigate = useNavigate()
      const  AddWorkingEXprince = function(data){
        return employee.AddWorkingEXprince(data)
      }
      useEffect(()=>{
        (async ()=>{
          Setloader(true)
          const result = await employee.getintialdata();
          if(result.status === 200){
           if(result.data?.AdditionalUserinfo?.WorkingExperiences ){
            navigate('/update-working-exprince')
           }
           else{
            Setloader(false)
            return
           }
            
          }
         else{
          Setloader(false)
          //  toast.error("something went wrong")
         }
        })()
      },[])
      // console.log('seee',AddWorkingEXprince)
      if(loader){
        return <Loader style={{ width: '100vw',
        height: '60vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',}}/>
      }
    return (
        <>
       <div className="container d-flex flex-wrap flex-lg-nowrap flex-md-nowrap  justify-content-around">
  <div className="nav-tab-employee">
    <Employeetab active={'work Experience'}/>
  </div>
  <div className="container w-100" >
    {/* <PersonalNav/> */}
   
    <AboutMe/>
  
   <div className="work-page w-100 mb-5">
    <WorkPage initialValues={initialValues} senrequest={AddWorkingEXprince} redirect={'/education'}/></div>

  </div>
</div>
        </>


    )
}

export default WorkExperince