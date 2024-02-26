import React from 'react'
import { PersonalNav, AboutMe ,EducationBox,Employeetab} from '../../Components/export'
import { useEffect,useState } from 'react'
import employee from '../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import {Loader} from '../../Components/export';

function Education() {
  const [loader,Setloader] = useState(false)
  const IntialValues = {
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
  }
  const navigate = useNavigate()
  useEffect(()=>{
    (async ()=>{
      Setloader(true)
      const result = await employee.getintialdata();
      if(result.status === 200){
        console.log("fiseeeeeeee",result?.data?.AdditionalUserinfo?.PersonalDetails?.Education)
        if (result?.data?.AdditionalUserinfo?.PersonalDetails?.Education) {
          // console.log('und')
          navigate('/update-education')
        } else {
          Setloader(false)
         return
        }
        
       
      }
     else{
      Setloader(false)
      //  toast.error("erro fetching data")
     }
    })()
  },[])
  if(loader){
    return <Loader style={{ width: '100vw',
    height: '60vh', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',}}/>
  }


  const Courses = [
    { value: 'engineering', label: 'Engineering' },
    { value: 'medicine', label: 'Medicine' },
    { value: 'management', label: 'Management' },
    { value: 'computer_science', label: 'Computer Science' },
    { value: 'finance', label: 'Finance' },
    { value: 'arts', label: 'Arts' },
    { value: 'law', label: 'Law' },
    { value: 'design', label: 'Design' },
    // Add more courses as needed
];
  return (
    <>  
    <div className="container d-flex flex-wrap flex-lg-nowrap flex-md-nowrap">
  <div className="nav-tab-employee">
  </div>
  <div className="container" >
    {/* <PersonalNav/> */}
    <AboutMe/>
    <EducationBox initialValues={IntialValues} redirect={'/Dashboard/jobs/my-jobs'}/>
  </div>
</div>

    </>
    
  )
}

export default Education