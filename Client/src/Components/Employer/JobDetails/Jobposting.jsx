import React from 'react'
import { Button, PersonalNav } from '../../export'
import FormBar from '../../Employee/PersonalProfile/formbar/FormBar'
import DateInput from '../../Employee/PersonalProfile/dateInput/DateInput'
import './jobdetails.css'
import { Formik, Form, Field, ErrorMessage,useFormik,useFormikContext } from 'formik';
import { Loader } from '../../export';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';
import employeData from '../../../API/Employer/EmployerData'
import ArrowRed from '../../Global/UI/ArrowImg-with-title/ArrowRed'
import NavLogoBtn from '../../Global/UI/NavLogoBtn/NavLogoBtn'

function Jobposting({initialValues,utlityfnc}) {
  const [loader,Setloader] = useState(false);
  // console.log(initialValues)
  const validateForm = (values) => {
    let missingFields = [];
    for (let key in values) {
      if (key !== 'religion' && !values[key]) {
        missingFields.push(key);
      }
    }
    if (missingFields.length > 0) {
      toast.error(`please fill: ${missingFields[0]}`);
      return false;
    }
    return true;
  };
  
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues:{...initialValues},
    onSubmit:  values => {
   const validate =  validateForm(values);
   if(validate === false){
    return ;
   }
      utlityfnc(values)
    }
  
  });
  return (
    <div className='container'>
      <NavLogoBtn  url={'/Utility/job-detail.png'}/>
      <div className="row">
        <ArrowRed bigSize={"bigSizeImg"} url={'/Utility/detail.png'} redtitle={'*Your Job details field given please fill carefully'}/>
        <div className="col-md-12 mt-3">
         <FormBar title={'want to hire'} placeholder={''} name={'wantToHire'} onChange={formik.handleChange} value={formik.values.wantToHire}/>
         <FormBar title={'No. of Vacancy'} placeholder={''} name={'NoOfVacancy'} onChange={formik.handleChange} value={formik.values.NoOfVacancy}/>
         <FormBar title={'Job Title'} placeholder={''} name={'JobTitle'} onChange={formik.handleChange} value={formik.values.JobTitle}/>
         <FormBar title={'Job Type'} placeholder={''} name={'JobType'}  onChange={formik.handleChange} value={formik.values.JobType}/>
         <DateInput label1={"Gender"} placeholder1={"Gender"} name1={'Gender'} name2={'religion'} label2={"Religion"} placeholder2={'Religion'} type={'text'} type2={"text"} onchange={formik.handleChange} value1={formik.values.Gender} value2={formik.values.religion} />
         <DateInput  label1={"Salary Range"} placeholder1={'Minium Salary Per Month'} name1={'SalaryRange.minimum'} name2={'SalaryRange.maximum'} label2={""} placeholder2={'Maximum Salary Per Month'} type={'text'} type2={"text"} onchange={formik.handleChange} value1={formik.values.SalaryRange.minimum} value2={formik.values.SalaryRange.maximum}/>
         <DateInput label1={'Working Shift'} placeholder1={"Working Shift"} name1={'WorkingShift'} name2={'WorkTiming'} label2={'Work Timing'} placeholder2={"Work Timing"}  type={'text'} type2={'text'}  onchange={formik.handleChange} value1={formik.values.WorkingShift} value2={formik.values.WorkTiming}/>
         <DateInput label1={'Job Location'} placeholder1={'City'} name1={'JobLocation.city'}  name2={'JobLocation.state'} placeholder2={'state'}  onchange={formik.handleChange} value1={formik.values.JobLocation.city} value2={formik.values.JobLocation.state}/>

        </div>
        <div className="job-post-btn d-flex justify-content-center">
        <Button type={'submit'} title={"save"} onClick={formik.handleSubmit}  />
          
        </div>
      </div>
    </div>
  )
}

export default Jobposting