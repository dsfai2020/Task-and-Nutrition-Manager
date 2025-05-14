
import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import axios from "axios";

import './Bars.css'

// Not implemented yet -- Customized Bars and Ovals that fill with CSS.

import 'bootstrap/dist/css/bootstrap.min.css';


const Bars = () => {

    function Test(){
        return(
            <div>
            <h1>Greetings</h1>
            <ul>
                <li>Custom Links</li>
                <li>Mapping</li>
                <li>Custom Shapes</li>
                <li>Custom CSS fills</li>
                <li>Integrating State based CSS</li>
            </ul>
            <h1>What does this unlock: It unlocks EXP bars that wrap around images like badges.  Circular exp bars. </h1>
            <p>It does this by using state based css, mapping and shape configuration through padding, margin and grid + flex box manipulation</p>
            <p>Mastering this will mean that you can technically create any kind of UI design that you can fathom</p>
            <p>Which makes for a more custom user experience and an entirely new world of possibilities</p>
            </div>
            )
    };

    return (
        <div>
        {Test()}
        </div>
    )
};

export default Bars;