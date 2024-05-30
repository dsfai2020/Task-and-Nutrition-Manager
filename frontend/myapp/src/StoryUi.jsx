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

    return (
        <div class='storyUi-Container'>
            <textarea class='text-a' type='text' placeholder='Name the story'></textarea>
            <textarea class='text-b' type='text' placeholder='Describe the story'></textarea>
            <div class='metric-Container'>
                <button class='metric-a'>size</button>
                <button class='metric-b'>value</button>
                <button class='metric-c'>label</button>
            </div>
        </div>
            )
};