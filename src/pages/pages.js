import React from "react";
import {Routes, Route} from "react-router-dom"
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




const Page = () => {
    return (
    <div className="page">
    
                <Routes>
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
                        <Route
                            path='/signup'
                            element={<SignUp />}
                        />
                    </Routes>

    </div>
        
    )
}

export default Page;