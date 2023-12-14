import React from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
function SignUp()
{
  return (
    <div className="signup-container">
      <h2>Create an Account</h2>
      <form className="signup-form" action="#" method="post">
        <div className="input-group">
          <label htmlFor="firstname">First Name:</label>
          <input type="text" id="firstname" placeholder  ="First Name" name="firstname" required />
        </div>
        <div className="input-group">
          <label htmlFor="lastname">Last Name:</label>
          <input type="text" id="lastname" placeholder="Last Name" name="lastname" required />
        </div>
        <div className="input-group">
          <label htmlFor="mobile">Mobile Number:</label>
          <input type="tel" id="mobile" placeholder="Mobile Number" name="mobile" pattern="[0-9]{10}" required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" placeholder="E-mail" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder="Password" name="password" required />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
      <p>
        <h3>Already have an account?{' '}
        <Link to="/">Login</Link></h3>
      </p>
    </div>
  );
}

export default SignUp;
