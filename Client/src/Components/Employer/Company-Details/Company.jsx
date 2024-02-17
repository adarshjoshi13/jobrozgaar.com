import React, { useState } from 'react';
import './company.css'
import { Button, PersonalNav } from '../../export'

import DateInput from '../../Employee/PersonalProfile/dateInput/DateInput'
import InputButton from '../../Employee/PersonalProfile/InputButton/InputButton'
import { Formik, Form, Field, ErrorMessage, useFormik, useFormikContext } from 'formik';
import { Loader } from '../../export';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import employeData from '../../../API/Employer/EmployerData'
import ArrowRed from '../../Global/UI/ArrowImg-with-title/ArrowRed'
import NavLogoBtn from '../../Global/UI/NavLogoBtn/NavLogoBtn'
import { redirect, useNavigate } from 'react-router-dom'
import { PopUpCard } from '../../../Pages/export'
function Company({ initialValues, redirect, Edit }) {
  const [Images, SetImages] = useState([]);
  const [loader, Setloader] = useState(false);
  const navigate = useNavigate();
  const [checked, SetChecked] = useState(initialValues.companyAndInterviewAdressSame)
  // frontend verifaction
  function checkCompanyDetailsBeforeSubminting(companyDetails) {
    for (const section in companyDetails) {
      for (const field in companyDetails[section]) {
        if (!companyDetails[section][field]) {
          toast.warn(`Field ${field}  is empty`)
          return false
        }
      }
    }
  }
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues: { ...initialValues },
    onSubmit: async values => {
      let verify = checkCompanyDetailsBeforeSubminting(values)
      if (verify === false) {
        return;
      }
      console.log(values)
      Setloader(true)
      const result = await employeData.CompanyVerifaction(Images, values)
      console.log("this is the result", result)

      if (result === null) {
        Setloader(false)
        toast.warn("something went wrong please try again")
      }

      if (result.status === 200) {
        Setloader(false);
        toast.success(result.data.message);
        navigate(redirect);
      }

      else {
        Setloader(false);
        toast.error(result.data.message)
      }


    },

  });
  const GetImageData = (e) => {

    const index = Images.findIndex(obj => obj.name === e.target.name);
    if (index !== -1) {

      Images.splice(index, 1);

    }
    const imagedat = {
      name: e.target.name,
      File: e.target.files[0]
    }
    SetImages((prev) => {
      return (
        [...prev, imagedat]
      )
    })
  }
  console.log(formik);
  console.log(Images)


  const [isPopUpOpen, setIsPopUpOpen] = useState(false); // State to track PopUpCard open/close

  const handlePopUpToggle = () => {
    setIsPopUpOpen(!isPopUpOpen); // Toggle the state to open/close PopUpCard
  };
  return (
    <div className="container mb-5 campany-page">
      <NavLogoBtn topImg={'topImg'} url={'/Utility/company.png'} />
      <div className="row">
        <div className="col-md-12 small-nav">

        </div>
      </div>
      {Edit ? null : (<ArrowRed bigSize={'bigSizeImg'} url={'/Utility/campany.png'} redtitle={'*Your Job details field given please fill carefully'} />)}
      {Edit ? <PersonalNav hideOrShow={true} onClick={handlePopUpToggle} /> : null}
      {/* Render PopUpCard if isPopUpOpen state is true */}
      {isPopUpOpen && <PopUpCard onClose={handlePopUpToggle} />}


 <div className="row">



        {/*  */}
        <div className="col-md-4 d-flex flex-column">
          <div className="title d-flex align-items-center mt-5">
            <div>
              <img src="/Utility/check.png" alt="" className='img-fluid' />
            </div>
            <h5 className=''>Company Addres</h5>
          </div>
          <div className="form-1">
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='Flat No./Plot No./Building Name*' name='InterviewAddress.FlatNo' onChange={formik.handleChange} value={formik.values.InterviewAddress.FlatNo} readOnly={Edit} />
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder="City*" name='InterviewAddress.city' onChange={formik.handleChange} value={formik.values.InterviewAddress.city} readOnly={Edit} />
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='State*' name='InterviewAddress.State' onChange={formik.handleChange} value={formik.values.InterviewAddress.State} readOnly={Edit} />
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='Landmark*' name='InterviewAddress.Landmark' onChange={formik.handleChange} value={formik.values.InterviewAddress.Landmark} readOnly={Edit} />
          </div>

        </div>
        {/*  */}




        {/* image part */}
        <div className="col-md-4 text-center d-flex justify-content-center align-items-end pt-2">
          <div className="container  d-flex justify-content-center flex-column align-items-center flex-wrap text-center">
          <div className="checkbox-campany-cover">
            <div className="m-1  checkbox-wrapper-31">
              <input type="checkbox" onChange={(e) => {
                if (e.target.checked === true) {

                  formik.setFieldValue('companyAndInterviewAdressSame', true)
                  formik.setFieldValue('InterviewAddress.FlatNo', formik.values.CompanyInformation.ComapnyAdress)
                  formik.setFieldValue('InterviewAddress.city', formik.values.CompanyInformation.ComapnyAdress)
                  formik.setFieldValue('InterviewAddress.State', formik.values.CompanyInformation.ComapnyAdress)
                  formik.setFieldValue('InterviewAddress.Landmark', formik.values.CompanyInformation.ComapnyAdress)

                  SetChecked(!checked)

                }
                else {
                  formik.setFieldValue('companyAndInterviewAdressSame', false)
                  formik.setFieldValue('InterviewAddress.FlatNo', "")
                  formik.setFieldValue('InterviewAddress.city', "")
                  formik.setFieldValue('InterviewAddress.State', "")
                  formik.setFieldValue('InterviewAddress.Landmark', "")
                  SetChecked(!checked)

                }
              }} checked={checked} />
              <svg viewBox="0 0 35.6 35.6">
                <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
              </svg>

            </div>
            <h6 className='check-title-h' style={{ color: "gray", }}>Both are same ?</h6>
          </div>
            
            <img className='img-fluid' src="/Utility/44.png" alt="" />
          </div>
        </div>
        {/* img end */}

        {/* campany address */}

        {checked?null:(<div className="col-md-4 d-flex flex-column">
          <div className="title d-flex align-items-center mt-5">
            <div>
              <img src="/Utility/check.png" alt="" className='img-fluid' />
            </div>
            <h5 className=''>Interview Addres</h5>
          </div>
          <div className="form-1">
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='Flat No./Plot No./Building Name*' name='InterviewAddress.FlatNo' onChange={formik.handleChange} value={formik.values.InterviewAddress.FlatNo} readOnly={Edit} />
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder="City*" name='InterviewAddress.city' onChange={formik.handleChange} value={formik.values.InterviewAddress.city} readOnly={Edit} />
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='State*' name='InterviewAddress.State' onChange={formik.handleChange} value={formik.values.InterviewAddress.State} readOnly={Edit} />
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='Landmark*' name='InterviewAddress.Landmark' onChange={formik.handleChange} value={formik.values.InterviewAddress.Landmark} readOnly={Edit} />
          </div>

        </div>)}

        {/* campany address end */}


      </div>
      <div className="row">

        <div className="col-md-4 d-flex flex-column">
          <div className="title d-flex align-items-center mt-5">
            <div>
              <img src="/Utility/check.png" alt="" className='img-fluid' />
            </div>
            <h5 className=''>Company Information</h5>
          </div>
          <div className="form-1">
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='Company Name*' name='CompanyInformation.companyName' onChange={formik.handleChange} value={formik.values.CompanyInformation.companyName} readOnly={Edit} />
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder="Recruiter’s Name*" name='CompanyInformation.Recruiter' onChange={formik.handleChange} value={formik.values.CompanyInformation.Recruiter} readOnly={Edit} />
            <input style={{ width: "100%" }} type="tel" className='company-details-input mt-3' placeholder='HR Whatsapp Numbe*' name='CompanyInformation.HrWhatsAppNo' onChange={formik.handleChange} value={formik.values.CompanyInformation.HrWhatsAppNo} readOnly={Edit} />
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='Contact Email*' name='CompanyInformation.Email' onChange={formik.handleChange} value={formik.values.CompanyInformation.Email} readOnly={Edit} />
            <input style={{ width: "100%" }} type='email' className='company-details-input mt-3' placeholder='Enter Company Adress*' name='CompanyInformation.ComapnyAdress' onChange={formik.handleChange} value={formik.values.CompanyInformation.ComapnyAdress} readOnly={Edit} />

          </div>

        </div>
        <div className="col-md-4 text-center d-flex justify-content-center align-items-end pt-2">
          <div className="container  d-flex justify-content-center align-items-center flex-wrap text-center">
            {/* <div  className="m-1  checkbox-wrapper-31">
              <input type="checkbox" onChange={(e) => {
                if (e.target.checked === true) {
                  
                  formik.setFieldValue('companyAndInterviewAdressSame',true)
                   formik.setFieldValue('InterviewAddress.FlatNo',formik.values.CompanyInformation.ComapnyAdress)
                    formik.setFieldValue('InterviewAddress.city',formik.values.CompanyInformation.ComapnyAdress)
                    formik.setFieldValue('InterviewAddress.State',formik.values.CompanyInformation.ComapnyAdress)
                    formik.setFieldValue('InterviewAddress.Landmark',formik.values.CompanyInformation.ComapnyAdress)

                  SetChecked(!checked)

                }
                else {
                  formik.setFieldValue('companyAndInterviewAdressSame', false)
                  formik.setFieldValue('InterviewAddress.FlatNo',"")
                  formik.setFieldValue('InterviewAddress.city',"")
                  formik.setFieldValue('InterviewAddress.State',"")
                  formik.setFieldValue('InterviewAddress.Landmark',"")
                  SetChecked(!checked)

                }
              }}  checked={checked}/>
              <svg viewBox="0 0 35.6 35.6">
                <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
              </svg>

            </div>
            <h6 className='check-title-h' style={{ color: "gray", }}>Campany Address and Interview Address are Same ?</h6> */}
            <img className='img-fluid' src="/Utility/job-description.png" alt="" />
          </div>
        </div>

        <div className="col-md-4 d-flex flex-column">
          <div className="title d-flex align-items-center mt-5">
            <div>
              <img src="/Utility/check.png" alt="" className='img-fluid' />
            </div>
            <h5 className=''>Company Verification</h5>
          </div>
          {/* <p style={{ color: 'red' }} className='mt-3'>Fill for faster job approval</p> */}


          {/* 
          <div className="form-1 col-md-4">
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='Document' name='CompanyVerification.DocumentNo' onChange={formik.handleChange} value={formik.values.CompanyVerification.DocumentNo} />




          </div> */}

          <div className="form-1 col-md-12">
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='Enter Document Number*' name='CompanyVerification.DocumentNo' onChange={formik.handleChange} value={formik.values.CompanyVerification.DocumentNo} readOnly={Edit} />




          </div>

          <div className="form-1 col-md-12">
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='Enter company verfiaction *' name='CompanyVerification.CompanyVerfiaction' onChange={formik.handleChange} value={formik.values.CompanyVerification.CompanyVerfiaction} readOnly={Edit} />




          </div>
          <div className="form-1 col-md-12">
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='Enter company Pan No *' name='CompanyVerification.PanNo' onChange={formik.handleChange} value={formik.values.CompanyVerification.PanNo} readOnly={Edit} />




          </div>
          <div className="form-1 col-md-12">
            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='Enter company Gst Number *' name='CompanyVerification.GstNo' onChange={formik.handleChange} value={formik.values.CompanyVerification.GstNo} readOnly={Edit} />




          </div>





          <div className="for-input col-md-12  d-flex justify-contant-center align-items-center ">

            <input style={{ width: "100%" }} type='text' className='company-details-input mt-3' placeholder='Campany Logo' readOnly />
            <input className='file-inputs' style={{ border: "none" }} type="file"
              name='Logo' onChange={GetImageData} />

          </div>

        </div>

      </div>
     


      <div className="row ">
        <div className="col-md-12 candidate-btn-div mt-3">
          {Edit ? null : (<Button type={'submit'} onClick={formik.handleSubmit}
            title={"save"} loader={loader} />)}
        </div>
      </div>
    </div>
  )
}

export default Company