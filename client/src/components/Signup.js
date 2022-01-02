import React from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'

const Signup = () => {

   const handleSubmit= () => {

    }

    const handleChange = () => {

    }


    const showSignupForm = () => (
        <form className='signup-form' onSubmit={handleSubmit} noValidate>
    {/* username */}
    <div className='form-group input-group'>
        <div className='input-group-prepend'>
           
        </div>
        <input
            name='username'
            // value={username}
            className='form-control'
            placeholder='Username'
            type='text'
            onChange={handleChange}
        />
    </div>
    {/* email */}
    <div className='form-group input-group'>
        <div className='input-group-prepend'>
          
        </div>
        <input
            name='email'
            // value={email}
            className='form-control'
            placeholder='Email address'
            type='email'
            onChange={handleChange}
        />
    </div>
    {/* password */}
    <div className='form-group input-group'>
        <div className='input-group-prepend'>
           
        </div>
        <input
            name='password'
            // value={password}
            className='form-control'
            placeholder='Create password'
            type='password'
            onChange={handleChange}
        />
    </div>
    {/* confirmPassword */}
    <div className='form-group input-group'>
        <div className='input-group-prepend'>
            
        </div>
        <input
            name='confirmPassword'
            // value={confirmPassword}
            className='form-control'
            placeholder='Confirm password'
            type='password'
            onChange={handleChange}
        />
    </div>
    {/* signup button */}
    <div className='form-group'>
        <button style={{justifyContent:'center'}} type='submit' className='input-group btn btn-primary btn-block'>
            Signup
        </button>
    </div>
    {/* already have account */}
    <p className='text-center text-black'>
        Have an account? <Link to='/signin'>Log In</Link>
    </p>
</form>
    )


    return (
        <div className='signup-container'>
            {showSignupForm()}
        </div>
    )
}

export default Signup
