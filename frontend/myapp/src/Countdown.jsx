import {useState, setState, useEffect} from 'react';

// This is going to be wired into the AnalyticsUi.jsx page.

export default function Countdown (props) {

    const [timerStatus, setTimerStatus] = useState('off')

    
    // Originally I placed the intervalId in the HandleTimerWhenOff function.  But I brought it up to the top level here to make it more accessible without having it trigger a rerender.
    let intervalId = 'bay 1'
    

    // This is a cleaner way to do it instead of using functions.  You create 2 if statements that trigger whenever the timerStatus states change.  They will work cooperatively as on/off valves and override each other.  Since they are in the same effect, they'll be able to recognize the same intervalId a lot easier - preventing leaks.  It will operate with 2 switch buttons that will alter the state of timerStatus.
    useEffect(()=>{
        if (timerStatus==='on'){ 
            intervalId = setInterval(()=>{
            // each interval run this 1000 miliseconds
            console.log('Counted')
            }, 1000);
            };
        if (timerStatus==='off'){
            clearInterval(intervalId)
            console.log('clearing in effect')
        }        
    }, [timerStatus])

    function HandleTimerWhenOff(props) {
        // Just like python classes you can sort of make a class bound variable without actually using a class.  The function itself in React works as a sort of 'class' that becomes rendered.  It has its own properties that need to be drilled down.
        
        function StartTimer (){
            // If timerStatus is off lets turn on the timer.
            setTimerStatus('on')
            console.log('Starting timer pressed')
            }

        function MyOtherCustomButton (props) {
            return <button onClick={StartTimer}>CUSTOM START</button>
        }

        return (
            <div>
                {/* All you got to do now is make it so that These conditionally render {() ? :} */}
                <MyOtherCustomButton />
            </div>
        )
    };

    function HandleTimerWhenOn () {

        function ClearTimer (props){
            clearInterval(intervalId);
            console.log('clearing interval');
            setTimerStatus('off')
        }

        function MyCustomButton (props){
            return <button onClick={ClearTimer}>CUSTOM BUTTON{props.custom}</button>
        }

        return (
            <div>
                <MyCustomButton custom='true2'/>
            </div>
        )
    }

    return (
        <div class='Countdown-container'>
            {/* {timerStatus == 'off' 
                ? <button onClick={HandleTimerWhenOff}>Start</button>
                : <button onClick={HandleTimerWhenOff}>Stop</button>}  */}
            
            <HandleTimerWhenOff />

            {/* Start button */}
            <HandleTimerWhenOn />
            <p>Time Remaining</p>
            
            <p>This is where the countdown UI will go</p>
        </div>
    )

};