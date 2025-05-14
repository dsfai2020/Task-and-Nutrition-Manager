import {useState, setState, useEffect} from 'react';
import './StagesUi.css'


// Parent
export default function StageUi ({ sharedData, setSharedData }) {

    const [activePhase, setActivePhase] = useState('none')

    function HandleClick (e) {
        console.log(e.target.value)
        const x = e.target.value
        setActivePhase(x)

        //SharedData is from the Wrapper
        setSharedData(x)
        // console.log(x)
    };

    function CircleComponent (props) {
        return (
        <div>
            {/* Triggering off of the value */}
            <button onClick={HandleClick} value={props.name} class='circles'>{props.name}</button>
        </div>
        )
    };

    // This is rendered at the bottom of the StageUi
    function StageDetails (props) {
        return (
            <div>
                {
                (activePhase==='Phase 1') 
                    ? <p>{props.phase}</p>
                    : null}
                {(activePhase==='Phase 2')
                    ? <p>{props.phase}</p>
                    : null}
                {(activePhase==='Phase 3')
                    ? <p>{props.phase}</p>
                    : null}    
            </div>
        )
    };

    return (

        <div class='StageUi-Container'>
 
                <div>
                    <CircleComponent name='🌰'/>

                </div>

                <div>
                    <CircleComponent name='🌱'/>
                </div>

                <div>
                    <CircleComponent name='🌳'/>
                </div>
 
        </div>
    )
}


function callTest (x) {
    return (
        <div>
            <p>{x}</p>
        </div>
    )
};

//Parent
export function PhaseInfo ({sharedData, setSharedData, hrCommit}) {

    return (
        <div class='phase-container'>
        <div class='GridTemp'>
            {/* When I click a button in the StageUi I want it to alter the display here within PhaseInfo - Using wrapper */}            
            <div class='item-c'>
                {/* Global var */}
                <p class='Test'>Hours committed: {hrCommit}</p>
                <textarea class='item-f'/>
            </div>

            <div class='item-a'>
                <h3>Phase {sharedData} Details</h3>
            </div>

            <div class='item-b'>
                {/* <p class='Test'>HOURS COMMITTED -- {hrCommit}</p> */}
                <p class='Test'>Timer Trigger Points</p>
                <ul>
                    <li>🌰</li>
                    <li>🌱</li>
                    <li>🌳</li>
                </ul>
            </div>

            <div class='item-d'>
                <p class='Test'>Up Next</p>
            </div>

            <div class='item-e' >
                <StageUi sharedData={sharedData} setSharedData={setSharedData}/>
            </div>

        </div>
        </div>
    )
};


// Lifting UP data in this way just means to put it into a wrapper.
export function StageWrapper ({hrCommit}) {
    // read and write is accessible from both the StageUi and PhaseInfo.  Binding the state of the wrapper to props within the components.
    // You may need to enable ({sharedData, setSharedData}) as args via destructure of the props if needed.

    const [sharedData, setSharedData] = useState()

    return (
        <PhaseInfo sharedData = {sharedData} setSharedData = {setSharedData} hrCommit={hrCommit}/>
    )
}