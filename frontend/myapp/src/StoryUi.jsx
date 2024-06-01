import {useState, setState, useEffect} from 'react';
import './StoryUi.css' 


// handle, useEffects, states, redners, components parent and child.

// Eventually I might need to create a state and place StoryUiComponents inside of them [] as a baked in raw render.
export default function StoryUi(props) {
    // Very IMPORTANT.  Will use this to wire into an effect that will run a map iteration through this array.
    // Every iteration will then run 
    const [someState, setSomeState]=useState([1,2,3]);
    const [dynamicUi, setDynamicUi]=useState();


    function AddAnother (props) {
        return (
                <button onClick={handlePress}>Add another. Name is {props.name}</button>

        )
    };

    const handlePress = () => {
        console.log('great test')
        setDynamicUi([<StoryUiComponent name='Dynamic Ui Test Passed'/>])
    };
    
    // Next you need a useEffect that allows that stages a variable array with multiples and sets it.
        // For that you can use a map iteration and assign keys for accessibility. 

    useEffect (() => {
        console.log('You left off here')
         }, [dynamicUi]
    );

    return (
        

        <div>
            
            <StoryUiComponent someState={someState} name='testing props'/>
            <StoryUiComponent someState={someState} name='testing props2'/>
            {dynamicUi}
            <AddAnother name='dynamic'/>
        </div>
    )
};
  
    
// REUSABLE component.  Must be in caps like a Method. Wired into the Parent Ui.
function StoryUiComponent (props) {

    // place array of buttons here as a state within the list.
    // Remember that you can BAKE-IN states {} right into the return renders. 
    const [buttons, setButtons]=useState();



    const handlePress = (x) => {
        console.log('great test')
        // IMPORTANT
        // Okay so making two buttons... is happening because the state is changing.  What is the state?
        // Whatever goes into the [].  
        // It might be recommended to use map so that if you should need to store data each button already has a KEY assigned
        // **NEED** The button needs to automtically add another button to the array
        // setButtons([<button>hello</button>, <button>world</button>])
        setButtons([<button>SOME BUTTON {x}</button>])
    };

    function AddAnother () {
        return (
                <button onClick={handlePress}>Add another. Name is {props.name}</button>

        )
    };
    // consider making more ui sub-components related to this specific component (like buttons for the StoryUiComponent) here for reusability as well. 

    // THIS IS ONE UI COMPONENT
    return (
        <div class='storyUi-Container'>
            <textarea class='text-a' type='text' placeholder='Title'>{props.name}</textarea>
            <textarea class='text-b' type='text' placeholder='Describe the story'></textarea>

            <div class='label-Container'>
                <p>Estimate</p>
                <p>Value</p>
                <p>Size</p>
            </div>  

            {/* ESTIMATE SIZE AND VALUE */}
            <div class='metric-Container'>
                <input type='text' id='textInput' placeholder='0' class='metric-a'></input>
                <input type='text' id='textInput-2' placeholder='0' class='metric-b'></input>
                <input type='text' id='textInput-3' placeholder='0' class='metric-c'></input>
            </div>

        </div>
            )
};