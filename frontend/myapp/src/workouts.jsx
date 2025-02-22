import React, {useEffect, useState} from "react"
import ReactDOM from "react-dom"
import axios from "axios";

// This imports only what we need and not the entire lib.
// import Button from 'react-bootstrap/Button';

// This is a dialogue box made by bootstrap
// import Toast from 'react-bootstrap/Toast';


// This path for bootstrap is in the npm destination with is node-modules depending on where you installed it.  I put it in the app of front end.
import 'bootstrap/dist/css/bootstrap.min.css';

// Make sure the proper import for css is here.
import './Workouts.css';

import ProgressBar from 'react-bootstrap/ProgressBar';
import './fonts.css';


// State based OOP

// this is how to make a basic arrow function with many mansions in it.  The arrow function will be the main function we export.
// Always keep in mind that props, though not used here because they are in classes, are actually useful on the index render.  That's because you can then have pages like this (which are wired into the index) render customized content based on some URL sent data.
//  

// Buttons can use hook syntax without depending on componentDidMount by using    <button onClick={()=>setCount(count+1)}>Click</button>
// functions in the main arrow function are just written as function Something(){return render()}

// if you'd like to edit more than 1 direct value using hook syntax... you should either bunder them all into a collective state 1 for 1.  with multiple variables handling that 1 attribute.  OR bind them into a class and use the actual class syntax.  See your old programs for that.  Padres.

// At the very bottom of the NewPage render is where you'll see all the mini function renders wired into it.

const WorkOuts = () => {
    // Set up all your state variables here.  They need to be declared before any rendering happens that way they are ready to go.
    const [test, setTest]=useState([{core: 1, studio: 5}]);
    // updateTest(test[0].core='That updated!')
    
    // This is easy to handle because the state is just 1 variable linked to 1 value.  count - 0.  You use the setCount to edit it (though your not actually editing it itself but some stuff behind the scenes generates a clone of some sort)
    const [count, setCount]=useState(0)

    const [carbs, setCarbs]=useState(0)

    const [calorieLimit, setCalorieLimit]=useState(3000)


    function MotivationalQuotes() {
        
        return (
            <div class="motivationalQuotes">
            <h1 class="motivationalQuotes">Lifting weights is the easy part.</h1>
            </div>
            )
    };

   
    // function BootStrapToast() {
    //     return (
    //         <div>
    //         <Toast>
    //           <Toast.Header>
    //             <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
    //             <strong className="me-auto">Site-Admin: David</strong>
    //             <small>{count} mins ago</small>
    //           </Toast.Header>
    //           <Toast.Body>Today is a great day to train.  The page is still under construction but will improve over time!</Toast.Body>
    //         </Toast>
    //         </div>
    // )
    // };

    // backticks and dollarsign for f string like variables.
    function Example(){
        // const [message, setMessage]=useState('');
        const [weight, setWeight]=useState('');

        const [bodyFatPercent, setBodyFatPercent]=useState('');


        // GOLDEN.  The event variable is passsed into this function by default using the onChange tool command.
        const handleWeightChange = (event)=>{
            // Get input from event
            setWeight(event.target.value)
            
    };  
        // ABSTRACTION is difficult so I decided to use 1 variable in the function.
        // I also noticed that doing things at the render layer helps keep loops clear.  Sometimes triggers are limited if everything is abstracted into the functions.  I press a button and 1 effect happens.  I press the other and nothing because it doesn't have all the effects in it.  So keeping the effects at the RENDER layer where the page is helps.  I just need to wire in more JAVASCRIPT now.
        // Make sure to just keep the fields bound to the button.
        const handleChangeBodyFatPercent = (event)=>{
            // Get input from event.  THE FIELD has the ACTUAL value.  Not the formula.  To get the % of a number we divide the event from the input by 100. For example 10 Turns into .10  Be careful with rendering events or else you'll always be 1 snapshot behind on the renders.  USE event if connecting to variable changing within this function.  Otherwise you can reference it directly.  Weight works here but everything else would be off.
            setBodyFatPercent((event.target.value/100).toFixed(2))
            
            // we reference the body fat entry value.  That is then divided by 100 to create a percent.  THEN we multiple that by the weight to get the conversion of BodyFatPercentage to Lbs.  We cant just point to bodyFatPercent because its self rendering in a loop right now.  We need the most up to date snapshot via event.target.value.  You can then play your formulas off of that!
            // setBodyFatLbs(event.target.value/100*(weight))
            // setLeanBodyMass(weight-(event.target.value/100*(weight)))

    };  function ProgressBars() {
            // These are the caps that the bars will curve on.  That way they all don't look so filled.
            const caps = {
                "weightCap": 0,
                "bodyFatCap": 0,
                "bodyFatLbs": 0,
                "LeanBodyMass": 0,
            };
            // These are abstracted forumluas that are based on States that change.  The formula doesn't.  The state does.
            const formulaWeightTest = (weight/2);
            const formulaBodyFatPercentTest= (bodyFatPercent*100); 
            const formulaBodyFatLBSTest = (bodyFatPercent*weight).toFixed(2);
            const formulaLBMTest = (weight-(bodyFatPercent*weight)).toFixed(2);
            // const myStyle={
            //     test: {backgroundColor: "blue", width: "250px"}
            // }
            
            // Formulas can be adjusted for display purposes in the now tab.
            return (
                <div>
                  <div class="test">
                  <h1 class='body-metrics-title'>Body Metrics</h1>
                  </div>

                  <ProgressBar variant="success" now={formulaWeightTest} label={"Your Weight: " + weight + " lbs"} />
                  
                  {/*Nesting the Progress bars and giving them a key will make them stack into 1 bar*/}
                  {/* <ProgressBar> */}
                  <ProgressBar striped variant="info" key={1} now={bodyFatPercent*100} label={"Your Body Fat %: " + bodyFatPercent}/>
                  <ProgressBar variant="warning" key={2} animated now={formulaBodyFatLBSTest} label={"Your Body Fat in pounds: " + (bodyFatPercent*weight).toFixed(2) + " lbs"}/>
                  <ProgressBar variant="danger" key={3} animated now={formulaLBMTest} label={"Your Lean Body Mass in pounds: " + (weight-(bodyFatPercent*weight)).toFixed(2)}/>
                  {/* </ProgressBar> */}
                </div>);
}
        return(
            <div>
            {/* <br></br> */}
            {/* <br></br> */}
            {ProgressBars()}

            <p><strong>WEIGHT: </strong>{weight} lbs</p>
            {/*Lets multiply bodyFatPercent by 100 so that it displays as a whole number*/}
            <p><strong>BODY FAT PERCENTAGE: </strong>{bodyFatPercent+'%'}</p>
            <p><strong>BODY FAT CARRIED IN LBS: </strong>{(bodyFatPercent*weight).toFixed(2)} lbs</p>
            <p><strong>LEAN BODY MASS: </strong>{(weight-(bodyFatPercent*weight)).toFixed(2)} lbs</p>

            {/*Prepend a string with +before it to make it an INT*/}
            {/*.toFixed is a float and you put the places in the parenthesis*/}
            {/*More lean body mass, lower body fat %, means more calories to burn*/}
            <p><strong>RESTING METABOLIC RATE:</strong> {((weight-(bodyFatPercent*weight))/2.205*30.4).toFixed(0)} Calories</p>
            
            <button>Weight/BodyFat</button>

            <br></br>

            {/*I want the value in the input to update the value of the state.*/}
            <input
            id='weight'
            type="text"
            name='weight' 
            placeholder="Enter Weight"
            onChange={handleWeightChange}
            />
            
            <br></br>

            <input
            id='bodyFat'
            type="text"
            name='bodyFat' 
            placeholder="Enter Body Fat %"
            onChange={handleChangeBodyFatPercent}
            />

            <p>Your Resting Metabolic Rate(RMR) determines how many calories you need to consume in order <strong>stay</strong> at the same exact weight.</p>
            <p>The RMR is calculated using (your lean mass divided by 2.205 then multiplied by 30.4)</p>
            </div>)

    };   



    // GOOD EXAMPLE
    // You can reference this in the NewPage render using Sample() but make sure that the main render has a div.
    function SampleFunctionRender(){
        return(
            <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click</button>
            {/*<p>This is the core --{test[0].core}</p>*/}

            {/*bug w dict n lists below. possible use class for multistate logic n hooks for iso state logic*/}
            {/*<button onClick={()=>setTest([0])(test[0].core+1)}>Click</button>*/}
            </div>)
    };


    function MyTestButton(){
        return(
            <div>
            <p>You have this many Calories Remaining: <strong>{calorieLimit-carbs*4}</strong></p>
            <p>There are this many calories in your carbs -- {carbs*4}</p>
            <p>You ate this many carbs -- {carbs}</p>
            {/*Im stuck here trying to make multiple states render but I fixed it by wiring it in through a rendering formula like excel witout having to actually adjust the state.  Since all I wanted was a display change.*/}
            <button onClick={()=>setCarbs(carbs+1)}>Add 1 G of Carb</button>
            <button onClick={()=>setCarbs(carbs+5)}>Add 5 G of Carb</button>
            <button onClick={()=>setCarbs(carbs+10)}>Add 10 G of Carb</button>
            <button onClick={()=>setCarbs(carbs+20)}>Add 20 G of Carb</button>
            <br></br>
            <button onClick={()=>setCarbs(0)}>Click to Reset Carbs</button>
            </div>
            )
    };

    function DeveloperPlan(){
        return(
            <div>
            <ul><strong>FRONT END</strong>
                <li>Maps</li>
                <li>Classes integrated</li>
                <li>Front/Backend development rotation</li>
                <li>Axios Hook integration</li>
                <li>Flexbox and Grid</li>
            </ul>
            <ul><strong>BACKEND</strong>
                <li>Flask Cors</li>
                <li>Flask Routes</li>
                <li>Production</li>
                <li>Axios Hook integration</li>
                <li>Database Integration</li>
                <li>Save Data</li>

            </ul>  
            </div>
            )

    };
            

    function ConditionalRenderExample(){
        return (
        <div style={null}>
            {/*This is the equivalent of an if statement.  (condition) followed by ? and :*/}
            {(count>=5)
                ?<h1>You've Successfully counted at least 5 Times!</h1>
                :<h1>You have counted Less than 5 Times</h1>
            }
        </div>)
    };

    function RecentlyReviewed(){
        return (
            <div>
            <ul><strong>SCHEDULE</strong>
                <li>Monday -- Backend</li>
                <li>Tuesday -- Backend</li>
                <li>Wednesday -- Frontend</li>
                <li>Thursday -- Frontend</li>
                <li>Friday -- Frontend</li>
                <li>Saturday -- Deployment - Flask Cors - Heroku - AWS - Machine Learning</li>
                <li>Sunday -- Reflect</li>
            </ul>

            <ul><strong>TALENT TREE</strong>
            <li>TIMES DEPLOYED: {null}</li>
            <li>BACKEND UPDATES: {null}</li>
            <li>FRONTEND UPDATES: {null}</li>
            </ul>
            </div>
            )
    };

    // CSS imported in from Workouts.css
    function WorkoutRoutine(){
        return(
            <div>
            <h1 class='muscle-groups-title'>Muscle Groups</h1>
            <div class="grid-workout-container">
            <button class='grid-workout-item'>Chest</button>
            <button class="grid-workout-item">Back</button>
            <button class="grid-workout-item">Lower Back</button>
            <button class="grid-workout-item">Middle Back</button>
            <button class="grid-workout-item">Quads</button>
            <button class="grid-workout-item">Hammy</button>
            <button class="grid-workout-item">Shoulder</button>
            <button class="grid-workout-item">Biceps</button>
            <button class="grid-workout-item">Inner Bicep</button>
            <button class="grid-workout-item">Outer Bicep</button>
            <button class="grid-workout-item">Triceps</button>
            <button class="grid-workout-item">Forearm</button>
            <button class="grid-workout-item">Calves</button>
            <button class="grid-workout-item">Core</button>
            <button class="grid-workout-item">Upper Back</button>
            <button class="grid-workout-item">Rest</button>
            </div>
            </div>)

    };

    // The NewPages main render is this section below but we can plug in many renders from functions the same way that the index file works.  
    // If your wiring in functions make sure to use divs before adding them in.  One for the main render div (just the top and bottom) and they can also have their own divs inside their functions as well.
    return (
        <div>
        {/* {MotivationalQuotes()} */}

        {/*{BootStrapToast()}*/}
        {Example()}
        {WorkoutRoutine()}
        {/*Don't forget the ()*/}
        {/* {SampleFunctionRender()} */}
        {MyTestButton()}
        {/* {DeveloperPlan()} */}
        {/* {ConditionalRenderExample()} */}
        {/* {RecentlyReviewed()} */}
        </div>
        )
}

export default WorkOuts;

// React pages have hooks.  Simplified class objects.  Multiple functions wired into a render with thier own private rendering parts.  And tons of state based objects that need to be properly updated with the second variable.  Some of the functions actually work like a type of lambda code with no name involved.


// I can make a state react to a trigger.  But i cant seem to update a variable if i nested into a state variable as a dictionary.  It just won't let me do it for some reason.  When using a raw 1 to 1 ratio like count without any nested dictionaries it works.  But the second I try to access var[0].whatever it breaks.

// maybe bring classes into the page as a render??????????
// build lots of tiny state hooks.

// Make a function.  Give it a render and functionality.  Wire it into the main render.  Then wire it into the index render as a whole unit.