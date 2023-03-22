import { useState } from 'react'
import axios from "axios";
import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

//"https://shopsite.herokuapp.com/profile" Production backend link to Python flask server
//"http://127.0.0.1:5000" Development backend link to Python flask server

// Progress bar
import ProgressBar from 'react-bootstrap/ProgressBar';


function App() {

   // new line start
  const [profileData, setProfileData] = useState(null)

  const [thirdPartyData, setThirdPartyData] = useState(null)

  const [workoutProfile, setWorkoutProfile] = useState(null)


  function getData() {
    axios({
      method: "GET",
      url: "https://fathomless-bayou-14966.herokuapp.com/",
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
      })};


    // This is how to do an Axios POST.  Notice the route first, then the dictionary body.  Also pay attention to the routes during testing.  You may have to swap it out for your local routes.
    function signIn() {
      axios.post('https://fathomless-bayou-14966.herokuapp.com/dbPost', {
        name: 'David'
      })
      .then((response) => {
        const res =response.data
        setWorkoutProfile(({
          workout_profile_name: res.name,
          workout_profile_exp: res.exp,
          workout_profile_lvl: res.lvl}))
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })};

    // BOOTSTRAP
    function WithLabelExample() {
    return <ProgressBar now={workoutProfile.workout_profile_exp} label={`${workoutProfile.workout_profile_exp} Exp`} />;
    };

    const [UserName, setUserName]=useState(null)
    const [UserPassword, setUserPassword]=useState(null)

    const HandleUserNameChange=(event)=>{
      setUserName(event.target.value)
    };

    const HandlePasswordChange=(event)=>{
      setUserPassword(event.target.value)
    };

// backtick dollar sign to get valuestring
    function SignInToDB() {
      axios.post('https://fathomless-bayou-14966.herokuapp.com/signIn', {
        name: `${UserName}`
      })
      .then((response) => {
        const res =response.data
        setWorkoutProfile(({
          workout_profile_name: res.name,
          workout_profile_exp: res.exp,
          workout_profile_lvl: res.lvl}))
      }).catch((error) => {
        if (error.response) {
          console.log(error.response)
          console.log(error.response.status)
          console.log(error.response.headers)
        }
      })};

  return (
      <div className="App">
        <header className="App-header">
      
        <h1>Welcome</h1>
        {UserName &&<div>
        <h1>Welcome {UserName}!</h1>
        </div>}

        <img src={logo} className="App-logo" alt="logo" />

        {/* new line start*/}
        <input
          id='username'
          type="text"
          name='username' 
          placeholder="USERNAME"
          onChange={HandleUserNameChange}
        />

        <input
          id='password'
          type="password"
          name='password' 
          placeholder="PASSWORD"
          onChange={HandlePasswordChange}
        />
        
        <Button onClick={SignInToDB}>Submit</Button>
        {workoutProfile && <div>
              <p>Name: {workoutProfile.workout_profile_name}</p>
              <p>Exp: {workoutProfile.workout_profile_exp}</p>
              <p>Lvl: {workoutProfile.workout_profile_lvl}</p>
              {WithLabelExample()}
              <br></br>
            </div>
        }

      {/*  <p>Sign in (coming soon): </p><Button onClick={getData}>Sign In</Button>
        {profileData && <div>
              <p>Profile name: {profileData.profile_name}</p>
              <p>About me: {profileData.about_me}</p>
            </div>
        }*/}
         {/* end of new line */}

        {/*CONDITIONAL RENDERING.   IF workoutProfile has a value then it'll render the div.  workoutProfile is set to NULL until it actually gets a value.*/}
        {/*<p>Sign in Live: </p><Button onClick={signIn}>Sign in Live</Button>*/}
       

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


