import React from "react";
import {Routes, Route} from "react-router-dom"
import AboutUs from "../about/aboutUs";
import Careers from '../../pages/careers/careers';
import Contact from '../../pages/contact/contact';
import News from '../../pages/news/news';
import Product from '../../pages/product/product'
import Login from '../../pages/login/login'



const Home = () => {
    return (
        <div>
            <Routes/>
        </div>
    )
}
const Routes = () => {
    return (
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
                </Routes>
    )
}

export default Home;