import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
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
    }

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
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: "65px",
                    }}
                    className="header-pages"
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
                        {
                            (!app.isLogged) ?
                                (<div className="header-btn">
                                    <Button type="primary" shape="round" href="/login" className="btn">
                                        Login
                                    </Button>
                                </div>) :
                                (<div style={{ color: 'white', background: 'red' }}>
                                    Hello, {app.user.name}
                                </div>)
                        }
                    </>
                    <div className="header-btn">
                        <LogoutOutlined className="btn-icon" onClick={handleLogout} />
                    </div>
                </div>
            </div>
            {/* <Routes>
                    <Route 
                        path='/' 
                        element={<Home/>}
                    />
                    <Route 
                        path='/about' 
                        element={<AboutUs/>}
                    />
                    <Route 
                        path='/careers' 
                        element={<Careers/>}
                    />
                    <Route 
                        path='/product' 
                        element={<Product/>}
                    />
                    <Route 
                        path='/news' 
                        element={<News/>}
                    />
                    <Route 
                        path='/contact' 
                        element={<Contact/>}
                    />
                    <Route 
                        path='/login' 
                        element={<Login/>}
                    />
                </Routes> */}
        </nav>
    );
};
export default Header;
