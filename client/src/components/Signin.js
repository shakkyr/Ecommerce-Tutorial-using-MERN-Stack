import React , {useState} from 'react'
import { Link } from "react-router-dom";
import {showErrorMsg} from '../helpers/message'
import { showLoading } from "../helpers/loading";
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import { signin } from '../api/auth';

const Signin = () => {

    const [formData , setFormData] = useState({
        email: '',
        password: '',
        errorMsg : false,
        loading : false,
        redirectToDashboard: false
    })

    const {
        email,
        password,
        redirectToDashboard,
        errorMsg,
        loading,
      } = formData;

      const handleSubmit = (event) => {
        event.preventDefault();

        if (isEmpty(email) || isEmpty(password)) {
            setFormData({
                ...formData,
                errorMsg : 'All Fields Are Required'
            })
        } else if (!isEmail(email)) {
            setFormData({
                ...formData,
                errorMsg: "Invalid Email"
            })
        } else {
            const {email, password} = formData;
            const data = { email, password}
            setFormData({
                ...formData,
                successMsg:" Validation succeeded",
                loading: true
            })
  
            signin(data)
                  
        }
    };

      const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value,
            errorMsg: '',
           
        })
    };
  


      const showSigninForm = () => (
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
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
              placeholder="Password"
              type="password"
              onChange={handleChange}
            />
          </div>
          {/* signin button */}
          <div className="form-group">
            <button
              style={{ justifyContent: "center" }}
              type="submit"
              className="input-group btn btn-primary btn-block"
            >
              Signin
            </button>
          </div>
          {/* already have account */}
          <p className="text-center text-black">
           Don't Have an account? <Link to="/signin">Register Here</Link>
          </p>
        </form>
      );



      return (
        <div className="signin-container">
          <div className="row px-3 vh-100">
            <div className="col-md-5 mx-auto align-self-center">
              {showSigninForm()}
              {loading && <div className="text-center"> {showLoading()}</div>
              }
              {errorMsg && showErrorMsg(errorMsg)}
              
            </div>
          </div>
        </div>
      );
}

export default Signin
