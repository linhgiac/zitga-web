import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card, Alert } from 'antd';

import './loginForm.css';

const LoginForm = ({ form, login }) => {
    const [error, setError] = useState("");

    const onFinish = async (values) => {
        console.log('Success:', values);
        setError(login(values));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        setError(getErrorList(errorInfo.errorFields));
    };

    const getErrorList = (errorFields) => {
        return errorFields.map((field) =>
            <li key={field.name.toString()}>{field.errors.toString()}</li>
        );
    }

    const clearError = () => {
        setError("");
    }

    return (
        <div className='login-wrapper'>

            <div className='login-header'>
                <div className='login-header-wrapper'>
                    <div className='login-header-title'>Login</div>
                </div>
            </div>
            <div className='login-error'>
                {(error !== "") ?
                    (<Alert
                        message="Login Failed"
                        description={error}
                        type="error"
                        closable
                        onClose={() => clearError()}
                    />) : null}
            </div>
            <div className='login-body'>
                <Form size='large'
                    form={form}
                    name="login-form"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="login" shape="round">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default LoginForm;