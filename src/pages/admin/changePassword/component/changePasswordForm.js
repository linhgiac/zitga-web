import React, { useState } from 'react';
import { Alert } from 'antd';
import { useNavigate } from 'react-router-dom'

import './changePasswordForm.css';

const ChangePasswordForm = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [details, setDetails] = useState({ username: '', email: '', password: '' });

    const submitHandler = async (e) => {
        e.preventDefault();

    }

    const clearError = () => {
        setError("");
    }

    return (
        <div className='change-password-wrapper'>

            <div className='change-password-header'>
                <div className='change-password-header-wrapper'>
                    <div className='change-password-header-title'>Change Password</div>
                </div>
            </div>
            <div className='change-password-error'>
                {(error !== "") ?
                    (<Alert
                        message="Change Password Failed"
                        description={error}
                        type="error"
                        closable
                        onClose={() => clearError()}
                    />) : null}
            </div>
            <div className='change-password-body'>
                <form onSubmit={submitHandler}>
                    <div className='change-password-form'>
                        <div className='change-password-form-group'>
                            {/* <label htmlFor='name'>Name: </label> */}
                            <p>Mật khẩu cũ</p>
                            <input
                                className='change-password-form-input'
                                type='password' name='oldPassword' id='oldPassword'
                                placeholder='Old Password'></input>
                        </div>
                        <div className='change-password-form-group'>
                            {/* <label htmlFor='password'>Password: </label> */}
                            <p>Mật khẩu mới</p>
                            <input
                                className='change-password-form-input'
                                type='password' name='newPassword' id='newPassword'
                                placeholder='Password'></input>
                        </div>
                        <div className='change-password-form-group'>
                            {/* <label htmlFor='password'>Password: </label> */}
                            <p>Nhập lại mật khẩu mới</p>
                            <input
                                className='change-password-form-input'
                                type='password' name='newPasswordAgain' id='newPasswordAgain'
                                placeholder='Password'></input>
                        </div>
                        <div className='change-password-form-group'>
                            <input className='change-password-form-button' type='submit' value='Change Password'></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ChangePasswordForm;