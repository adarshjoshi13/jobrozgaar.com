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
import { Button, Loader } from '../../export';
import employee from '../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useState,useEffect } from 'react';
 import Employeetab from '../Global/Employee-tab/Employee-tab';

function PersonalDetails() {
    const [Images,SetImages] = useState([]);
    const [loader,Setloader] = useState(false);
    const [Saveloader,SetSaveloader] = useState(false)
    const navigate = useNavigate()
    const [reload,setreload] = useState(false)
    console.log(Images);
    // checking for values
    const [formData, setFormData] = useState({})
    useEffect(()=>{
        (async ()=>{
          Setloader(true)
          const result = await employee.getPersonalProfile();
          if(result.data.data !== null ){
            console.log('edit data',result.data.data)
            setFormData({...result.data.data})
            navigate('/edit-personal-profile')
          }
         else{
          Setloader(false)
          //  toast.error("erro fetching data")
          return
         }
        })()
      },[])
    // const { values, setValues } = useFormikContext();
    const formik = useFormik({
        initialValues: {
            fatherName:"",
            AboutMe:"",
            DOB:"",
            MaritalStatus:"",
            Gender:"",
            religion:"",
            CurrentAddress:"",
            CurrentCity:"",
            CurrentState:"",
            PermanentAddress:"",
            // MobileNumber:"",
            AdharNumber:"",
            PanNumber:"",
            DrivingLicenceNumber:""

        },
        onSubmit: async values => {
            console.log(values)
          SetSaveloader(true)
          const result = await employee.PersonalProfile(Images,values)
          console.log("this is the result",result)
           
          if(result === null){
            SetSaveloader(false)
            toast.warn("something went wrong please try again")
          }
    
          if(result.status === 200){
            SetSaveloader(false);
            toast.success(result.data.message)
            navigate("/work-experience");
          }
           
          else{
            SetSaveloader(false);
                    toast.error(result.data.message)
          }
        
         SetSaveloader(false)
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
      // console.log(formik);
      const textareaStyle = {
        width: '100%',
        maxWidth: '655px',
        height: '200px',
        padding: '10px',
        margin : "9px",
        boxSizing: 'border-box',
        border: '1px solid #ccc',
        borderRadius: '5px',
        resize: 'none',
        fontSize: '16px',
        lineHeight: '1.5',
        wordWrap: 'break-word'
      };

      if(loader){
        return <Loader style={{ width: '100vw',
        height: '60vh', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',}}/>
      }
    return (
      <div className="whole-personal-deatil-wraper">
        {/* <div className="employee-tab-personal-info">
          <Employeetab  active={'Personal Profile'}/>
        </div> */}
          <div className="personal-details ">
            {/* Navbar */}
            {/* <PersonalNav link={'/edit-personal-profile'} img={'/Utility/personal.png'}/> */}
            <div className="conatiner p-0">
              <AboutMe/>

                <SmallBanner
                    personalImage="/Utility/personal.png"
                    workImage="/Utility/work.png"
                    eduImage="/Utility/edu.png"
                />




                {/* <FormBar title={"Name"} type={"text"} placeholder={"Enter your name"} /> */}
                <FormBar
                    title={"Father’s /Husband "} type={"text"} placeholder={"Enter your father/husband name"} onChange={formik.handleChange} onblur={formik.handleBlur} value={formik.values.fatherName}
               name={'fatherName'} />
                <DateInput
                    label1="Date of Birth"
                    placeholder1="Date"
                    type={"date"}
                    type2={"text"}
                    label2="Marital Status"
                    placeholder2=" write marital Status"
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
                    placeholder2="Religion"
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
                    placeholder1="City"
                    type={"text"}
                    type2={"text"}
                    label2="Current State"
                    placeholder2="State"
                    onchange={formik.handleChange}
                    onblur={formik.handleBlur}
                    name2={'CurrentState'}
                    value2={formik.values.CurrentState}
                    name1={'CurrentCity'}
                    value1={formik.values.CurrentCity}

                />
                <div className="container  d-flex justify-content-center align-items-center flex-wrap text-center">
                    <div className="m-1 checkbox-wrapper-31">
                        <input type="checkbox" onChange={(e)=>{
                       if(e.target.checked === true){
                       formik.setFieldValue('PermanentAddress',formik.values.CurrentAddress)
                       
                       }
                       else{
                        formik.setFieldValue('PermanentAddress',"")
                       }
                        }}/>
                        <svg viewBox="0 0 35.6 35.6">
                            <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                            <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                            <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                        </svg>

                    </div>
                    <h6 style={{ color: "gray" }}>Current Address and Permanent Address as same</h6>
                </div>
                <FormBar
                    title={"Permanent Address"}
                    type={"text"}
                    placeholder={"Enter your Address"}
                    onChange={formik.handleChange} onblur={formik.handleBlur} value={formik.values.PermanentAddress}
                    name={'PermanentAddress'}
                />
                {/* <FormBar
                    title={"Mobile Number"}
                    type={"text"}
                    placeholder={"enter your mobile number"}
                    onChange={formik.handleChange} onblur={formik.handleBlur} value={formik.values.MobileNumber}
                    name={'MobileNumber'}
                /> */}
                {/* <FormBar
                    title={"Mobile Number"}
                    type={"number"}
                    placeholder={"Enter your Address"}
                /> */}

                <InputButton title={"Aadhar Number"} placeholder={"Enter Aadhar Number"} onchange={formik.handleChange}  onblur={formik.handleBlur} value1={formik.values.AdharNumber}
                   name1={'AdharNumber'} name2={'Adharcard'} uploadfile={GetImageData} />
                <InputButton title={"Pan Card Number"} placeholder={"Enter Pan Card Number"} onchange={formik.handleChange} onblur={formik.handleBlur} value1={formik.values.PanNumber}
                    name1={'PanNumber'} name2={'PanCard'} uploadfile={GetImageData} />
                <InputButton title={"Driving Licence No"} placeholder={"Enter Driving Licence No."}  onchange={formik.handleChange} onblur={formik.handleBlur} value1={formik.values.DrivingLicenceNumber}
                    name1={'DrivingLicenceNumber'} name2={'DrivingLicence'} uploadfile={GetImageData}  />
          
            <div className="container all-input">
            <div className="row">
                <div className="col-md-2 d-flex align-items-center">
                    <h5>{"About me"}</h5>
                </div>
                <div className="col-md-10">
                    <div className="row">

                        <div className="col-md-10 d-flex justify-contant-center align-items-center">
                            <div>
                                <img src="/Utility/check.png" alt="" />
                            </div>
                            <textarea  id="" cols="30" rows="10"  title={"About me"} type={"text-area"} placeholder={"Write something about yourself"} onChange={formik.handleChange} onblur={formik.handleBlur} value={formik.values.AboutMe}
               name={'AboutMe'}  style={textareaStyle}></textarea>
            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

          
    <div className="col-md-12 candidate-btn-div">
    <Button type={'submit'} title={Saveloader?(<Loader/>):"save"} onClick={formik.handleSubmit}  />
  
    </div>
   

        </div>
        
      </div>

    );
}

export default PersonalDetails;
