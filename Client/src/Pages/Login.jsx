import React from 'react'
import { faEnvelope, faLock, faUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import "./Login.css"
function Login() {
  return (
    <>
    <div className="login-form-cover">
       <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src="https://www.betterup.com/hubfs/Young-team-working-together-in-a-meeting-room.jpg#keepProtocol" alt="" />
            <div className="text">
              <span className="text-1">Every new friend is a <br /> new adventure</span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            {/* <img className="backImg" src="images/backImg.jpg" alt="" /> */}
            <div className="text">
              <span className="text-1">Complete miles of journey <br /> with one step</span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i><faEnvelope /></i>
                    <input type="text" placeholder="Enter your email" required />
                  </div>
                  <div className="input-box">
                    <i><faLock /></i>
                    <input type="password" placeholder="Enter your password" required />
                  </div>
                  <div className="text"><Link to="#">Forgot password?</Link></div>
                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <button style={{ width: '100%' }} type="button" className="login-with-google-btn">
                    Sign in with Google
                  </button>
                  <div className="text sign-up-text">Don't have an account? <label htmlFor="flip"><Link to="#">Sign up now</Link></label></div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i><faUser /></i>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-box">
                    <i><faEnvelope /></i>
                    <input type="text" placeholder="Enter your email" required />
                  </div>
                  <div className="input-box">
                    <i><faLock /></i>
                    <input type="password" placeholder="Enter your password" required />
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Submit" />
                  </div>
                  <div className="text sign-up-text">Already have an account? <label htmlFor="flip"><Link to="#">Login now</Link></label></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
     


    </>

    // Pills navs



  )
}

export default Login