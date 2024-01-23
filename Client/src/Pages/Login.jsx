import React from 'react'
 import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import "./Login.css"
function Login() {
  return (
   <>
 

// JSX equivalent
<div className='login-form-cover'>
    <div className="container">
  <div className="row">
    {/* Left Blank Side */}
    <div className="col-lg-6"></div>

    {/* Right Side Form */}
    <div className="col-lg-6 d-flex align-items-center justify-content-center right-side">
      <div className="form-2-wrapper">
        <div className="logo text-center">
          <h2>Logo</h2>
        </div>
        <h2 className="text-center mb-4">Sign Into Your Account</h2>
        <form action="#">
          <div className="mb-3 form-box">
            <input type="email" className="form-control" id="email" name="email" placeholder="Enter Your Email" required />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" id="password" name="password" placeholder="Enter Your Password" required />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
              <Link to="forget-3.html" className="text-decoration-none float-end">Forget Password</Link>
            </div>
          </div>
          <button type="submit" className="btn btn-outline-secondary login-btn w-100 mb-3">Login</button>
          <div className="social-login mb-3 type--A">
            <h5 className="text-center mb-3">Social Login</h5>
            <button className="btn btn-outline-secondary mb-3"><FaGoogle className="text-danger" /> Sign With Google</button>
            <button className="btn btn-outline-secondary mb-3"><FaFacebookF className="text-primary" /> Sign With Facebook</button>
          </div>
        </form>

        {/* Register Link */}
        <p className="text-center register-test mt-3">Don't have an account? <Link to="register-3.html" className="text-decoration-none">Register here</Link></p>
      </div>
    </div>
  </div>
</div>;
</div>


  
   </>
    
    // Pills navs
  
   
    
  )
}

export default Login