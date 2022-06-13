import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "../pages/home/home"
import AboutUs from "../pages/about/aboutUs";
import Careers from '../pages/careers/careers';
import Contact from '../pages/contact/contact';
import News from '../pages/news/news';
import Product from '../pages/product/product';
import Login from '../pages/login/login';
import SignUp from '../pages/signup/signup';
import '../pages/pages.module.css'
import Header from '../components/header/header';
import Footer from "../components/footer/footer";


const PageWrapper = ({ app, Page }) => {
    return (
        <>
            <Header app={app} />
            <div className="page">
                <Page app={app} />
            </div>
            <Footer />
        </>
    );
}

const Page = ({ app }) => {
    return (
        <Routes>
            <Route
                path='/'
                element={<PageWrapper app={app} Page={Home} />}
            />
            <Route
                path='/about'
                element={<PageWrapper app={app} Page={AboutUs} />}
            />
            <Route
                path='/careers'
                element={<PageWrapper app={app} Page={Careers} />}
            />
            <Route
                path='/product'
                element={<PageWrapper app={app} Page={Product} />}
            />
            <Route
                path='/news'
                element={<PageWrapper app={app} Page={News} />}
            />
            <Route
                path='/contact'
                element={<PageWrapper app={app} Page={Contact} />}
            />
            <Route
                path='/login'
                element={<Login login={app.login} />}
            />
            <Route
                path='/signup'
                element={<SignUp signup={app.signup} />}
            />
        </Routes>
    )
}

export default Page;