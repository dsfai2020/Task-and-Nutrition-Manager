import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

//"https://shopsite.herokuapp.com/profile" Production backend link to Python
//"http://127.0.0.1:5000" Development backend link to Python

function App() {

   // new line start
  const [profileData, setProfileData] = useState(null)

  const [thirdPartyData, setThirdPartyData] = useState(null)

  function getData() {
    axios({
      method: "GET",
      url:"https://shopsite.herokuapp.com/profile",
    })
    .then((response) => {
      const res =response.data
      setProfileData(({
        profile_name: res.name,
        about_me: res.about}))
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    //end of new line

    function getThirdPartyData() {
      axios({
        method: "GET",
        url:"/start_application",
      })
      .then((response) => {
        const res =response.data
        setThirdPartyData(({
          third_party_status: res.status,
          third_party_events: res.events}))
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* new line start*/}
        <p>Sign in (coming soon): </p><Button onClick={getData}>Sign In</Button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
         {/* end of new line */}

      {/*  <div class="third_party_app">
        <p>Just testing the display</p>
        <Button onClick={getThirdPartyData}>Get Third Party Data</Button>
        {thirdPartyData && <div>
              <p>Third Party Status: {thirdPartyData.third_party_status}</p>
              <p>Third Party Events: {thirdPartyData.third_party_events}</p>
              </div>
        }
         </div>*/}

      </header>
    </div>
  );
}

export default App;


