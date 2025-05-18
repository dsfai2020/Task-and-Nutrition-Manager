import {useState, setState, useEffect} from 'react';
import './StagesUi.css'


export function PhaseInfo ({sharedData, setSharedData, hrCommit}) {

    const [activePhase, setActivePhase] = useState([{
        name: 'phase 1',
        icon: '🌰',
        status: 'inactive',
        description: '',
    }])

    function CircleComponent (props) {

        const HandleIconClick = (e) => {
            console.log(e.target.value)
            const selectedPhase = e.target.value

            setActivePhase(props.data)

            console.log(selectedPhase + ' is the active phase')
            console.log(props.data[0]['name'] + props.icon)

            // Original component data - at render
            setSharedData(props.data[0]['icon'])

        };

        return (
        <div>
            <button onClick={HandleIconClick} data={props.data} value={props.name} class='circles'>{props.icon}</button>
        </div>
        )
    };


//  Phase data structures
    const [phaseOne, setPhaseOne] = useState([{
        name: 'phase 1',
        icon: '🌰',
        status: 'inactive',
        description: '',
    }])

    const [phaseTwo, setPhaseTwo] = useState([{
        name: 'phase 2',
        icon: '🌱',
        status: 'inactive',
        description: '',

    }])

    const [phaseThree, setPhaseThree] = useState([{
        name: 'phase 3',
        icon: '🌳',
        status: 'inactive',
        description: '',
    }])

    
    // sets the value of the textarea to whatever the active phase description is.
    useEffect(()=> {
        const a = localStorage.getItem(activePhase[0]['name'])
        const b = JSON.parse(a)

        // Even though the initial active phase has no description, it'll still use that key to pull it out not from state - but from the local storage.
        if (b!==null) {
        setTextDisplay(b['description'])
        }

        if (b===null) {
            setTextDisplay('')
        }

    }, [activePhase])


    // 10:08 AM 5/15/25 you left off here! READY TO SAVE THIS DATA TO LOCAL
    function handleTextAreaChange (e) {

        const x = e.target.value; 

        setTextDisplay(x)
    }

    function handleKeyPress (e) {
        const x = e.target.value; 

        if (e.key === 'Enter') {

            if (activePhase[0]['name'] === 'phase 1') {

                const stageItem = {
                    name: 'phase 1',
                    icon: '🌰',
                    status: 'inactive',
                    description: x,
                }
    
                setPhaseOne([
                    stageItem
                ]);
    
                console.log(x)
                localStorage.setItem(activePhase[0]['name'], JSON.stringify(stageItem))
            };

            if (activePhase[0]['name'] === 'phase 2') {

                const stageItem2 = {            
                    name: 'phase 2',
                    icon: '🌱',
                    status: 'inactive',
                    description: x,}
    
                setPhaseTwo([
                    stageItem2
                ]);
                console.log(x)
                localStorage.setItem(activePhase[0]['name'], JSON.stringify(stageItem2))
            };

            if (activePhase[0]['name'] === 'phase 3') {
                const stageItem3 = {
                    name: 'phase 3',
                    icon: '🌳',
                    status: 'inactive',
                    description: x,
                }
                setPhaseThree([
                    stageItem3
                ]);
                console.log(x)
                localStorage.setItem(activePhase[0]['name'], JSON.stringify(stageItem3))
            };
        


        }
            console.log('mechanic coming soon...')
            
    }

    const [textDisplay, setTextDisplay] =  useState()

    return (
        <div class='phase-container'>
        <div class='GridTemp'>
            {/* When I click a button in the StageUi I want it to alter the display here within PhaseInfo - Using wrapper */}            
            <div class='item-c'>
                {/* Global var */}
                <p class='Test'>Hours committed: {hrCommit}</p>
                <textarea onChange={handleTextAreaChange} onKeyDown={handleKeyPress} placeholder={'Press enter to save your phase description.'} value={textDisplay} class='item-f' />
            </div>

            <div class='item-a'>
                <h3>Phase {activePhase[0]['icon']} Details</h3>
            </div>

            <div class='item-b'>
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
               <div class='StageUi-Container'>
                    <div>
                        <CircleComponent data={phaseOne} name='phase 1' icon='🌰'/>
                    </div>

                    <div>
                        <CircleComponent data={phaseTwo} name='phase 2' icon='🌱'/>
                    </div>

                    <div>
                        <CircleComponent data={phaseThree} name='phase 3' icon='🌳'/>
                    </div>
                </div>
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