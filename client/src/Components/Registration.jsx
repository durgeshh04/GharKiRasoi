import React from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';
import foodImage from '../assets/food-image.png'; 

const Registration = () => {
  return (
    <div className="registration-container">
      <div className="image-container">
        <div className="food-image">
          <img src={foodImage} alt="Food" />
        </div>
      </div>
      <div className="registration-form">
        <h2>Create an account</h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <label>Phone No.</label>
            <input type="tel" placeholder="Phone No." required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="register-button">Create an account</button>
          <div className="form-footer">
            <span>Already have an account? <Link to="/login">Log in</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
