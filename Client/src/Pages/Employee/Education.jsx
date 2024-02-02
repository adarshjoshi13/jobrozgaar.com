import React from 'react'
import { PersonalNav, AboutMe ,EducationBox} from '../../Components/export'
function Education() {
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
  return (
    <>
        <PersonalNav/>
    <AboutMe/>
    <EducationBox initialValues={IntialValues}/>
    </>
    
  )
}

export default Education