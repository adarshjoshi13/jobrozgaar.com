import React, { useState } from 'react'
import "./NormalForm.css"
import { Link,useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle ,FaLock,FaGlobe,FaMobile,FaUserFriends ,FaUser } from 'react-icons/fa';
import GetGoogleUrl from '../../../utlity/GetGoogleUrl';
import { Formik, Form, Field, ErrorMessage,useFormik } from 'formik';
import Loader from '../loader/Loader';
import auth from '../../../API/Authentiocaion'
import { ToastContainer, toast } from 'react-toastify';
function NormalForm() {
    const [loader,Setloader] = useState(false);
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            firstName:"",
            mobile:"",
            email:"",
            password:"",
            ReferralCode:''

        },
        onSubmit: async values => {
            console.log(values)
          Setloader(true)
          const result = await auth.signup(values)
          console.log("this is the result",result)
           
          if(result === null){
            Setloader(false)
            toast.warn("something went wrong please try again")
          }
    
          if(result.status === 200){
            Setloader(false);
            navigate('/')
            toast.success(result.data.message)
          }
           
          else{
            Setloader(false);
                    toast.error(result.data.message)
          }
        
         
        },
      
      });
      console.log(formik)
    return (
        <>
            <div className="container">
                <div className="col-lg-12 col-md-12">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <h5 className="mb-30 fleft">Register With Us </h5>
                           
                            <span className="iconbutton"><a href={GetGoogleUrl()}><FaGoogle /></a></span>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <h5 className="mb-30 fleft"> Already Register</h5>
                            <span className="iconbutton"><Link to='/employee-login' >Login</Link></span>
                        </div>
                    </div>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="row">
                            {/*  */}  <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="input-group-icon  mt-20">
                                <div className="icon"><FaUser/></div>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Full Name"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.firstName}
                                        required
                                        className="single-input"
                                    />
                                </div>
                            </div> 
                          

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="input-group-icon mt-20">
                                <div className="icon"><FaGlobe/></div>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                        required
                                        className="single-input"
                                    />
                                </div>
                            </div>
{/*  */}
                             <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="input-group-icon mt-20">
                                <div className="icon"><FaLock/></div>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password}
                                        required
                                        className="single-input"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="input-group-icon mt-20">
                                <div className="icon"><FaMobile/></div>
                                    <input
                                      type="tel"
                                        name="mobile"
                                        placeholder="phone"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.mobile}
                                        required
                                        className="single-input"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="input-group-icon mt-20">
                                <div className="icon"><FaUserFriends/></div>
                                    <input
                                      type="tel"
                                        name="ReferralCode"
                                        placeholder="Referral Code"
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.ReferralCode}
                                        required
                                        className="single-input"
                                    />
                                </div>
                            </div>
                            {/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="input-group-icon mt-20">
                                    <div className="icon"><i className="fa fa-globe" aria-hidden="true"></i></div>
                                    <div className="form-select" id="default-select">
                                        <select>
                                            <option value="1">Jobs</option>
                                            <option value="1">Banking</option>
                                            <option value="1">Sales</option>
                                            <option value="1">Telemarketer</option>
                                            <option value="1">DTP Operator</option>
                                        </select>
                                    </div>
                                </div>
                            </div> */}


                            {/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div className="input-group-icon mt-20">
                                    <div className="icon"><i className="fa fa-globe" aria-hidden="true"></i></div>
                                    <div className="form-select" id="default-select">
                                        <select>
                                            <option value="1">City</option>
                                            <option value="1">Delhi</option>
                                            <option value="1">Mumbai</option>
                                            <option value="1">Uttrakhand</option>
                                            <option value="1">Punjab</option>
                                        </select>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-15">
                                <div className="switch-wrap d-flex justify-content-between">
                                    <div className="primary-checkbox">
                                        <input type="checkbox" id="default-checkbox" />
                                        <label htmlFor="default-checkbox"></label>
                                    </div>
                                    <p>By Registering with us you agree to our <Link style={{ color: '#2577bd' }}>Terms and Conditions</Link></p>
                                </div>
                            </div> */}

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-15">
                            <button className="genric-btn primary circle arrow" type="submit" >
                                   {loader ? <Loader /> : "Submit"}
                             </button>

                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <hr />
        </>
    )
}

export default NormalForm;