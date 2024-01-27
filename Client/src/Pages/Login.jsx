import React from 'react'
 import { Link,useNavigate } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import "./Login.css"
import GetGoogleUrl from '../utlity/GetGoogleUrl';
import { Formik, Form, Field, ErrorMessage,useFormik } from 'formik';
import Loader from '../Components/Global/loader/Loader';
import auth from '../API/Authentiocaion'
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';


function Login() {
  const [loader,Setloader] = useState(false)
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      console.log('here is it',values)
      Setloader(true)
      const result = await auth.login(values)
      console.log("this is the result",result)
       
      if(result === null){
        Setloader(false)
        toast.warn("something went wrong please try again")
      }

      if(result.status === 200){
        Setloader(false);
        navigate('/employed-dashboard')
        toast.success(result.data.message)
      }
       
      else{
        Setloader(false);
                toast.error(result.data.message)
      }
    
     
    },
  }
  )
  return (
    
   <>
 
   <div className='login-form-cover'>
    <div className="container">
  <div className="row">
    {/* Left Blank Side */}
    <div className="col-lg-6"></div>

    {/* Right Side Form */}
    <div className="col-lg-6 d-flex align-items-center justify-content-center right-side">
      <div className="form-2-wrapper">
        {/* <div className="logo text-center">
          <h2>Logo</h2>
        </div> */}
        <h2 className="text-center mb-4">Sign Into Your Account</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-3 form-box">
            <input type="email" className="form-control" id="email" name="email" placeholder="Enter Your Email" required  onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}/>
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="password" name="password" placeholder="Enter Your Password" required  onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.password} />
          </div>
          {/* <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              <Link to="forget-3.html" className="text-decoration-none float-end">Forget Password</Link>
            </div>
          </div> */}
          <button type="submit" className="btn btn-outline-secondary login-btn w-100 mb-3">{loader?<Loader/>:'Login'}</button>
          <div className="social-login mb-3 type--A">
            <h5 className="text-center mb-3">Social Login</h5>
            <button className="btn btn-outline-secondary mb-3"><FaGoogle className="text-danger" /> Sign With Google</button>
           
          </div>
        </form>

        {/* Register Link */}
        <p className="text-center register-test mt-3"> Don't have an account? <Link to="register-3.html" className="text-decoration-none">Register here</Link></p>
      </div>
    </div>
  </div>
</div>;
</div>


  
   </>
    
  
  
   
    
  )
}

export default Login