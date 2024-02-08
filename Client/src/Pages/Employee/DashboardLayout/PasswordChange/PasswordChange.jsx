import React from 'react'
import "./PasswordChange.css"
import { FaThumbsUp } from "react-icons/fa";
import { ArrowNavigate, Button, FormBar } from '../../../../Components/export'
function PasswordChange() {
    return (
        <>
            <div className='mb-5'>
                <ArrowNavigate url={"/Utility/setting.png"} />
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-content-center">
                        <div className="head-setting d-flex justify-content-center  align-content-center gap-1 ">
                            <img className='green-check' src="/Utility/check.png" alt="" />
                            <h5 className='m-0'>Change Password</h5>
                        </div>

                    </div>
                </div>
                <FormBar title={"Old Password"} type={"password"} placeholder={"Enter Old Password"} />
                <FormBar title={"New Password"} type={"password"} placeholder={"Enter New Password"} />
                <FormBar title={"New Password"} type={"password"} placeholder={"Confirm Password"} />

                <div className="col-md-12 mb-5 d-flex justify-content-center align-content-center">
                    <button className='download-red'>
                        <FaThumbsUp /> {/* Using the Bookmark icon */}
                        Submit
                    </button>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-center align-items-center">
                        <h5 className='text-center'>Get Job notification through <span><img style={{ width: '140px' }} src="/Utility/whatsapp.png" alt="" /> <label className="toggle-switch">
                            <input type="checkbox" />
                            <div className="toggle-switch-background">
                                <div className="toggle-switch-handle"></div>
                            </div>
                        </label></span></h5>
                    </div>
                </div>
            </div>

        </>

    )
}

export default PasswordChange