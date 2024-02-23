import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
// import { FaLongArrowRight, FaFacebook, FaTwitter } from "react-icons/fa";

import './SignIn.css'; // You need to create a CSS file for styling
import { Loader } from '../../Components/export';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';

function SignIn({login,redircet,backurl}) {

    // main login functions
    const [loader, Setloader] = useState(false);
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: async values => {
      console.log('here is it', values);
      Setloader(true);
      const result = await login.login(values);
      console.log("this is the result", result);

      if (result === null) {
        Setloader(false);
        toast.warn("something went wrong please try again");
      }

      if (result.status === 200) {
        Setloader(false);
        navigate(redircet);
        toast.success(result.data.message);
      } else {
        Setloader(false);
        toast.error(result.data.message);
      }
    },
  });


    const [showLogin, setShowLogin] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);
    const [showRecoverPassword, setShowRecoverPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const [error, setError] = useState('');

    const handleShowLogin = () => {
        setShowLogin(true);
        setShowSignUp(false);
        setShowRecoverPassword(false);
    };

    const handleShowSignUp = () => {
        setShowLogin(false);
        setShowSignUp(true);
        setShowRecoverPassword(false);
    };

    const handleShowRecoverPassword = () => {
        setShowLogin(false);
        setShowSignUp(false);
        setShowRecoverPassword(true);
    };

    const handleSubmitResetPassword = () => {
        if (!resetEmail) {
            setError('Email not valid.');
        } else {
            // Perform action to submit reset password request
            setError('');
            setResetEmail('');
        }
    };

    return (
        <div className="sign-wrapper">
            <div className="sign-panels">
                <div className={showLogin ? "login" : "login hide"}>
                    <div className="title">
                        <span onClick={handleShowLogin}><img src="/Utility/logo.png" alt="" /></span>
                        <p>Welcome back, please login to your account. You can login with Google or by your regular user login.</p>
                    </div>

                    <div className='d-flex justify-content-center align-items-center gap-1'>

                        <Link to="#" className="btn-twitter"><FaGoogle /> Google</Link>
                    </div>

                    <div className="or"><span>OR</span></div>

                    <form onSubmit={formik.handleSubmit}>
                        <input  
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Enter Your Email"
                            required
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Enter Your Password"
                            required
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}

                        />
                        <div className='d-flex align-items-center justify-content-center flex-wrap'>
                            <input type="checkbox" id="remember" />
                            <label htmlFor="remember">Keep me sign in</label>

                            <Link to="#" type="submit" className="btn-signin" onClick={formik.handleSubmit}> {loader ? <Loader /> : 'Sign In'}</Link>
                        </div>


                        <Link to="#" onClick={handleShowRecoverPassword} className="btn-reset btn-fade">Recover your password </Link>
                        <Link to={backurl} className="btn-member btn-fade">Not a member yet? </Link>
                    </form>

                </div>

                <div className={showSignUp ? "signup" : "signup hide"}>
                    <div className="title">
                        <span><img src="/Utility/logo.png" alt="" /></span>
                        <p>Create a new account. You can sign up with your Google account. Or your regular user login.</p>
                    </div>

                    <div className='d-flex justify-content-center'>

                        <Link to="#" className="btn-twitter"><FaGoogle /> Google</Link>
                    </div>

                    <div className="or"><span>OR</span></div>

                    <form action="">
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Email Address" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Repeat Password" />

                        <Link to="#" className="btn-signin">Sign Up</Link>
                        <Link to="#" onClick={handleShowLogin} className="btn-login btn-fade">Already have an account, Sign In </Link>
                    </form>
                </div>

                <div className={showRecoverPassword ? "recover-password" : "recover-password hide"}>
                    <div className="title">
                        <span>Recover Password</span>
                        <p>Enter in the username or email associated with your account</p>
                    </div>

                    <form action="">
                        <input type="email" placeholder="Username/Email Address" id="resetPassword" required />
                        <span className="error" onClick={handleShowRecoverPassword}></span>
                        <Link to="#" className="btn-signin btn-password">Submit Reset</Link>
                        <Link to="#" onClick={handleShowLogin} className="btn-login btn-fade"> Cancel and go back to Login page </Link>
                    </form>

                    <div className="notification">
                        <p>Good job. An email containing information on how to reset your password was sent to <span className="reset-mail"></span>. Please follow the instructions in that email to reset your password. Thanks!</p>
                    </div>
                </div>
            </div>

            {/* <div className="buttons">
                <button onClick={handleShowLogin}>Sign In</button>
                <button onClick={handleShowSignUp}>Sign Up</button>
                <button onClick={handleShowRecoverPassword}>Recover Password</button>
            </div> */}

            <div className="notification">
                {/* Notification Content */}
            </div>
        </div>
    );
}

export default SignIn;
