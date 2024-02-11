import React from 'react'
import "./PasswordChange.css"
import { FaThumbsUp } from "react-icons/fa";
import { ArrowNavigate, Button, FormBar } from '../../../../Components/export'
import { useFormik } from 'formik';
import {Loader} from '../../../../Components/export';
import { useEffect,useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import  employee from '../../../../API/Employee'
function PasswordChange() {
 const [loader,setloader] = useState(false)
    const formik = useFormik({
        initialValues: {
            oldpassword:'',
            newPassword:"",
            confirmNewPassword:""
        },
        onSubmit: async values => {
            console.log("yeeeeeeai",values)
            setloader(true)
            if(values.newPassword !== values.confirmNewPassword){
                setloader(false)
                toast.warn("new password and confirm password should be same")
                return
            }
            if(values.confirmNewPassword === "" || values.newPassword === "" || values.oldpassword === ""){
                setloader(false)
                toast.warn("please fill all the feilds")
                return
            }
            const result = await employee.ChangePassword(values)
            console.log("this is the result", result)
      
            if (result === null) {
              setloader(false)
              formik.setFieldValue("oldpassword","")
              formik.setFieldValue("newPassword","")
              formik.setFieldValue("confirmNewPassword","")
              toast.warn("something went wrong please try again")
            }
      
            if (result.status === 200) {
              setloader(false);
              formik.setFieldValue("oldpassword","")
              formik.setFieldValue("newPassword","")
              formik.setFieldValue("confirmNewPassword","")
              toast.success(result.data.message)
             
            }
      
            else {
              setloader(false);
              formik.setFieldValue("oldpassword","")
              formik.setFieldValue("newPassword","")
              formik.setFieldValue("confirmNewPassword","")
              toast.error(result.data.message)
            }
      
      
          },
        
    });
    return (
        <>
            <div className='mb-5 mt-3 change-pass'>
                <ArrowNavigate url={"/Utility/setting.png"} />
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-content-center">
                        <div className="head-setting d-flex justify-content-center  align-content-center gap-1 ">
                            <img className='green-check' src="/Utility/check.png" alt="" />
                            <h5 className='m-0'>Change Password</h5>
                        </div>

                    </div>
                </div>
                <FormBar title={"Old Password"} type={"password"} placeholder={"Enter Old Password"} onChange={formik.handleChange} name={"oldpassword"} value={formik.values.oldpassword}/>
                <FormBar title={"New Password"} type={"password"} placeholder={"Enter New Password"}  onChange={formik.handleChange} name={"newPassword"} value={formik.values.newPassword} />
                <FormBar title={"New Password"} type={"password"} placeholder={"Confirm Password"}  onChange={formik.handleChange} name={"confirmNewPassword"} value={formik.values.confirmNewPassword}/>

                <div className="col-md-12 mb-5 d-flex justify-content-center align-content-center">
                    <button className='download-red' onClick={formik.handleSubmit}>
                    {loader ? <Loader /> : <FaThumbsUp />} Submit
                    </button>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <h5 className='text-center m-0'>Get Job notification through <span><img style={{ width: '140px' }} src="/Utility/whatsapp.png" alt="" /> </span></h5><label className="toggle-switch">
                            <input type="checkbox" />
                            <div className="toggle-switch-background">
                                <div className="toggle-switch-handle"></div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>

        </>

    )
}

export default PasswordChange