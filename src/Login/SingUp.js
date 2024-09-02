import "./Login-page.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AviaLogo from './AviaLogo.png';

export default function SignUp() {
    const navigate = useNavigate(); // Hook to navigate programmatically

    // State for form inputs and errors
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Perform sign-up logic here (e.g., API call)
            console.log('Form submitted:', { email, password });
        }
    };

    // Basic form validation
    const validateForm = () => {
        const errors = {};
        if (!email) errors.email = 'Email is required';
        if (!password) errors.password = 'Password is required';
        return errors;
    };

    // Function to navigate to the first page on "Sign in" click
    const handleSignInClick = () => {
        navigate('/'); // Navigate to the first page (replace '/' with your desired route)
    };

    return (
        <div className="SignUp">
            <div className="container">
                <div className="display-content">
                    <div className="avia-logo">
                        <img className="AviaLogo" src={AviaLogo} alt="My Image" />
                    </div>
                    <div className="login-screen">
                        <div className="login-details-content">
                            <h1 className="login-title">Create your account</h1>
                            <p className="login-discription">
                            Enter an email and create a password, getting started is easy!
                            </p>
                            <div className="divider-container">
                                <hr className="divider-line" />
                                <span className="divider-text">OR SIGN IN WITH</span>
                                <hr className="divider-line" />
                            </div>
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
                        {/* Add any additional content or images here */}
                    </div>
                </div>
            </div>
        </div>
    );
}

