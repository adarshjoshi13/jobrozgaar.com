import React from 'react'
import './candidate.css'
import PersonalNav from '../../Employee/PersonalProfile/personalNav/personalNav'
import FormBar from '../../Employee/PersonalProfile/formbar/FormBar'
import { Formik, Form, Field, ErrorMessage, useFormik, useFormikContext } from 'formik';
import { Button, Loader } from '../../export';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import employeData from '../../../API/Employer/EmployerData'
import ArrowRed from '../../Global/UI/ArrowImg-with-title/ArrowRed';
import NavLogoBtn from '../../Global/UI/NavLogoBtn/NavLogoBtn';
import MultiMenu from '../../Global/UI/MultiMenu/MultiMenu';
import { useNavigate } from 'react-router-dom';
import SingleTitleBar from '../../Global/UI/SingleTitleBar/SingleTitleBar';
import SingleTitleMulti from '../../Global/UI/SingleTitleMulti/SingleTitleMulti';

function CandidateComponet({ initialValues, jobDetails, Redir,Reload }) {
  const [loader, Setloader] = useState(false);
  const navigate = useNavigate()

  // console.log(jobDetails)
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: { ...initialValues },
    onSubmit: async values => {
      console.log(values)
      Setloader(true)
      const result = await employeData.JobDetails({ Job: jobDetails, Candidate: values })
      console.log("this is the result", result)

      if (result === null) {
        Setloader(false)
        toast.warn("something went wrong please try again")
      }

      if (result.status === 200) {
        Setloader(false);
        toast.success(result.data.message)
        navigate(Redir)
        Reload();
      }

      else {
        Setloader(false);
        toast.error(result.data.message)
      }


    },

  });

  const Requierment = (e) => {
    formik.setFieldValue(e.target.name, e.target.checked)
  }
  console.log('formik', formik.values)

  const qualification = [
    { value: 'option1', label: 'Qualification' },
    { value: '10th', label: '10th' },
    { value: '12th', label: '12th' },
    { value: 'Diploma', label: 'Diploma' },
    { value: 'Bachelor', label: 'Bachelor' },
    { value: 'Master', label: 'Master' },
    { value: 'PhD', label: 'PhD' },
    // Add more qualification levels as needed
];

const selectinput ={
  fontSize: "12px"
}

const margin ={
  margin: "9px"
}


const preferredSkills = [
  { value: 'option1', label: 'Field of Skill' },
  { value: 'Communication Skills', label: 'Communication Skills' },
  { value: 'Teamwork', label: 'Teamwork' },
  { value: 'Problem Solving', label: 'Problem Solving' },
  { value: 'Adaptability', label: 'Adaptability' },
  { value: 'Leadership', label: 'Leadership' },
  { value: 'Time Management', label: 'Time Management' },
  { value: 'Creativity', label: 'Creativity' },
  // Add more preferred skills as needed
];

const languages = [
  { value: 'Options', label: 'Languages' },
  { value: 'English', label: 'English' },
  { value: 'Spanish', label: 'Spanish' },
  { value: 'French', label: 'French' },
  { value: 'German', label: 'German' },
  { value: 'Mandarin', label: 'Mandarin' },
  // Add more languages as needed
];
  return (
    <div className="container p-0">
      <NavLogoBtn url={'/Utility/req.png'} />
      <ArrowRed url={'/Utility/req-arrow.png'} redtitle={'*Your Job details field given please fill carefully'} />
      <div className="row mb-1 mt-3">
        <div className="col-md-12">
          {/* <FormBar title={"Minimum Qualification"} name={'candidateDetails.MinimumQualification'} onChange={formik.handleChange} value={formik.values.candidateDetails.MinimumQualification} /> */}

          <SingleTitleBar selectinput={selectinput} margin={margin} title={"Minimum Qualification"} name={'candidateDetails.MinimumQualification'} onChange={formik.handleChange} value={formik.values.candidateDetails.MinimumQualification} options={qualification}/>



          {/* <FormBar title={'Preferred Skills'} name={'candidateDetails.PreferredSkills'} onChange={formik.handleChange} value={formik.values.candidateDetails.PreferredSkills} /> */}

          <SingleTitleMulti  selectinput={selectinput} title={'Preferred Skills'} name={'candidateDetails.PreferredSkills'} onChange={formik.handleChange} value={formik.values.candidateDetails.PreferredSkills} options={preferredSkills} margin={margin}/>

          {/* <FormBar title={'Language Known'} name={'candidateDetails.LanguageKnown'} onChange={formik.handleChange} value={formik.values.candidateDetails.LanguageKnown} /> */}

          <SingleTitleBar  selectinput={selectinput} title={'Language Known'} name={'candidateDetails.LanguageKnown'} onChange={formik.handleChange} value={formik.values.candidateDetails.LanguageKnown} options={languages} margin={margin}/>


        </div>
      </div>
      <div className="row">
        <div className="col-md-12 test mt-3 d-flex align-items-center flex-column">
          <div className="top-shape">
            <img className='title-img-hide' src="/Utility/title.png" alt="" />
            <h5 className='text-center hind-small'>Do you have any job specific requirement? If yes, Please select below:</h5>
          </div>
          <div className="shape">
            <div className="info-group">
              <div className="job-req-img">
                <img src='/Utility/adhaar.png' alt="" className='img-fluid newSize' />
              </div>
              <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.AdharCard' />
            </div>
            <div className="info-group">
              <div className="job-req-img">
                <img src='/Utility/pan.png' alt="" className='img-fluid newSize' />
              </div>
              <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.PanCard' />
            </div>
            <div className="info-group">
              <div className="job-req-img">
                <img src='/Utility/38.jpg' alt="" className='img-fluid newSize' />
              </div>
              <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.DrivingLicense' />
            </div>
            <div className="info-group">
              <div className="job-req-img">
                <img src='/Utility/pass.png' alt="" className='img-fluid newSize' />
              </div>
              <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.passport' />
            </div>
            <div className="info-group">
              <div className="job-req-img" style={{ width: "130px" }}>
                <img src='/Utility/mobile.png' alt="" className='img-fluid newSize' />
              </div>
              <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.Phone' />
            </div>
            <div className="info-group">
              <div className="job-req-img">
                <img src='/Utility/41.jpg' alt="" className='img-fluid newSize' />
              </div>
              <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.Laptop' />
            </div>
            <div className="info-group">
              <div className="job-req-img" style={{ width: "130px" }}>
                <img src='/Utility/42.jpg' alt="" className='img-fluid newSize' />
              </div>
              <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.Bike' />
            </div>
            <div className="info-group">
              <div className="job-req-img">
                <img src='/Utility/43.jpg' alt="" className='img-fluid newSize' />
              </div>
              <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.Car' />
            </div>

          </div>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-12 candidate-btn-div">
          <Button title={"Post"} type={"type"} onClick={formik.handleSubmit} loader={loader} />

        </div>
      </div>
    </div>
  )
}

export default CandidateComponet