import React from 'react'
import './candidate.css'
import PersonalNav from '../../Employee/PersonalProfile/personalNav/personalNav'
import FormBar from '../../Employee/PersonalProfile/formbar/FormBar'
import { Formik, Form, Field, ErrorMessage,useFormik,useFormikContext } from 'formik';
import { Loader } from '../../export';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';
import employeData from '../../../API/Employer/EmployerData'

function CandidateComponet({initialValues}) {
    const [loader,Setloader] = useState(false);
    // console.log(initialValues)
    const formik = useFormik({
      // enableReinitialize: true,
      initialValues:{...initialValues},
      onSubmit: async values => {
          console.log(values)
        Setloader(true)
        const result = await employeData.CandidateDetails(values)
        console.log("this is the result",result)
         
        if(result === null){
          Setloader(false)
          toast.warn("something went wrong please try again")
        }
  
        if(result.status === 200){
          Setloader(false);
          toast.success(result.data.message)
        }
         
        else{
          Setloader(false);
                  toast.error(result.data.message)
        }
      
       
      },
    
    });

    const Requierment = (e)=>{
        formik.setFieldValue(e.target.name,e.target.checked)
    }
    console.log('formik',formik.values)

  return (
   <div className="container">
    <div className="row">
        <div className="col-md-12 small-nav">

        </div>
    </div>
    <div className="row">
        <div className="col-md-12">
            <PersonalNav img={'/Utility/personal.png'} hideOrShow={false}/>
            <h5 style={{color:"red"}}>*Your Candidate details field given please fill carefully
</h5>

        </div>
        
        
    </div>
    <div className="row mb-5">
        <div className="col-md-12">
        <FormBar title={"Minimum Qualification"} name={'candidateDetails.MinimumQualification'} onChange={formik.handleChange} value={formik.values.candidateDetails.MinimumQualification}/>
        <FormBar title={'Preferred Skills'} name={'candidateDetails.PreferredSkills'} onChange={formik.handleChange} value={formik.values.candidateDetails.PreferredSkills} />
        <FormBar title={'Language Known'} name={'candidateDetails.LanguageKnown'} onChange={formik.handleChange} value={formik.values.candidateDetails.LanguageKnown}/>
        </div>
    </div>
   {/* <div className="row">
   <div className="col-md-12 test mt-5">
          <div className="top-shape">
          <h5 className='text-center'>Do you have any job specific requirement? If yes, Please select below:</h5>
          </div>
         <div className="shape">
         <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/education.png' alt="" className='img-fluid' />
          </div>
          <input className="checkbox mt-5" type="checkbox" onChange={Requierment} name='candidateDetails.AdharCard'/>
          </div>
          <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/education.png' alt="" className='img-fluid' />
          </div>
          <input className="checkbox mt-5" type="checkbox" onChange={Requierment} name='candidateDetails.PanCard'/>
          </div>
          <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/education.png' alt="" className='img-fluid' />
          </div>
          <input className="checkbox mt-5" type="checkbox" onChange={Requierment} name='candidateDetails.DrivingLicense'/>
          </div>
          <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/education.png' alt="" className='img-fluid' />
          </div>
          <input className="checkbox mt-5" type="checkbox" onChange={Requierment} name='candidateDetails.passport'/>
          </div>  
          <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/education.png' alt="" className='img-fluid' />
          </div>
          <input className="checkbox mt-5" type="checkbox" onChange={Requierment} name='candidateDetails.Phone' />
          </div>
          <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/education.png' alt="" className='img-fluid' />
          </div>
          <input className="checkbox mt-5" type="checkbox" onChange={Requierment} name='candidateDetails.Laptop' />
          </div>
          <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/education.png' alt="" className='img-fluid' />
          </div>
          <input className="checkbox mt-5" type="checkbox" onChange={Requierment} name='candidateDetails.Bike' />
          </div>
          <div className="info-group">
          <div className="job-req-img">
           <img src='/Utility/education.png' alt="" className='img-fluid' />
          </div>
          <input className="checkbox mt-5" type="checkbox" onChange={Requierment} name='candidateDetails.Car' />
          </div>

         </div>
        </div>
   </div> */}
   <div className="row ">
    <div className="col-md-12 candidate-btn-div">
   <button type='submit' className="mb-5" onClick={formik.handleSubmit}>{loader?(<Loader/>):"save"}</button>
    </div>
   </div>
   </div>
  )
}

export default CandidateComponet