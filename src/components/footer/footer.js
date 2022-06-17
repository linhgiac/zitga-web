import React from "react";
import { NavLink } from "react-router-dom";
import {FacebookFilled, LinkedinFilled, YoutubeFilled,BehanceOutlined} from '@ant-design/icons'

import "./footer.css";

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="footer-router">
                    <NavLink className="footer-elements" to="/about">
                        About Us
                    </NavLink>
                    <NavLink className="footer-elements" to="/careers">
                        Careers
                    </NavLink>
                    <NavLink className="footer-elements" to="/product">
                        Product
                    </NavLink>
                    <NavLink className="footer-elements" to="/news">
                        News
                    </NavLink>
                    <NavLink className="footer-elements" to="/contact">
                        Contact
                    </NavLink>
                </div>
                <div className="footer-space" >
            
                </div>
                <div className="footer-contact">
                    <NavLink className="footer-icons" to="/"><FacebookFilled /></NavLink>
                    <NavLink className="footer-icons" to="/"><LinkedinFilled /></NavLink>
                    <NavLink className="footer-icons" to="/"><YoutubeFilled /></NavLink>
                    <NavLink className="footer-icons" to="/"><BehanceOutlined /></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Footer;
