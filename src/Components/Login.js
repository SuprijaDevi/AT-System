import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="signup-container">
        <FaUser className="user-icon" />
        <h2>Login</h2>
        <form action="#" method="post">
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" placeholder="E-mail" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" placeholder="Password" name="password" required />
          </div>
          <div className="input-group">
            <label>
              <input type="checkbox" id="rememberMe" name="rememberMe" /> Remember Me
            </label>
          </div>
          <div className="password-options">
            <a href="/">Forgot Password?</a>
          </div>
          <button type="submit" className="signup-button">
            Login
          </button>
        </form>
        <p>
          <h3>Don't have an account?{' '}
          <Link to="/signup">SignUp</Link></h3>
        </p>
      </div>
    </div>
  );
}

export default Login;
