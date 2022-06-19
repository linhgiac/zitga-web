import React from "react";
import "./changePassword.css";
import { LeftCircleFilled } from "@ant-design/icons";
import {NavLink} from 'react-router-dom';
import ChangePasswordForm from './component/changePasswordForm'

const ChangePassword = () => {
  return (
    <div className="change-password-page">
        <nav className="change-password-nav">
            <NavLink to="/admin"><LeftCircleFilled className="nav-icon" /></NavLink>
        </nav>
        <div className="change-password-content">
            <ChangePasswordForm  />
        </div>
    </div>
);
};
export default ChangePassword;
