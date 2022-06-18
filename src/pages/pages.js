import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import AboutUs from "../pages/about/aboutUs";
import Careers from "../pages/careers/careers";
import Contact from "../pages/contact/contact";
import News from "../pages/news/news";
import Product from "../pages/product/product";
import Login from "../pages/login/login";
import SignUp from "../pages/signup/signup";
import "../pages/pages.module.css";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Post from "../components/post/post";
import Admin from "./admin/admin";
import { BackTop } from "antd";
import { UpCircleFilled } from "@ant-design/icons";


const PageWrapper = ({ app, Page }) => {
    return (
        <>
            <Header app={app} />
            <div className="page">
                <Page app={app} />
            </div>
            <BackTop>
                <div style={{ color: "#ff0e1f", fontSize: "50px" }}>
                    <UpCircleFilled />
                </div>
            </BackTop>
            <Footer />
        </>
    );
};

const Page = ({ app }) => {

    
    return (

        <Routes>
            <Route path="/" element={<PageWrapper app={app} Page={Home} />} />
            <Route
                path="/about"
                element={<PageWrapper app={app} Page={AboutUs} />}
            />
            <Route
                path="/careers"
                element={<PageWrapper app={app} Page={Careers} />}
            />
            <Route
                path="/careers/create-design"
                element={<PageWrapper app={app} Page={Careers} />}
            />
            <Route
                path="/careers/marketing"
                element={<PageWrapper app={app} Page={Careers} />}
            />
            <Route
                path="/careers/development"
                element={<PageWrapper app={app} Page={Careers} />}
            />
            <Route
                path="/careers/backoffice"
                element={<PageWrapper app={app} Page={Careers} />}
            />
            <Route
                path="/product"
                element={<PageWrapper app={app} Page={Product} />}
            />
            <Route
                path= {`/careers/careers-details-${app.postId}`}
                element={<PageWrapper app={app} Page={Post} />}
            />
            <Route
                path="/news/news-details-01"
                element={<PageWrapper app={app} Page={Post} />}
            />
            <Route
                path="/news"
                element={<PageWrapper app={app} Page={News} />}
            />
            <Route
                path="/contact"
                element={<PageWrapper app={app} Page={Contact} />}
            />
            <Route path="/admin" element={<Admin app={app} />} />

            <Route path="/admin/news" element={<Admin app={app} />} />
            <Route path="/admin/career" element={<Admin app={app} />} />

            <Route path="/login" element={<Login login={app.login} />} />
            <Route path="/signup" element={<SignUp signup={app.signup} />} />
        </Routes>
    );
};

export default Page;
