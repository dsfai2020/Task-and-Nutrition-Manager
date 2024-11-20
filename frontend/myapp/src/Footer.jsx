import {useState, setState, useEffect} from 'react';
import './Footer.css'
export default function Footer () {

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div class='footer'>
            <p>Agile Planner Nov 2024</p>
            <p>This website is still in development.</p>
            <p>"Make each day count"</p>
            <button class='footer-button' onClick={ScrollToTop}>Return to the Top</button>
        </div>
    )
};