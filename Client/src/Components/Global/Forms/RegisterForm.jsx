import React from 'react';
import "./RegisterForm.css"
import { FaFacebook, FaGoogle, FaLock, FaGlobe, FaPhoneAlt, FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
// import { FaFacebook, FaGoogle ,FaLock,FaGlobe,FaMobile } from 'react-icons/fa';
import GetGoogleUrl from '../../../utlity/GetGoogleUrl';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import Loader from '../loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import EmployerAuth from '../../../API/Employer/Employer.auth';

const RegisterForm = () => {
  const [loader, Setloader] = useState(false);
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      CompanyName: "",
      mobile: "",
      email: "",
      password: "",

    },
    onSubmit: async values => {
      console.log(values)
      Setloader(true)
      const result = await EmployerAuth.signup(values)
      console.log("this is the result", result)

      if (result === null) {
        Setloader(false)
        toast.warn("something went wrong please try again")
      }

      if (result.status === 200) {
        Setloader(false);
        navigate('/')
        toast.success(result.data.message)
      }

      else {
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
              <span className="iconbutton"><Link ><FaGoogle /></Link></span>
            </div>
            <div className="col-lg-6 col-md-6">
              <h5 className="mb-30 fleft"> Already Register</h5>
              <span className="iconbutton"><Link to='/employer-login' >Login</Link></span>
            </div>
          </div>

          <form onSubmit={formik.handleSubmit}>
            <div className="row">


              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="input-group-icon mt-20">
                  <div className="icon"><FaUser /></div>
                  <input
                    type="text"
                    name="CompanyName"
                    placeholder="Enter Your Company Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.CompanyName}
                    required
                    className="single-input"
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="input-group-icon mt-20">
                  <div className="icon"><FaPhoneAlt /></div>
                  <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
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
                  <div className="icon"><FaGlobe /></div>
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

              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="input-group-icon mt-20">
                  <div className="icon"><FaLock /></div>
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

              {/* <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-15">
            <div className="switch-wrap d-flex justify-content-between">
              <div className="primary-checkbox">
                <input type="checkbox" id="default-checkbox" />
                <label htmlFor="default-checkbox"></label>
              </div>
              <p>By Registering with us you agree to our <Link  style={{ color: '#2577bd' }}>Terms and Conditions</Link></p>
            </div>
          </div> */}
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-15  d-flex align-items-center">
                <div className="switch-wrap m-0 d-flex align-items-center justify-content-between">
                  <label className="container-for-check">
                    <input  type="checkbox"/>
                      <div className="checkmark"></div>
                  </label>

                  <p style={{ marginLeft: "5px", marginBottom: "0px", marginTop: "0px" }}>By Registering with us you agree to our <a href="#" style={{ color: '#325566' }}>Terms and Conditions</a></p>
                </div>
              </div>


              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-15">
                <button className="genric-btn primary circle arrow mt-3" type='submit'> {loader ? (<Loader />) : 'Submit'}</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <hr />
    </>
  );
};

export default RegisterForm;
