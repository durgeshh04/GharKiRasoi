import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import loginImage from '../assets/login-image.png'; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <div className="login-image">
          <img
            src={loginImage}
            alt="Login"
          />
        </div>
      </div>
      <div className="login-form">
        <h2>Log In</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="login-button">Log In</button>
          <div className="form-footer">
            <Link to="/forgot-password">Forgot your password?</Link>
            <Link to="/register">Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
