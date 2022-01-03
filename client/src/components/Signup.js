import React, { useState } from "react";
import { Link } from "react-router-dom";
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import equals from 'validator/lib/equals';

import {showErrorMsg, showSuccessMsg} from '../helpers/message'
import { showLoading } from "../helpers/loading";
import { signup } from "../api/auth";
 

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    username,
    email,
    password,
    confirmPassword,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  const handleSubmit = (event) => {
      event.preventDefault();
      if (isEmpty(username) || isEmpty(password) || isEmpty(confirmPassword)) {
          setFormData({
              ...formData,
              errorMsg : 'All Fields Are Required'
          })
      } else if (!isEmail(email)) {
          setFormData({
              ...formData,
              errorMsg: "Invalid Email"
          })
      } else if (!equals(password, confirmPassword)) {
          setFormData({
              ...formData,
              errorMsg : "Passwords is not Edentical"
          })
      } else {
          const {username, email, password} = formData;
          const data = {username, email, password}
          setFormData({
              ...formData,
              successMsg:" Validation succeeded",
              loading: true
          })

          signup(data)
                .then(res => {
                    console.log(res);
                    setFormData({
                        username:'',
                        password:'',
                        email:'',
                        confirmPassword:'',
                        loading:false,
                        successMsg: res.data.successMessage
                    })
                })
                .catch(err => {
                    console.log('axios failed', err)
                    setFormData({
                        ...formData,
                        loading:false,
                        errorMsg: err.response.data.errorMessage,
                    })
                })
      }
  };

  const handleChange = (event) => {
      setFormData({
          ...formData,
          [event.target.name] : event.target.value,
          errorMsg: '',
          successMsg : ''
         
      })
  };

  const showSignupForm = () => (
    <form className="signup-form" onSubmit={handleSubmit} noValidate>
      {/* username */}
      <div className="form-group input-group">
        <div className="input-group-prepend"></div>
        <input
          name="username"
          value={username}
          className="form-control"
          placeholder="Username"
          type="text"
          onChange={handleChange}
        />
      </div>
      {/* email */}
      <div className="form-group input-group">
        <div className="input-group-prepend"></div>
        <input
          name="email"
          value={email}
          className="form-control"
          placeholder="Email address"
          type="email"
          onChange={handleChange}
        />
      </div>
      {/* password */}
      <div className="form-group input-group">
        <div className="input-group-prepend"></div>
        <input
          name="password"
          value={password}
          className="form-control"
          placeholder="Create password"
          type="password"
          onChange={handleChange}
        />
      </div>
      {/* confirmPassword */}
      <div className="form-group input-group">
        <div className="input-group-prepend"></div>
        <input
          name="confirmPassword"
          value={confirmPassword}
          className="form-control"
          placeholder="Confirm password"
          type="password"
          onChange={handleChange}
        />
      </div>
      {/* signup button */}
      <div className="form-group">
        <button
          style={{ justifyContent: "center" }}
          type="submit"
          className="input-group btn btn-primary btn-block"
        >
          Signup
        </button>
      </div>
      {/* already have account */}
      <p className="text-center text-black">
        Have an account? <Link to="/signin">Log In</Link>
      </p>
    </form>
  );

  return (
    <div className="signup-container">
      <div className="row px-3 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          {showSignupForm()}
          {loading && <div className="text-center"> {showLoading()}</div>
          }
          {errorMsg && showErrorMsg(errorMsg)}
          {successMsg && showSuccessMsg(successMsg)}
        </div>
      </div>
    </div>
  );
};

export default Signup;
