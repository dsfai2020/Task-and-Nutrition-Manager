import {useState, setState} from 'react';
import './StoryUi.css' 

export default function StoryUi() {
    return (
        <div>
            <StoryUiComponent name='testing props'/>
        </div>
    )
};
  
    
// REUSABLE component.  Must be in caps like a Method.    
function StoryUiComponent (props) {
    // custom states
    const [someState, setsomeState] = useState(1)

    // consider making more ui sub-components related to this specific component (like buttons for the StoryUiComponent) here for reusability as well. 

    return (
        <div class='storyUi-Container'>
            <textarea class='text-a' type='text' placeholder='Name the story'></textarea>
            <textarea class='text-b' type='text' placeholder='Describe the story'></textarea>

            <div class='label-Container'>
                <p>Estimate</p>
                <p>Value</p>
                <p>Size</p>
            </div>  

            <div class='metric-Container'>
                <input type='text' id='textInput' placeholder='0' class='metric-a'></input>
                <input type='text' id='textInput-2' placeholder='0' class='metric-b'></input>
                <input type='text' id='textInput-3' placeholder='0' class='metric-c'></input>
            </div>


        </div>
            )
};