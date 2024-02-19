import React, { useState } from 'react';
// import { FaLongArrowRight, FaFacebook, FaTwitter } from "react-icons/fa";

import './SignUp.css'; // You need to create a CSS file for styling

function SignUp() {
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
                        <span>Sign In</span>
                        <p>Welcome back, please login to your account. You can login with Facebook, Twitter, or by your regular user login.</p>
                    </div>

                    <div>
                        <Link to="#" className="btn-face"> Facebook</Link>
                        <Link to="#" className="btn-twitter"> Twitter</Link>
                    </div>

                    <div className="or"><span>OR</span></div>

                    <form action="">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Keep me sign in</label>
                        <Link to="#" className="btn-signin">Sign In</Link>

                        <Link to="#" className="btn-reset btn-fade">Recover your password </Link>
                        <Link to="#" className="btn-member btn-fade">Not a member yet? </Link>
                    </form>
              
                </div>

                <div className={showSignUp ? "signup" : "signup hide"}>
                    {/* Sign Up Content */}
                </div>

                <div className={showRecoverPassword ? "recover-password" : "recover-password hide"}>
                    {/* Recover Password Content */}
                </div>
            </div>

            <div className="buttons">
                <button onClick={handleShowLogin}>Sign In</button>
                <button onClick={handleShowSignUp}>Sign Up</button>
                <button onClick={handleShowRecoverPassword}>Recover Password</button>
            </div>

            <div className="notification">
                {/* Notification Content */}
            </div>
        </div>
    );
}

export default SignUp;
