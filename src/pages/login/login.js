import React, { useState } from "react";
import LoginForm from "./components/loginForm";
import { NavLink } from "react-router-dom";
import { LeftCircleFilled } from "@ant-design/icons"
import "./login.css";

const Login = ({ login }) => {

    return (
        <div className="login-page">
            <nav className="login-nav">
                <NavLink to="/"><LeftCircleFilled className="nav-icon" /></NavLink>
            </nav>
            <div className="login-content">
                <LoginForm login={login} />
            </div>
        </div>
    );
};

export default Login;
