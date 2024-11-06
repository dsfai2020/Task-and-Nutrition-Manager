import { useState } from 'react';
import './Navbar.css';


const Navbar=()=>{

    function customNavbar(){
        return(
            <div class="navbar">
            <button class="nav-item">Home</button>
            <button class="nav-item">About</button>
            <button class='nav-item'>Sign In</button>
            </div>
            )
    };

    return (
        <div>
        {customNavbar()}
        </div>)
};

export default Navbar;