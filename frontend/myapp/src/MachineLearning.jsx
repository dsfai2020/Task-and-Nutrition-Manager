import { useState } from 'react';
import './Navbar.css';

const MachineLearningPage=()=>{

    function mlDisplay(){
        return(
            <div>
            <h1>TEST</h1>
            <img src={process.env.PUBLIC_URL + './machineLearningImage.PNG'}/>
            </div>
            )
    };

    return (
        <div>
        {mlDisplay()}
        </div>)
};

export default MachineLearningPage;