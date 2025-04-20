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

                </div>
                <div>
                    <CircleComponent name='Phase 1'/>

                </div>

                <div>
                    <CircleComponent name='Phase 2'/>
                </div>

                <div>
                    <CircleComponent name='Phase 3'/>
                </div>
                <div>

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
        <div class='GridTemp'>
            {/* When I click a button in the StageUi I want it to alter the display here within PhaseInfo - Using wrapper */}            
            <div class='item-c'>
                {/* Global var */}
                <p class='Test'>Focus on: </p>
            </div>
            <div class='item-a'>
                <h3>{sharedData} Details</h3>
            </div>   
            <div class='item-b'>
                <p class='Test'>HOURS COMMITTED -- {hrCommit}</p>
            </div>
            <div class='item-d'>
                <p class='Test'>Deliverables</p>
                <StageUi sharedData={sharedData} setSharedData={setSharedData}/>
            </div>
            
        </div>
    )
};


// Lifting UP data in this way just means to put it into a wrapper.
export function StageWrapper ({hrCommit}) {
    // read and write is accessible from both the StageUi and PhaseInfo.  Binding the state of the wrapper to props within the components.
    // You may need to enable ({sharedData, setSharedData}) as args via destructure of the props if needed.

    const [sharedData, setSharedData] = useState('Data is sharing')

    return (
        <div>
            {/* <StageUi sharedData = {sharedData} setSharedData = {setSharedData}/> */}
            <PhaseInfo sharedData = {sharedData} setSharedData = {setSharedData} hrCommit={hrCommit}/>
        </div>
    )
}