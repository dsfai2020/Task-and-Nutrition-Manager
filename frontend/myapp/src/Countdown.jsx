import {useState, setState, useEffect} from 'react';

// This is going to be wired into the AnalyticsUi.jsx page.

export default function Countdown (props) {

    const [timerStatus, setTimerStatus] = useState('off')

    function HandleTimerWhenOff(props) {
        // Just like python classes you can sort of make a class bound variable without actually using a class.  The function itself in React works as a sort of 'class' that becomes rendered.  It has its own properties that need to be drilled down.
        let intervalId = 'bay 1'

        function StartTimer (){
            // If timerStatus is off lets turn on the timer.
            setTimerStatus('on')
            console.log('Starting timer pressed')
            if (timerStatus==='on'){            
                intervalId = setInterval(()=>{
                // each interval run this 1000 miliseconds
                console.log('Counted')
                }, 1000);}
            }

        function ClearTimer (props){
            clearInterval(intervalId);
            console.log('clearing interval');
        }

        function MyCustomButton (props){
            return <button onClick={ClearTimer}>CUSTOM BUTTON{props.custom}</button>
        }

        function MyOtherCustomButton (props) {
            return <button onClick={StartTimer}>CUSTOM START</button>
        }

        return (
            <div>
                {/* All you got to do now is make it so that These conditionally render {() ? :} */}
                <MyCustomButton custom='true2'/>
                <MyOtherCustomButton />
            </div>
        )
    };

    return (
        <div class='Countdown-container'>
            {/* {timerStatus == 'off' 
                ? <button onClick={HandleTimerWhenOff}>Start</button>
                : <button onClick={HandleTimerWhenOff}>Stop</button>}  */}
            
            <HandleTimerWhenOff />
            <p>Time Remaining</p>
            
            <p>This is where the countdown UI will go</p>
        </div>
    )

};