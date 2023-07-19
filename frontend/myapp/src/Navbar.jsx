import { useState } from 'react';
import './Navbar.css';


const Navbar=()=>{

    function customNavbar(){
        return(
            <div class="navbar">
            <div class="nav-item">Home</div>
            <div class="nav-item">About</div>
            <div class="nav-item">Sign In</div>
            </div>
            )
    };

    return (
        <div>
        {customNavbar()}
        </div>)
};

export default Navbar;