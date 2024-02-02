import React from 'react';
import './PersonalDetails.css'; // Assuming you have a corresponding CSS file
import { Link,useNavigate } from 'react-router-dom';
import PersonalNav from './personalNav/personalNav';
import FormBar from './formbar/FormBar';
import DateInput from './dateInput/DateInput';
import ButtonEdit from './ButtonEdit/ButtonEdit';
import InputButton from './InputButton/InputButton';
import SmallBanner from './SmallBanner/SmallBanner';
import AboutMe from './AboutMe/AboutMe';
import { Formik, Form, Field, ErrorMessage,useFormik,useFormikContext } from 'formik';
import { Loader } from '../../export';
import employee from '../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';
import Employeetab from '../Global/Employee-tab/Employee-tab';


function EditPersonalprofile() {
    const [Images,SetImages] = useState([]);
    const [loader,Setloader] = useState(false);
    console.log(Images);
    const [formData, setFormData] = useState({})
    useEffect(()=>{
        (async ()=>{
          const result = await employee.getPersonalProfile();
          if(result.status === 200){
            setFormData({...result.data.data})
          }
         else{
           toast.error("erro fetching data")
         }
        })()
      },[])
      console.log(formData)
    // const { values, setValues } = useFormikContext();
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
         ...formData 

        },
        onSubmit: async values => {
            console.log(values)
          Setloader(true)
          const result = await employee.EditPersonalProfile(values)
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
      console.log("formik",formik);
    return (
      <div className='whole-personal-deatil-wraper'>
        <div className='employee-tab-personal-info'>
           <Employeetab/>
        </div>
  <div className="personal-details ">
            {/* Navbar */}
            {/* <PersonalNav hideOrShow={false} img={'/Utility/personal.png'}/> */}
         
          <div className="conatiner">
              {/* <AboutMe/> */}

                <SmallBanner
                    personalImage="/Utility/personal.png"
                    workImage="/Utility/work.png"
                    eduImage="/Utility/edu.png"
                />




                {/* <FormBar title={"Name"} type={"text"} placeholder={"Enter your name"} /> */}
                <FormBar
                    title={"Father’s Name /Husband Name"} type={"text"} placeholder={"Enter your name"} onChange={formik.handleChange} onblur={formik.handleBlur} value={formik.values.fatherName}
               name={'fatherName'} />



                <DateInput
                    label1="Date of Birth"
                    placeholder1="Date"
                    type={"date"}
                    type2={"text"}
                    label2="Marital Status"
                    placeholder2="Status"
                    onchange={formik.handleChange}
                    onblur={formik.handleBlur}
                    name2={'MaritalStatus'}
                    value2={formik.values.MaritalStatus}
                    name1={'DOB'}
                    value1={formik.values.DOB}
                />
                <DateInput
                    label1="Gender"
                    placeholder1="Gender"
                    type={"text"}
                    type2={"text"}
                    label2="Religion"
                    placeholder2="Status"
                    onchange={formik.handleChange}
                    onblur={formik.handleBlur}
                    name2={'religion'}
                    value2={formik.values.religion}
                    name1={'Gender'}
                    value1={formik.values.Gender}
                    
                />

                <FormBar
                    title={"Current Address"}
                    type={"text"}
                    placeholder={"Enter your Address"}
                    onChange={formik.handleChange} onblur={formik.handleBlur} value={formik.values.CurrentAddress}
               name={'CurrentAddress'}
                />

                <DateInput
                    label1="Current City"
                    placeholder1="Gender"
                    type={"text"}
                    type2={"text"}
                    label2="Current State"
                    placeholder2="Status"
                    onchange={formik.handleChange}
                    onblur={formik.handleBlur}
                    name2={'CurrentState'}
                    value2={formik.values.CurrentState}
                    name1={'CurrentCity'}
                    value1={formik.values.CurrentCity}

                />
                {/* <div className="container  d-flex justify-content-center align-items-center flex-wrap text-center">
                    <div className="m-1 checkbox-wrapper-31">
                        <input type="checkbox" onChange={(e)=>{
                       if(e.target.checked === true){
                    formik.setValues((values)=>{
                       return({ ...values,PermanentAddress:formik.values.CurrentAddress})
                    })
                       
                       }
                       else{
                        formik.PermanentAddress = ''
                       }
                        }}/>
                        <svg viewBox="0 0 35.6 35.6">
                            <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                            <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                            <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                        </svg>

                    </div>
                    <h6 style={{ color: "gray" }}>Current Address and Permanent Address as same</h6>
                </div> */}
                <FormBar
                    title={"Permanent Address"}
                    type={"text"}
                    placeholder={"Enter your Address"}
                    onChange={formik.handleChange} onblur={formik.handleBlur} value={formik.values.PermanentAddress}
                    name={'PermanentAddress'}
                />
                <FormBar
                    title={"Mobile Number"}
                    type={"text"}
                    placeholder={"enter your mobile number"}
                    onChange={formik.handleChange} onblur={formik.handleBlur} value={formik.values.MobileNumber}
                    name={'MobileNumber'}
                />
                {/* <FormBar
                    title={"Mobile Number"}
                    type={"number"}
                    placeholder={"Enter your Address"}
                /> */}

                {/* <InputButton title={"Aadhar Number"} placeholder={"Enter Aadhar Number"} onchange={formik.handleChange}  onblur={formik.handleBlur} value1={formik.values.AdharNumber}
                   name1={'AdharNumber'} name2={'Adharcard'} uploadfile={GetImageData} />
                <InputButton title={"Pan Card Number"} placeholder={"Enter Pan Card Number"} onchange={formik.handleChange} onblur={formik.handleBlur} value1={formik.values.PanNumber}
                    name1={'PanNumber'} name2={'PanCard'} uploadfile={GetImageData} />
                <InputButton title={"Driving Licence No"} placeholder={"Enter Driving Licence No."}  onchange={formik.handleChange} onblur={formik.handleBlur} value1={formik.values.DrivingLicenceNumber}
                    name1={'DrivingLicenceNumber'} name2={'DrivingLicence'} uploadfile={GetImageData}  /> */}
            </div>
        
           <div className="personal-ifo-update-btn">
           <button className='person-btn' onClick={formik.handleSubmit} type='submit'>{loader?(<Loader/>):"update"}</button>
           </div>



        </div>
      </div>
      

    );
}

export default EditPersonalprofile  ;
