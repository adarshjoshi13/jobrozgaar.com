import React from 'react'
import { CandidateComponet } from '../../../Components/export'
import { Formik } from 'formik'

function Candidate({jobdetails,Reload}) {
  const initialValues = {
    candidateDetails: {
      MinimumQualification: "",
      PreferredSkills: [],
      LanguageKnown: [],
      AdharCard: false,
      PanCard: false,
      DrivingLicense: false,
      passport: false,
      Phone: false,
      Laptop: false,
      Bike: false,
      Car: false
    }
  }
 
  return (
   <CandidateComponet initialValues={initialValues} jobDetails={jobdetails} Redir={'/employer-starter-Dashboard/view-job'} Reload={Reload}/>
  )
}

export default Candidate