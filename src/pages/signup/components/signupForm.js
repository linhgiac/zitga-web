import React, { useState } from 'react';
import { Alert } from 'antd';
import { useNavigate } from 'react-router-dom';

import './signupForm.css';

const SignUpForm = ({ signup }) => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [details, setDetails] = useState({ name: '', email: '', password: '' });


    const submitHandler = async (e) => {
        e.preventDefault();

        let result = await signup(details);
        console.log("Signup result: ", result);

        if (result === true) {
            navigate('/login');
        }
        else {
            setError(result);
        }
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
                            <input
                                className='signup-form-input'
                                type='text' name='username' id='username'
                                onChange={e => setDetails({ ...details, username: e.target.value })}
                                value={details.username}
                                placeholder='Username'></input>
                        </div>
                        <div className='signup-form-group'>
                            <input
                                className='signup-form-input'
                                type='password' name='password' id='password'
                                onChange={e => setDetails({ ...details, password: e.target.value })}
                                value={details.password}
                                placeholder='Password'></input>
                        </div>
                        <div className='signup-form-group'>
                            <input
                                className='signup-form-input'
                                type='password' name='repassword' id='repassword'
                                onChange={e => setDetails({ ...details, repassword: e.target.value })}
                                value={details.repassword}
                                placeholder='Confirm Password'></input>
                        </div>
                        <div className='signup-form-group'>
                            <input
                                className='signup-form-input'
                                type='text' name='name' id='name'
                                onChange={e => setDetails({ ...details, name: e.target.value })}
                                value={details.name}
                                placeholder='Name'></input>
                        </div>
                        <div className='signup-form-group'>
                            <input
                                className='signup-form-input'
                                type='text' name='email' id='email'
                                onChange={e => setDetails({ ...details, email: e.target.value })}
                                value={details.email}
                                placeholder='Email'></input>
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