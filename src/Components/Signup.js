import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobile: '',
    email: '',
    password: '',
    password1: '',
  });

  const [passwordError, setPasswordError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.password1) {
      setPasswordError('Passwords do not match');
      return;
    }

    console.log('Form data submitted:', formData);

    setPasswordError('');
  };

  return (
    <div className="signin-container">
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            placeholder="First Name"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            placeholder="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input
            type="tel"
            id="mobile"
            placeholder="Mobile Number"
            name="mobile"
            pattern="[0-9]{10}"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="E-mail"
            name="email"
            pattern="^\s*[^\s@]+@[^\s@]+\.[^\s@]+\s*$"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password1">Confirm Password:</label>
          <input
            type="password"
            id="password1"
            placeholder="Confirm Password"
            name="password1"
            value={formData.password1}
            onChange={handleChange}
            required
          />
        </div>
        {passwordError && <p className="error-message">{passwordError}</p>}
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <p>
        <h3>
          Already have an account? <Link to="/login">Login</Link>
        </h3>
      </p>
      </div>
    </div>
  );
}

export default SignUp;

