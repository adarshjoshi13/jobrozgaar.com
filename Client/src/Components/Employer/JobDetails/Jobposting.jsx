import React from 'react'
import { PersonalNav } from '../../export'
import FormBar from '../../Employee/PersonalProfile/formbar/FormBar'
import DateInput from '../../Employee/PersonalProfile/dateInput/DateInput'
import './jobdetails.css'
import { Formik, Form, Field, ErrorMessage,useFormik,useFormikContext } from 'formik';
import { Loader } from '../../export';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';
import employeData from '../../../API/Employer/EmployerData'

function Jobposting({initialValues}) {
  const [loader,Setloader] = useState(false);
  // console.log(initialValues)
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues:{...initialValues},
    onSubmit: async values => {
        console.log(values)
      Setloader(true)
      const result = await employeData.JobDetails(values)
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
  return (
    <div className='container'>
      <div className="row">

      </div>
      <div className="row">
        <div className="col-md-12 mini-nav">
         <PersonalNav hideOrShow={false} img={'/Utility/personal.png'}/> 
         <h5 style={{color:'red'}}>*Your Job details field given please fill carefully</h5>
        </div>
        <div className="col-md-12">
         <FormBar title={'want to hire'} placeholder={''} name={'wantToHire'} onChange={formik.handleChange} value={formik.values.wantToHire}/>
         <FormBar title={'No. of Vacancy'} placeholder={''} name={'NoOfVacancy'} onChange={formik.handleChange} value={formik.values.NoOfVacancy}/>
         <FormBar title={'Job Title'} placeholder={''} name={'JobTitle'} onChange={formik.handleChange} value={formik.values.JobTitle}/>
         <FormBar title={'Job Type'} placeholder={''} name={'JobType'}  onChange={formik.handleChange} value={formik.values.JobType}/>
         <DateInput label1={"Gender"} placeholder1={"Gender"} name1={'Gender'} name2={'religion'} label2={"Religion"} placeholder2={'Religion'} type={'text'} type2={"text"} onchange={formik.handleChange} value1={formik.values.Gender} value2={formik.values.religion} />
         <DateInput  label1={"Salary Range"} placeholder1={'Minium Salary Per Month'} name1={'SalaryRange.minimum'} name2={'maximum'} label2={""} placeholder2={'Maximum Salary Per Month'} type={'text'} type2={"text"} onchange={formik.handleChange} value1={formik.values.SalaryRange.minimum} value2={formik.values.SalaryRange.maximum}/>
         <DateInput label1={'Working Shift'} placeholder1={"Working Shift"} name1={'WorkingShift'} name2={'WorkTiming'} label2={'Work Timing'} placeholder2={"Work Timing"}  type={'text'} type2={'text'}  onchange={formik.handleChange} value1={formik.values.WorkingShift} value2={formik.values.WorkTiming}/>
         <DateInput label1={'Job Location'} placeholder1={'City'} name1={'JobLocation.city'}  name2={'JobLocation.state'} placeholder2={'state'}  onchange={formik.handleChange} value1={formik.values.JobLocation.city} value2={formik.values.JobLocation.state}/>

        </div>
        <div className="job-post-btn d-flex justify-content-center">
          <button type='submit' className=' mt-5 mb-3' onClick={formik.handleSubmit}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Jobposting