import React from 'react'
import { CandidateComponet } from '../../../Components/export'
import { Formik } from 'formik'

function Candidate({jobdetails}) {
  const initialValues = {
    candidateDetails: {
      MinimumQualification: "",
      PreferredSkills: "",
      LanguageKnown: "",
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
   <CandidateComponet initialValues={initialValues} jobDetails={jobdetails} Redir={'/'}/>
  )
}

export default Candidate