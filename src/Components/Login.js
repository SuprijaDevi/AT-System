import React from 'react';
import './Login.css';

function Login({ onNavigate }) {
  const handleNavigate = () => {
    if (onNavigate) {
      onNavigate();
    }
  };

  return (
    <div className="signup-container1">
      <h2>Login</h2>
      <form action="#" method="post">
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="signup-button">
          Login
        </button>
      </form>
      <p>
        <h3>Don't have an account?{' '}
        <button onClick={handleNavigate}>SignUp</button></h3>
      </p>
    </div>
  );
}

export default Login;
