import React from 'react';
import "./RegisterForm.css"
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  return (
    <>
    <div className="container">
      <div className="col-lg-12 col-md-12">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <h5 className="mb-30 fleft">Register With Us </h5>
          <span className="iconbutton"><Link ><FaFacebook/></Link></span>
          <span className="iconbutton"><Link ><FaGoogle/></Link></span>
        </div>
        <div className="col-lg-6 col-md-6">
          <h5 className="mb-30 fleft"> Already Register</h5>
          <span className="iconbutton"><Link to='/login' >Login</Link></span>
        </div>
      </div>

      <form action="#">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="input-group-icon mt-20">
              <div className="icon"><i className="fa fa-globe" aria-hidden="true"></i></div>
              <div className="form-select" id="default-select">
                <select>
                  <option value="1">Employer</option>
                  <option value="1">Banking</option>
                  <option value="1">Sales</option>
                  <option value="1">Telemarketer</option>
                  <option value="1">DTP Operator</option>
                </select>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="mt-20">
              <input
                type="text"
                name="first_name"
                placeholder="Enter Your Company Name"
                onFocus={() => {}}
                onBlur={() => {}}
                required
                className="single-input"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="mt-20">
              <input
                type="text"
                name="first_name"
                placeholder="Contact Person Name"
                onFocus={() => {}}
                onBlur={() => {}}
                required
                className="single-input"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="mt-20">
              <input
                type="email"
                name="EMAIL"
                placeholder="Email address"
                onFocus={() => {}}
                onBlur={() => {}}
                required
                className="single-input"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="mt-20">
              <input
                type="text"
                name="last_name"
                placeholder="Mobile"
                onFocus={() => {}}
                onBlur={() => {}}
                required
                className="single-input"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="input-group-icon mt-20">
              <div className="icon"><i className="fa fa-thumb-tack" aria-hidden="true"></i></div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onFocus={() => {}}
                onBlur={() => {}}
                required
                className="single-input"
              />
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
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
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-15">
            <div className="switch-wrap d-flex justify-content-between">
              <div className="primary-checkbox">
                <input type="checkbox" id="default-checkbox" />
                <label htmlFor="default-checkbox"></label>
              </div>
              <p>By Registering with us you agree to our <Link  style={{ color: '#2577bd' }}>Terms and Conditions</Link></p>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-15">
            <Link  className="genric-btn primary circle arrow">Submit<span className="lnr lnr-arrow-right"></span></Link>
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
