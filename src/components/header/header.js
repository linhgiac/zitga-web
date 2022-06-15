import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
// import AboutUs from '../../pages/about/aboutUs';
// import Careers from '../../pages/careers/careers';
// import Contact from '../../pages/contact/contact';
// import News from '../../pages/news/news';
// import Product from '../../pages/product/product'
// import Home from '../../pages/home/home';
// import Login from '../../pages/login/login'
import { Button } from "antd";
import "antd/dist/antd.css";
import { LogoutOutlined } from "@ant-design/icons";
const Header = ({ app }) => {
    const handleLogout = () => {
        if (app.isLogged) {
            app.logout();
        }
    };
    const [clicked, setClicked] = useState(false);
    const handleClicked = () => {
        setClicked(!clicked);
    };

    return (
        <nav>
            <div className="div-header">
                <div className="header-home">
                    <NavLink className="header-elements" to="/">
                        <img
                            itemProp="image"
                            className="edgtf-normal-logo"
                            src="http://zitga.com.vn/wp-content/uploads/2019/11/rsz_logo-zitga-chuan-022-mobile.png"
                            alt="logo"
                        />
                    </NavLink>
                </div>
                <div className="header-icon">
                    <a href="#" onClick={handleClicked}>
                        {!clicked ? (
                            <MenuOutlined
                                style={{ color: "white", fontSize: "30px" }}
                            />
                        ) : (
                            <CloseOutlined
                                style={{ color: "white", fontSize: "30px" }}
                            />
                        )}
                    </a>
                </div>
                <div
                    className={
                        clicked ? "header-pages active" : "header-pages"
                    }
                >
                    <NavLink className="header-elements" to="/about">
                        About Us
                    </NavLink>
                    <NavLink className="header-elements" to="/careers">
                        Careers
                    </NavLink>
                    <NavLink className="header-elements" to="/product">
                        Product
                    </NavLink>
                    <NavLink className="header-elements" to="/news">
                        News
                    </NavLink>
                    <NavLink className="header-elements" to="/contact">
                        Contact
                    </NavLink>
                    <>
                        {!app.isLogged ? (
                            <div className="header-btn">
                                <Button
                                    type="primary"
                                    shape="round"
                                    href="/login"
                                    className="btn"
                                >
                                    Login
                                </Button>
                            </div>
                        ) : (
                            <div className=" header-btn">
                                <Button
                                    type="primary"
                                    shape="round"
                                    href="/admin"
                                    className="btn"
                                >
                                    Hello, {app.user.name}
                                </Button>
                                <LogoutOutlined
                                    className="btn-icon"
                                    onClick={handleLogout}
                                />
                            </div>
                        )}
                    </>
                </div>
            </div>
        </nav>
    );
};
export default Header;
