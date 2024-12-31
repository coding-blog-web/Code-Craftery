import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();  // Replace useHistory with useNavigate

  const handleValidation = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is a required field';
    }
    if (!password) {
      newErrors.password = 'Password is a required field';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      try {
        const response = await fetch('https://api.avai.woycedemo.com/api/web/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Handle successful login
          console.log('Login successful:', data);
          navigate('/Dashboard');  // Use navigate instead of history.push
        } else {
          // Handle login error
          console.error('Login failed:', data.message);
          setErrors({ server: data.message });
        }
      } catch (error) {
        console.error('An error occurred:', error);
        setErrors({ server: 'Failed to connect to server. Please try again later.' });
      }
    }
  };
  return (
    <div className="login-page">
      <div className="container">
        <div className="right-side-container">
          <div className="img-container"> 
          <img className="app-logo" src="./assets/images/1236589.png" />
          </div>
        </div>
        <div className="display-content">
          <div className="login-screen">
            <div className="login-details-content">
              <h1 className="login-title">Login into your account</h1>
              <p className="login-description">
                
              </p>
              <form onSubmit={handleSubmit}>
                {errors.server && <p className="error-message">{errors.server}</p>}
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
                    {errors.email && <p className="error-message">{errors.email}</p>}
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
                    {errors.password && <p className="error-message">{errors.password}</p>}
                  </div>
                </div>
                <button className="Sign-In-button" type="submit">Login</button>
              </form>
              
              <div className="sign-up-text">
                <p>Don't have an account?</p>
                <Link to="/SignUp" className="sign-up-link">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}