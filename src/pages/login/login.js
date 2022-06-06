import React, { useState } from "react";
import LoginForm from "./components/loginForm";
import { Form } from "antd";
import './login.css';

const Login = () => {
    const [form] = Form.useForm();

    const adminUser = {
        email: "admin@gmail.com",
        password: "123456"
    };

    const [user, setUser] = useState({ username: "", email: "" });

    const login = (details) => {
        console.log(details);

        if (details.email === adminUser.email && details.password === adminUser.password) {
            console.log("Logged in");
            setUser({
                username: details.username,
                email: details.email
            })
        }
        else {
            console.log("Details do not match");
            return "Details do not match";
        }
    };

    const logout = () => {
        console.log("Logout");
        setUser({
            username: "",
            email: ""
        })
    }

    return (
        <div className="login-page">
            {(user.email !== "") ? (
                <div className="login-welcome">
                    <h2>Welcome, <span>{user.username}</span></h2>
                    <button onClick={() => logout()}>Logout</button>
                </div>)
                :
                (<LoginForm form={form} login={login} />)}
        </div>

    )
}

export default Login;