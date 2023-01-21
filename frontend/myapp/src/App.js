import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';

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
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        {/* new line start*/}
        <p>To get your profile details: </p><button onClick={getData}>Click me</button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }
         {/* end of new line */}

        <div class="third_party_app">
        <p>Just testing the display</p>
        <button onClick={getThirdPartyData}>Get Third Party Data</button>
        {thirdPartyData && <div>
              <p>Third Party Status: {thirdPartyData.third_party_status}</p>
              <p>Third Party Events: {thirdPartyData.third_party_events}</p>
              </div>
        }
         </div>

      </header>
    </div>
  );
}

export default App;


