import React, { useState } from 'react';
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
                    {/* Login Content */}
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
