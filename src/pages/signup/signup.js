import React from "react";
import SignUpForm from "./components/signupForm";
import { NavLink } from "react-router-dom";
import {LeftCircleFilled} from '@ant-design/icons'
import "./signup.css";

const SignUp = () => {
    const signup = details => {
        console.log(details);
        return "None";
    };
    return (
        <div className = 'signup-page'>
            <nav>
                <NavLink to={"/login"}><LeftCircleFilled className ='nav-icon'/></NavLink>
            </nav>
            <div className="signup-content">
                <SignUpForm signup={signup} />
            </div>
            
        </div>
    );
};

export default SignUp;
