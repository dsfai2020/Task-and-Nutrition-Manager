import { useState } from 'react';
import './Navbar.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// This is the page we are going to use for routing
import MachineLearningPage from './MachineLearning.jsx';

import { Outlet, Link } from "react-router-dom";

const Navbar=()=>{

    function customNavbar(){
        return(
            <div class="navbar">
            <div class="nav-item">HOME</div>
            <div class="nav-item">ABOUT</div>
            <div class="nav-item">FITNESS</div>
            </div>
            )
    };

    function siteLinks(){
        return(
            <BrowserRouter>
            <Routes>
            <Route path='Machine' element={<MachineLearningPage />} TESTIT/>
            </Routes>
            </BrowserRouter>
        )
    };

    return (
        <div>
        {customNavbar()}
        {siteLinks()}
        </div>)
};

export default Navbar;