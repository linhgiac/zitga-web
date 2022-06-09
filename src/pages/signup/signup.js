import React from 'react';
import SignUpForm from './components/signupForm';
import './signup.css';

const SignUp = () => {
    const signup = (details) => {
        console.log(details);
        return "None";
    };
    return (
        <div className='signup-page'>
            <SignUpForm signup={signup} />
        </div>
    );
}

export default SignUp;
