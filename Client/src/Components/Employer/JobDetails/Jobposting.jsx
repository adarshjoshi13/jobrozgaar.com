import React from 'react'
import { Button, PersonalNav, SelectInput } from '../../export'
import FormBar from '../../Employee/PersonalProfile/formbar/FormBar'
import DateInput from '../../Employee/PersonalProfile/dateInput/DateInput'
// import './jobdetails.css'
import { Formik, Form, Field, ErrorMessage, useFormik, useFormikContext } from 'formik';
import { Loader } from '../../export';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import employeData from '../../../API/Employer/EmployerData'
import ArrowRed from '../../Global/UI/ArrowImg-with-title/ArrowRed'
import NavLogoBtn from '../../Global/UI/NavLogoBtn/NavLogoBtn'
import SelectTwo from '../../Global/UI/SelectTwo/SelectTwo'
import SingleTitleBar from '../../Global/UI/SingleTitleBar/SingleTitleBar'

function Jobposting({ initialValues, utlityfnc }) {
  const [loader, Setloader] = useState(false);
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
    initialValues: { ...initialValues },
    onSubmit: values => {
      const validate = validateForm(values);
      if (validate === false) {
        return;
      }
      utlityfnc(values)
    }

  });


  const Jobs = [
    { value: 'option1', label: 'Want to Hire' },
    { value: 'Software Engineer', label: 'Software Engineer' },
    { value: 'Doctor', label: 'Doctor' },
    { value: 'Manager', label: 'Manager' },
    { value: 'Data Scientist', label: 'Data Scientist' },
    { value: 'Financial Analyst', label: 'Financial Analyst' },
    { value: 'Graphic Designer', label: 'Graphic Designer' },
    { value: 'Lawyer', label: 'Lawyer' },
    { value: 'Architect', label: 'Architect' },
    // Add more job categories as needed
  ];


  const gender = [
    { value: 'option1', label: 'Gender' },
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' }
  ];


  const religion = [
    { value: 'option1', label: 'Religion' },
    { value: 'Hindu', label: 'Hindu' },
    { value: 'Muslim', label: 'Muslim' },
    { value: 'Christian', label: 'Christian' },
    { value: 'Sikh', label: 'Sikh' },
    { value: 'Buddhist', label: 'Buddhist' },
    { value: 'Jain', label: 'Jain' },
    { value: 'Other', label: 'Other' },
    // Add more religions as needed
];


  const minSalary = [
    { value: 'option1', label: 'Minium Salary Per Month' },
    { value: '15k', label: '15k' },
    { value: '20k', label: '20k' },
    { value: '30k', label: '30k' },
    { value: '60k', label: '60k' },

  ];



  const maxSalary = [
    { value: 'option1', label: 'Minium Salary Per Month' },
    { value: '1.5lakh', label: '1.5lakh' },
    { value: '2.5lakh', label: '2.5lakh' },
    { value: '3.5lakh', label: '3.5lakh' },
    { value: '4.5lakh', label: '4.5lakh' },

  ];

  const shift = [
    { value: 'option1', label: 'Working Shift' },
    { value: 'Day', label: 'Day' },
    { value: 'Night', label: 'Night' },
    { value: 'Rotational', label: 'Rotational' },
    { value: 'Flexible Hours', label: 'Flexible Hours' },
    // Add more shift options as needed
  ];

  const timings = [
    { value: 'option1', label: 'Working Timings' },
    { value: '9:00 AM - 5:00 PM', label: '9:00 AM - 5:00 PM' },
    { value: '8:00 AM - 4:00 PM', label: '8:00 AM - 4:00 PM' },
    { value: '10:00 AM - 6:00 PM', label: '10:00 AM - 6:00 PM' },
    // Add more working timing options as needed
  ];


  const city = [
    { value: 'option1', label: 'Current City' },
    { value: 'Mumbai', label: 'Mumbai' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Bangalore', label: 'Bangalore' },
    { value: 'Kolkata', label: 'Kolkata' },
    { value: 'Chennai', label: 'Chennai' },
    // Add more cities as needed
  ];

  const states = [
    { value: 'option1', label: 'Which State' },
    { value: 'Andhra Pradesh', label: 'Andhra Pradesh' },
    { value: 'Arunachal Pradesh', label: 'Arunachal Pradesh' },
    { value: 'Assam', label: 'Assam' },
    { value: 'Bihar', label: 'Bihar' },
    { value: 'Chhattisgarh', label: 'Chhattisgarh' },
    { value: 'Goa', label: 'Goa' },
    { value: 'Gujarat', label: 'Gujarat' },
    { value: 'Haryana', label: 'Haryana' },
    { value: 'Himachal Pradesh', label: 'Himachal Pradesh' },
    { value: 'Jharkhand', label: 'Jharkhand' },
    { value: 'Karnataka', label: 'Karnataka' },
    { value: 'Kerala', label: 'Kerala' },
    { value: 'Madhya Pradesh', label: 'Madhya Pradesh' },
    { value: 'Maharashtra', label: 'Maharashtra' },
    { value: 'Manipur', label: 'Manipur' },
    { value: 'Meghalaya', label: 'Meghalaya' },
    { value: 'Mizoram', label: 'Mizoram' },
    { value: 'Nagaland', label: 'Nagaland' },
    { value: 'Odisha', label: 'Odisha' },
    { value: 'Punjab', label: 'Punjab' },
    { value: 'Rajasthan', label: 'Rajasthan' },
    { value: 'Sikkim', label: 'Sikkim' },
    { value: 'Tamil Nadu', label: 'Tamil Nadu' },
    { value: 'Telangana', label: 'Telangana' },
    { value: 'Tripura', label: 'Tripura' },
    { value: 'Uttar Pradesh', label: 'Uttar Pradesh' },
    { value: 'Uttarakhand', label: 'Uttarakhand' },
    { value: 'West Bengal', label: 'West Bengal' },
    { value: 'Andaman Nicobar', label: 'Andaman Nicobar' },
    { value: 'Chandigarh', label: 'Chandigarh' },
    { value: 'Nagar Haveli', label: 'Nagar Haveli ' },
    { value: 'Lakshadweep', label: 'Lakshadweep' },
    { value: 'Delhi', label: 'Delhi' },
    { value: 'Puducherry', label: 'Puducherry' }
    // Add more states as needed
  ];

  const margin = {
    margin: "9px"
  }

  const selectinput ={
    fontSize:"12px",
    padding : "8px"
  }

  const jobTypes = [
    { value: 'option1', label: 'Enter the job type' },
    { value: 'Full-Time', label: 'Full-time' },
    { value: 'Part-Time', label: 'Part-time' },
    { value: 'Contract', label: 'Contract' },
    { value: 'Temporary', label: 'Temporary' },
    { value: 'Internship', label: 'Internship' },
    // Add more job types as needed
];
  return (
    <div className='container p-0'>
      <NavLogoBtn url={'/Utility/job-detail.png'} />
      <div className="row">
        <ArrowRed bigSize={"bigSizeImg"} url={'/Utility/detail.png'} redtitle={'*Your Job details field given please fill carefully'} />
        <div className="col-md-12 mt-3">
          {/* <SelectInput handleChange={formik.handleChange}
         name={'wantToHire'} 
         value={formik.values.wantToHire}
         options={Jobs}/> */}
          {/* <FormBar title={'want to hire'}

            name={'wantToHire'}
            onChange={formik.handleChange}
            value={formik.values.wantToHire} /> */}

          <SingleTitleBar onChange={formik.handleChange}
            value={formik.values.wantToHire}
            title={'Want to hire'} options={Jobs}
            margin={margin}
            name={"wantToHire"}
            selectinput={selectinput}

          />

          <FormBar title={'No. of Vacancy'}
            placeholder={'Number of Vacancy'} name={'NoOfVacancy'}
            onChange={formik.handleChange}
            value={formik.values.NoOfVacancy} />




          {/* <FormBar title={'Job Title'}
            placeholder={''}
            name={'JobTitle'}
            onChange={formik.handleChange}
            value={formik.values.JobTitle}
          /> */}

          <SingleTitleBar
            title={'Job Title'}
           
            name={'JobTitle'}
            options={Jobs}
            selectinput={selectinput}
            margin={margin}
            onChange={formik.handleChange}
            value={formik.values.JobTitle}/>






          <SingleTitleBar title={'Job Type'}
          options={jobTypes}
          margin={margin}
          selectinput={selectinput}
            name={'JobType'}
            onChange={formik.handleChange}
            value={formik.values.JobType}
          />

          {/* <DateInput label1={"Gender"}
            placeholder1={"Gender"}
            name1={'Gender'}
            name2={'religion'}
            label2={"Religion"}
            placeholder2={'Religion'}
            type={'text'}
            type2={"text"}
            onchange={formik.handleChange}
            value1={formik.values.Gender}
            value2={formik.values.religion}
          /> */}
          <SelectTwo onchange={formik.handleChange}
            value1={formik.values.Gender}
            value2={formik.values.religion}
            name1={'Gender'}
            name2={'religion'}
            label2={"Religion"}
            label1={"Gender"}
            options1={gender}
            options2={religion}
          />


          {/* <DateInput label1={"Salary Range"}
            placeholder1={'Minium Salary Per Month'}
            name1={'SalaryRange.minimum'}
            name2={'SalaryRange.maximum'}
            label2={""}
            placeholder2={'Maximum Salary Per Month'}
            type={'text'}
            type2={"text"}
            onchange={formik.handleChange}
            value1={formik.values.SalaryRange.minimum}
            value2={formik.values.SalaryRange.maximum}
          /> */}


          <SelectTwo
            label1={"Salary Range"}
            name1={'SalaryRange.minimum'}
            name2={'SalaryRange.maximum'}
            label2={"Salary"}
            onchange={formik.handleChange}
            value1={formik.values.SalaryRange.minimum}
            value2={formik.values.SalaryRange.maximum}
            options1={minSalary}
            options2={maxSalary} />



          {/* <DateInput label1={'Working Shift'}
            placeholder1={"Working Shift"}
            name1={'WorkingShift'}
            name2={'WorkTiming'} label2={'Work Timing'}
            placeholder2={"Work Timing"}
            type={'text'}
            type2={'text'}
            onchange={formik.handleChange}
            value1={formik.values.WorkingShift}
            value2={formik.values.WorkTiming}
          /> */}
          <SelectTwo
            label1={'Working Shift'}
            name1={'WorkingShift'}
            name2={'WorkTiming'}
            label2={'Work Timing'}
            onchange={formik.handleChange}
            value1={formik.values.WorkingShift}
            value2={formik.values.WorkTiming}
            options1={shift}
            options2={timings} />




          {/* <DateInput label1={'Job Location'}
            placeholder1={'City'}
            name1={'JobLocation.city'}
            name2={'JobLocation.state'}
            placeholder2={'state'}
            onchange={formik.handleChange}
            value1={formik.values.JobLocation.city}
            value2={formik.values.JobLocation.state}
          /> */}

          <SelectTwo
            label1={'Job Location'}
            label2={'State'}
            name1={'JobLocation.city'}
            name2={'JobLocation.state'}
            value1={formik.values.JobLocation.city}
            value2={formik.values.JobLocation.state}
            onchange={formik.handleChange}
            options1={city}
            options2={states} />


        </div>
        <div className="job-post-btn d-flex justify-content-center">
          <Button type={'submit'} title={"Next"} onClick={formik.handleSubmit} />

        </div>
      </div>
    </div>
  )
}

export default Jobposting