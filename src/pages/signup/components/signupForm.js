import React, { useState } from 'react';
import { Alert } from 'antd';
import './signupForm.css';

const SignUpForm = ({ signup }) => {
    const [error, setError] = useState("");
    const [details, setDetails] = useState({ name: '', email: '', password: '' });


    const submitHandler = (e) => {
        e.preventDefault();

        setError(signup(details));
    }

    const clearError = () => {
        setError("");
    }

    return (
        <div className='signup-wrapper'>

            <div className='signup-header'>
                <div className='signup-header-wrapper'>
                    <div className='signup-header-title'>Sign Up</div>
                </div>
            </div>
            <div className='signup-error'>
                {(error !== "") ?
                    (<Alert
                        message="Sign Up Failed"
                        description={error}
                        type="error"
                        closable
                        onClose={() => clearError()}
                    />) : null}
            </div>
            <div className='signup-body'>
                <form onSubmit={submitHandler}>
                    <div className='signup-form'>
                        <div className='signup-form-group'>
                            {/* <label htmlFor='name'>Name: </label> */}
                            <input
                                className='signup-form-input'
                                type='text' name='name' id='name'
                                onChange={e => setDetails({ ...details, name: e.target.value })}
                                value={details.name}
                                placeholder='Name'></input>
                        </div>
                        <div className='signup-form-group'>
                            {/* <label htmlFor='email'>Email: </label> */}
                            <input
                                className='signup-form-input'
                                type='text' name='email' id='email'
                                onChange={e => setDetails({ ...details, email: e.target.value })}
                                value={details.email}
                                placeholder='Email'></input>
                        </div>
                        <div className='signup-form-group'>
                            {/* <label htmlFor='password'>Password: </label> */}
                            <input
                                className='signup-form-input'
                                type='password' name='password' id='password'
                                onChange={e => setDetails({ ...details, password: e.target.value })}
                                value={details.password}
                                placeholder='Password'></input>
                        </div>
                        <div className='signup-form-group'>
                            <input className='signup-form-button' type='submit' value='sign up'></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SignUpForm;