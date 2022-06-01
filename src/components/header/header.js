import React from 'react';
import {NavLink, Routes, Route} from 'react-router-dom';
import './header.css'
import AboutUs from '../../pages/about/aboutUs';
import Careers from '../../pages/careers/careers';
import Contact from '../../pages/contact/contact';
import News from '../../pages/news/news';
import Product from '../../pages/product/product'
import Home from '../../pages/home/home';
const Header = () => {
    return (
            
           <nav> 
                <div className="div-header">
                    <div className = "header-home">
                        <NavLink to="/">Home</NavLink>
                    </div>
                    <div style = {{display: 'flex', flexDirection: 'row', alignItems: 'center'}} className = "header-pages">
                        <NavLink className = "header-elements" to="/about">About Us</NavLink>
                        <NavLink className = "header-elements" to="/careers">Careers</NavLink>
                        <NavLink className = "header-elements" to="/product">Product</NavLink>
                        <NavLink className = "header-elements" to="/news">News</NavLink>
                        <NavLink className = "header-elements" to="/contact">Contact</NavLink>
                    </div>
                </div>
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
                </Routes>
            </nav>

            
    );
}
export default Header;