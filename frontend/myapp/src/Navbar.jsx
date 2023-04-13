import { useState } from 'react';
import './Navbar.css';

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

    return (
        <div>
        {customNavbar()}
        </div>)
};

export default Navbar;