import React from 'react'
import { PersonalNav, AboutMe, WorkPage } from '../../Components/export'
import employee from '../../API/Employee';
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
      const AddExprince = employee.AddWorkingEXprince
      console.log(AddExprince)
    return (
        <>
            <PersonalNav />
            <AboutMe />

            <WorkPage initialValues={initialValues} senrequest={AddExprince}/>
        </>

    )
}

export default WorkExperince