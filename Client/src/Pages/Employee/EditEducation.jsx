import React from 'react'
import { PersonalNav, AboutMe ,EducationBox,Employeetab} from '../../Components/export'
import employee from '../../API/Employee';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
function EditEducation() {
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
    <>  
    <div className="container d-flex flex-wrap flex-lg-nowrap flex-md-nowrap">
  <div className="nav-tab-employee">
    {/* <Employeetab active={'Education'}/> */}
  </div>
  <div className="container" >
    {/* <PersonalNav/> */}
    <AboutMe/>
    <EducationBox initialValues={initialValues} Edit={true} redirect={'/update-education'}/>
  </div>
</div>

    </>
    
  )
}

export default EditEducation