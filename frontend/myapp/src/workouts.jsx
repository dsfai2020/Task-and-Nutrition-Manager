import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';

//"https://shopsite.herokuapp.com/profile" Production backend link to Python
//"http://127.0.0.1:5000" Development backend link to Python

function Workout() {

   // new line start
  const [profileData, setProfileData] = useState(null)

  const [thirdPartyData, setThirdPartyData] = useState(null)

 function something(){
    let x=5
    x+=1
    return (x)
};

  return (
    <div className="Workouts">
        <p>WELCOME</p>
        <ul>
            <li>Test</li>
            <li>Test2</li>
            <li>Get a couple of the display elements working</li>
        </ul>
        <button onClick={something}>Click This</button>

    </div>
  );
}

export default Workout;


