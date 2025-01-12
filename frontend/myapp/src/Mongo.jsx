import axios from "axios"
import { use } from "react"
import { useState } from "react"
import './Mongo.css'


export default function MongoTest () {

    const [UserName, setUserName] = useState('testing')
    const [WorkOutProfile, setWorkoutProfile] = useState('workout test')
    const [data, setData] = useState('blank')

    // backtick dollar sign to get valuestring
    function GetArticle() {

        // Making a GET request to fetch JSON data
        // axios.get('http://127.0.0.1:5000/axiostest')
        axios.get('http://127.0.0.1:5000/mongo_data_validation')
        .then(response => {
            setData(response.data)
            console.log('Received data:', response.data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });}


        // The URL endpoint - Make sure that Flask Cors is enabled - this is a request to port 5000 which is the Flask Backend.
        
    return (
        <div class='mongo'>
        <button onClick={GetArticle}>Test</button>
        <h1>Response: {data.test}</h1>
        </div>
    )
}