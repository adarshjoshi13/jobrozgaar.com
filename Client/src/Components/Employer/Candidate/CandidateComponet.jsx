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

function CandidateComponet({ initialValues }) {
  const [loader, Setloader] = useState(false);
  // console.log(initialValues)
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: { ...initialValues },
    onSubmit: async values => {
      console.log(values)
      Setloader(true)
      const result = await employeData.CandidateDetails(values)
      console.log("this is the result", result)

      if (result === null) {
        Setloader(false)
        toast.warn("something went wrong please try again")
      }

      if (result.status === 200) {
        Setloader(false);
        toast.success(result.data.message)
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

  return (
    <div className="container p-0">
    <NavLogoBtn url={'/Utility/req.png'}/>
      <ArrowRed url={'/Utility/req-arrow.png'} redtitle={'*Your Job details field given please fill carefully'}/>
      <div className="row mb-5 mt-3">
        <div className="col-md-12">
          <FormBar title={"Minimum Qualification"} name={'candidateDetails.MinimumQualification'} onChange={formik.handleChange} value={formik.values.candidateDetails.MinimumQualification} />
          <FormBar title={'Preferred Skills'} name={'candidateDetails.PreferredSkills'} onChange={formik.handleChange} value={formik.values.candidateDetails.PreferredSkills} />
          {/* <MultiMenu /> */}
          <FormBar title={'Language Known'} name={'candidateDetails.LanguageKnown'} onChange={formik.handleChange} value={formik.values.candidateDetails.LanguageKnown} />
        </div>
      </div>
      <div className="row">
   <div className="col-md-12 test mt-3">
          <div className="top-shape">
          <img className='title-img-hide' src="/Utility/title.png" alt="" />
          <h5 className='text-center hind-small'>Do you have any job specific requirement? If yes, Please select below:</h5>
          </div>
         <div className="shape">
         <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/adhaar.png' alt="" className='img-fluid' />
          </div>
          <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.AdharCard'/>
          </div>
          <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/pan.png' alt="" className='img-fluid' />
          </div>
          <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.PanCard'/>
          </div>
          <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/38.jpg' alt="" className='img-fluid' />
          </div>
          <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.DrivingLicense'/>
          </div>
          <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/pass.png' alt="" className='img-fluid' />
          </div>
          <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.passport'/>
          </div>  
          <div className="info-group">
          <div className="job-req-img" style={{width:"130px"}}>
           <img  src='/Utility/mobile.png' alt="" className='img-fluid' />
          </div>
          <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.Phone' />
          </div>
          <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/41.jpg' alt="" className='img-fluid' />
          </div>
          <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.Laptop' />
          </div>
          <div className="info-group">
          <div className="job-req-img" style={{width:"130px"}}>
           <img src='/Utility/42.jpg' alt="" className='img-fluid' />
          </div>
          <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.Bike' />
          </div>
          <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/43.jpg' alt="" className='img-fluid' />
          </div>
          <input className="checkbox " type="checkbox" onChange={Requierment} name='candidateDetails.Car' />
          </div>

         </div>
        </div>
   </div>
      <div className="row ">
        <div className="col-md-12 candidate-btn-div">
          <Button title={"update"} type={"type"} onClick={formik.handleSubmit} />

        </div>
      </div>
    </div>
  )
}

export default CandidateComponet