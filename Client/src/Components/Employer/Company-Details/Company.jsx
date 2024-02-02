import React from 'react'
import './company.css'
import { PersonalNav } from '../../export'
import DateInput from '../../Employee/PersonalProfile/dateInput/DateInput'
import InputButton from '../../Employee/PersonalProfile/InputButton/InputButton'
import { Formik, Form, Field, ErrorMessage,useFormik,useFormikContext } from 'formik';
import { Loader } from '../../export';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';
import employeData from '../../../API/Employer/EmployerData'
function Company({initialValues}) {
  const [Images,SetImages] = useState([]);
  const [loader,Setloader] = useState(false);
  const formik = useFormik({
    // enableReinitialize: true,
    initialValues:{...initialValues},
    onSubmit: async values => {
        console.log(values)
      Setloader(true)
      const result = await employeData.CompanyVerifaction(Images,values)
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
  const GetImageData = (e)=>{

    const index = Images.findIndex(obj => obj.name === e.target.name);
if (index !== -1) {

Images.splice(index, 1); 

}
        const imagedat = {
          name:e.target.name,
          File:e.target.files[0]
        }
        SetImages((prev)=>{
       return(
           [...prev,imagedat]
       )
        })
  }
  console.log(formik);
  console.log(Images)
  return (
    <div className="container mb-5">
         <div className="row">
        <div className="col-md-12 small-nav">

        </div>
    </div>
    <div className="row">
        <div className="col-md-12">
            <PersonalNav img={'/Utility/personal.png'} hideOrShow={false}/>
            <h5 style={{color:"red"}}>*Your Company details field given please fill carefully
</h5>

        </div>
        
        
    </div>
    <div className="row">
        <div className="col-md-4 d-flex flex-column">
            <div className="title d-flex align-items-center mt-5">
            <div>
                <img src="/Utility/check.png" alt=""className='img-fluid'/>
              </div>
              <h5 className='mx-3'>Company Information</h5>
            </div>
            <div className="form-1">
            <input style={{width:"100%"}} type='text' className='company-details-input mt-3' placeholder='Company Name*'  name='CompanyInformation.companyName' onChange={formik.handleChange} value={formik.values.CompanyInformation.companyName}/>
            <input style={{width:"100%"}} type='text' className='company-details-input mt-3' placeholder="Recruiter’s Name*"  name='CompanyInformation.Recruiter' onChange={formik.handleChange} value={formik.values.CompanyInformation.Recruiter}/>
            <input style={{width:"100%"}} type='text' className='company-details-input mt-3'  placeholder='HR Whatsapp Numbe*' name='CompanyInformation.HrWhatsAppNo' onChange={formik.handleChange} value={formik.values.CompanyInformation.HrWhatsAppNo}/>
            <input style={{width:"100%"}} type='text' className='company-details-input mt-3' placeholder='Contact Email*'  name='CompanyInformation.Email' onChange={formik.handleChange} value={formik.values.CompanyInformation.Email}/>
            </div>

        </div> 
        <div className="col-md-4">

        </div>
        <div className="col-md-4 d-flex flex-column">
            <div className="title d-flex align-items-center mt-5">
            <div>
                <img src="/Utility/check.png" alt=""className='img-fluid'/>
              </div>
              <h5 className='mx-3'>Interview Addres</h5>
            </div>
            <div className="form-1">
            <input style={{width:"100%"}} type='text' className='company-details-input mt-3'  placeholder='Flat No./Plot No./Building Name*'  name='InterviewAddress.FlatNo' onChange={formik.handleChange} value={formik.values.InterviewAddress.FlatNo} />
            <input style={{width:"100%"}} type='text' className='company-details-input mt-3' placeholder="City*" name='InterviewAddress.city' onChange={formik.handleChange} value={formik.values.InterviewAddress.city}/>
            <input style={{width:"100%"}} type='text' className='company-details-input mt-3'  placeholder='State*' name='InterviewAddress.State' onChange={formik.handleChange} value={formik.values.InterviewAddress.State}/>
            <input style={{width:"100%"}} type='text' className='company-details-input mt-3'  placeholder='Landmark*'  name='InterviewAddress.Landmark' onChange={formik.handleChange} value={formik.values.InterviewAddress.Landmark}/>
            </div>

        </div>
    </div>
    <div className="row">
    <div className="col-md-12 col-sm-12  d-flex flex-column">
            <div className="title d-flex align-items-center mt-5">
            <div>
                <img src="/Utility/check.png" alt=""className='img-fluid'/>
              </div>
              <h5 className='mx-3'>Company Verification</h5>
            </div>
            <h5 style={{color:'red'}} className='mt-3'>Fill for faster job approval</h5>
            <div className="form-1">
            <input style={{width:"50%"}} type='text' className='company-details-input mt-3' placeholder='DocumentNumber*' name='CompanyVerification.DocumentNo' onChange={formik.handleChange} value={formik.values.CompanyVerification.DocumentNo} />
            <div className="for-input w-50 col-md-10 d-flex justify-contant-center align-items-center mt-3">
                    
                            <input style={{ width: "100%" }} type="text" placeholder='Document'  />
                            <input style={{ border: "none" }} type="file" 
                            name='Documentfile' onChange={GetImageData}
                           />

                        </div>

           
            </div>

        </div>
    </div>
    <div className="row ">
    <div className="col-md-12 candidate-btn-div">
   <button type='submit' className="mb-5" onClick={formik.handleSubmit}>{loader?(<Loader/>):"save"}</button>
    </div>
   </div>
    </div>
  )
}

export default Company