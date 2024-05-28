import React from 'react';
import './PersonalDetails.css'; // Assuming you have a corresponding CSS file
import { Link, useNavigate } from 'react-router-dom';
// import PersonalNav from './personalNav/personalNav';
import FormBar from './formbar/FormBar';
import DateInput from './dateInput/DateInput';
import ButtonEdit from './ButtonEdit/ButtonEdit';
import InputButton from './InputButton/InputButton';
import SmallBanner from './SmallBanner/SmallBanner';
import AboutMe from './AboutMe/AboutMe';
import { Formik, Form, Field, ErrorMessage, useFormik, useFormikContext } from 'formik';
import { Button, Loader, ArrowNavigate } from '../../export';
// import ArrowNavigate from '../../export';
import employee from '../../../API/Employee';
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect } from 'react';
import Employeetab from '../Global/Employee-tab/Employee-tab';
import SelectTwo from '../../Global/UI/SelectTwo/SelectTwo';


function EditPersonalprofile({ isShow, redirect }) {
  const [Images, SetImages] = useState([]);
  const [loader, Setloader] = useState(false);
  const [Saveloader, SetSaveloader] = useState(false)
  let navigate = useNavigate();
  console.log(Images);
  const [formData, setFormData] = useState({})
  useEffect(() => {
    (async () => {
      Setloader(true)
      const result = await employee.getPersonalProfile();
      if (result.status === 200) {
        Setloader(false)
        setFormData({ ...result.data.data })
      }
      else {
        Setloader(false)
        toast.error("erro fetching data")
      }

    })()
  }, [])
  console.log(formData)
  // const { values, setValues } = useFormikContext();
  //  
  // const { values, setValues } = useFormikContext();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...formData

    },
    onSubmit: async values => {
      console.log("yeeeeeeai", values)
      SetSaveloader(true)
      const result = await employee.EditPersonalProfile(values)
      console.log("this is the result", result)

      if (result === null) {
        SetSaveloader(false)
        toast.warn("something went wrong please try again")
      }

      if (result.status === 200) {
        SetSaveloader(false);
        toast.success(result.data.message)
        navigate(redirect)
      }

      else {
        SetSaveloader(false);
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
  console.log("formik", formik);
  const textareaStyle = {
    width: '100%',
    padding: '10px',

    fontSize: '13px',
    borderRadius: "8px",
    margin: "9px",
    maxHeight: '100px',
    border: '1px solid #ccc',
    resize: 'vertical',
    outline: 'none',
  };

  if (loader) {
    return <Loader style={{
      width: '100%',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }} />
  }

  const gender = [
    { value: 'option1', label: 'Gender' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' }
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

const city = [
  { value: 'Mumbai', label: 'Mumbai' },
  { value: 'Delhi', label: 'Delhi' },
  { value: 'Bangalore', label: 'Bangalore' },
  { value: 'Kolkata', label: 'Kolkata' },
  { value: 'Chennai', label: 'Chennai' },
  // Add more cities as needed
];

const states = [
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

  return (
    <div className='whole-personal-deatil-wraper '>
      {/* <div className='employee-tab-personal-info'>
           <Employeetab active={'Personal Profile'}/>
        </div> */}
      <div className="personal-details ">
        {/* Navbar */}
        {/* <PersonalNav hideOrShow={false} img={'/Utility/personal.png'}/> */}
        <h3 className='text-center text-secondary mt-3'>{isShow ? ("Edit Personal Details") : null}</h3>
        <div className="conatiner  ">
          <ArrowNavigate url={"/Utility/personal.png"} />
          <div className="about-me mb-2">
            <AboutMe />
          </div>
          <div class="col-md-12"><h4 className="mt-0 text-center" style={{color: "rgb(143, 170, 70)"}}>Personal Details</h4></div>
          {/* <SmallBanner
                    personalImage="/Utility/personal.png"
                    workImage="/Utility/work.png"
                    eduImage="/Utility/edu.png"
                /> */}




          {/* <FormBar title={"Name"} type={"text"} placeholder={"Enter your name"} /> */}
          <div className="cover-of-all-inputs">
            <FormBar
              title={"Father Name"} type={"text"} placeholder={"Enter your name"} onChange={formik.handleChange} onblur={formik.handleBlur} value={formik.values.fatherName}
              name={'fatherName'} />


            <DateInput
              label1="Date of Birth"
              placeholder1="Date"
              type={"date"}
              type2={"text"}
              label2="Status"
              placeholder2="Status"
              onchange={formik.handleChange}
              onblur={formik.handleBlur}
              name2={'MaritalStatus'}
              value2={formik.values.MaritalStatus}
              name1={'DOB'}
              value1={formik.values.DOB}
            />

            {/* <DateInput
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

            /> */}

            <SelectTwo label1="Gender"
              type={"text"}
              type2={"text"}
              label2="Religion"
              selectinput={"selectinput1"}
              selectinput1={"selectinput2"}
              onchange={formik.handleChange}
             
              name2={'religion'}
              value2={formik.values.religion}
              name1={'Gender'}
              options1={gender}
              options2={religion}
              value1={formik.values.Gender}/>

            <FormBar
              title={"Current Address"}
              type={"text"}
              placeholder={"Enter your Address"}
              onChange={formik.handleChange} onblur={formik.handleBlur} value={formik.values.CurrentAddress}
              name={'CurrentAddress'}
            />


              <SelectTwo  
             label1="Current City"
              label2="State"
              onchange={formik.handleChange}
              onblur={formik.handleBlur}
              name2={'CurrentState'}
              value2={formik.values.CurrentState}
              name1={'CurrentCity'}
              options1={city}
              options2={states}
              value1={formik.values.CurrentCity}/>
            {/* <DateInput
              label1="Current City"
              placeholder1="Gender"
              type={"text"}
              type2={"text"}
              label2="State"
              placeholder2="Status"
              onchange={formik.handleChange}
              onblur={formik.handleBlur}
              name2={'CurrentState'}
              value2={formik.values.CurrentState}
              name1={'CurrentCity'}
              value1={formik.values.CurrentCity}

            /> */}
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
            {/* <FormBar
                    title={"Mobile Number"}
                    type={"text"}
                    placeholder={"enter your mobile number"}
                    onChange={formik.handleChange} onblur={formik.handleBlur} value={formik.values.MobileNumber}
                    name={'MobileNumber'}
                /> */}
            <div className="container all-input">
              <div className="row">
                <div className="col-md-2 p-0 d-flex align-items-center">
                  <h5>{"About me"}</h5>
                </div>
                <div className="col-md-10">
                  <div className="row">

                    <div className="col-md-10 p-0 d-flex justify-contant-center align-items-center">
                      <div>
                        <img src="/Utility/check.png" alt="" />
                      </div>
                      <textarea id="" cols="30" rows="10" title={"About me"} type={"text-area"} placeholder={"Write something about yourself"} onChange={formik.handleChange} onblur={formik.handleBlur} value={formik.values.AboutMe}
                        name={'AboutMe'} style={textareaStyle}></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>



        </div>

        <div className="personal-ifo-update-btn">
          <Button title={Saveloader ? (<Loader />) : "Update"} type={"type"} onClick={formik.handleSubmit} />

        </div>



      </div>
    </div>


  );
}

export default EditPersonalprofile;
