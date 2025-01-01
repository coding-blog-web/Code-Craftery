import "./Login-page.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            try {
                const response = await fetch('https://api.avai.woycedemo.com/api/web/sign_up', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password }),
                });
                
                const data = await response.json();

                if (response.ok) {
                    console.log('Sign up successful:', data);
                    navigate('/dashboard'); // Redirect to dashboard or any other route after successful sign up
                } else {
                    setServerError(data.message || 'Failed to sign up');
                }
            } catch (error) {
                console.error('An error occurred:', error);
                setServerError('Failed to connect to server. Please try again later.');
            }
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!email) errors.email = 'Email is required';
        if (!password) errors.password = 'Password is required';
        return errors;
    };

    const handleSignInClick = () => {
        navigate('/Login'); 
    };
    
    return (
        <div className="login-page">
            <div className="container">
                <div className="display-content">
                    <div className="login-screen">
                        <div className="login-details-content">
                            <h1 className="login-title">Create your account</h1>
                            <p className="login-discription">
                                Enter an email and create a password, getting started is easy!
                            </p>
                            <form onSubmit={handleSubmit}>
                                <div className="container-form">
                                    <label className="label" htmlFor="email">
                                        Email
                                    </label>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Your email address"
                                            autoCapitalize="none"
                                            autoComplete="email"
                                            autoCorrect="off"
                                            className="input"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {errors.email && (
                                            <p className="error-message">{errors.email}</p>
                                        )}
                                    </div>
                                </div>
                                <div className="container-form">
                                    <label className="label" htmlFor="password">
                                        Password
                                    </label>
                                    <div>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="Your password"
                                            className="input"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {errors.password && (
                                            <p className="error-message">{errors.password}</p>
                                        )}
                                    </div>
                                </div>
                                {serverError && (
                                    <p className="error-message">{serverError}</p>
                                )}
                                <button className="Sign-In-button" type="submit">Sign Up</button>
                            </form>
                            <div className="sign-up-text">
                                <p>Already have an account?</p>
                                <p className="Sign-in-text" onClick={handleSignInClick} style={{cursor: 'pointer'}}>Sign in</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right-side-container">
                    <div className="img-container">
          <img className="app-logo" src="./assets/images/1236589.png" />
                    </div>
                </div>
            </div>
        </div>
    );
}
