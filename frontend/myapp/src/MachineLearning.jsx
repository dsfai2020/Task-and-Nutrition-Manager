import { useState } from 'react';
import './MachineLearning.css'

const MachineLearningPage=()=>{

    function mlDisplay(){
        return(
            <div>
            <h1>Welcome to Ai Objects!</h1>
            <img class='MlHomepage' src={process.env.PUBLIC_URL + './machineLearningImage.PNG'}/>
            </div>
            )
    };

    return (
        <div>
        {mlDisplay()}
        </div>)
};

export default MachineLearningPage;