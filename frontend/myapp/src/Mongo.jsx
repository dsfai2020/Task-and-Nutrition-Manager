import axios from "axios"
import { use } from "react"
import { useState } from "react"


export default function MongoTest () {

    const [UserName, setUserName] = useState('testing')
    const [WorkOutProfile, setWorkoutProfile] = useState('workout test')

    // backtick dollar sign to get valuestring
    function SignInToDB() {
        axios.post("https://fathomless-bayou-14966.herokuapp.com/signIn", {
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
        <div>
        <p>Test</p>
        </div>
    )
}

