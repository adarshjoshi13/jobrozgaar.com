import React from 'react'
import { PersonalNav, AboutMe ,EducationBox,Employeetab, ArrowNavigate} from '../../../../Components/export'
import employee from '../../../../API/Employee';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

export default function DashboardEducation() {
    const [initialValues,SetinitialValues] = useState( {
        MyQualification:"",
        LanguageKnown :" ",
        Courses:[
         {
          Course : "",
          University: "",
          YearOfPassing: "",
          TotalMarks: "",
          MarkObtain: "",
          Percentage: ""
         },
    
        ]
      })
      useEffect(()=>{
          (async ()=>{
            const result = await employee.getintialdata();
            if(result.status === 200){
              console.log('pel bhai',result.data.AdditionalUserinfo.PersonalDetails?.Education.Courses

              ?? {...initialValues})
              SetinitialValues({...result.data.AdditionalUserinfo.PersonalDetails?.Education

                ?? {...initialValues} })
            }
           else{
             toast.error("erro fetching data")
           }
          })()
        },[])
  return (
    <div className="container mt-3 d-flex p-0 flex-wrap flex-lg-nowrap flex-md-nowrap">
    <div className="container p-0" >
      <ArrowNavigate url={'/Utility/education.png'}/>
      {/* <PersonalNav/> */}
      <AboutMe/>
      <EducationBox initialValues={initialValues} Edit={true} redirect={'/update-education'}/>
    </div>
  </div>
  )
}
