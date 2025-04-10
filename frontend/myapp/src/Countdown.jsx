import {useState, setState, useEffect} from 'react';
import './Countdown.css'

// This is going to be wired into the AnalyticsUi.jsx page.

export default function Countdown (props) {

  
    // Originally I placed the intervalId in the HandleTimerWhenOff function.  But I brought it up to the top level here to make it more accessible without having it trigger a rerender.
    let intervalId = 'bay 1'


    // This is a cleaner way to do it instead of using functions.  You create 2 if statements that trigger whenever the timerStatus states change.  They will work cooperatively as on/off valves and override each other.  Since they are in the same effect, they'll be able to recognize the same intervalId a lot easier - preventing leaks.  It will operate with 2 switch buttons that will alter the state of timerStatus.


    const [timerStatus, setTimerStatus] = useState('off')
    const [count, setCount] = useState(1)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)

    function Timer () {
        
        useEffect(()=>{
            if (timerStatus==='on'){
                intervalId = setInterval(()=>{
                // each interval is 1000 miliseconds and runs all the code here.
                console.log('Counted '+ count);  
                setCount(count+1)
                }, 1000);
            };

            if (count>=60){
                setCount(1)
                setMinutes(minutes+1)
            }

            if (minutes>=60) {
                setHours(hours+1)
                setMinutes(0)}
            
            // This ensures that the interval is cleared as cleanup to prevent memory leaks.
            return () => {clearInterval(intervalId)}

        }, [timerStatus]);

        return (
            <div class='Timer-container'>
                <p>Time in Progress: </p>
                <p>Hours: {hours}</p>
                <p>Minutes: {minutes}</p>
                <p>Seconds: {count}</p>
            </div>
        )

    }

    


    function HandleTimerWhenOff(props) {
        // Just like python classes you can sort of make a class bound variable without actually using a class.  The function itself in React works as a sort of 'class' that becomes rendered.  It has its own properties that need to be drilled down.
        
        function StartTimer (){
            // If timerStatus is off lets turn on the timer.
            setTimerStatus('on')
            console.log('Starting timer pressed')
            }

        function StartButton (props) {
            return <button class='Button-flavor-theme' onClick={StartTimer}>{props.name}</button>
        }

        return (
            <div>
                {/* All you got to do now is make it so that These conditionally render {() ? :} */}
                <StartButton name='START'/>
            </div>
        )
    };

    function HandleTimerWhenOn () {

        function ClearTimer (props){
            console.log('clearing interval');
            setTimerStatus('off')
            // to pause the timer do not set the count back to zero.  Instead do nothing to it.
        }

        function StopButton (props){
            return <button class='Button-flavor-theme' onClick={ClearTimer}>{props.name}</button>
        }

        return (
            <div>
                <StopButton name='STOP'/>
            </div>
        )
    }

    function ResetButton () {

        function HandleReset(){
            setCount(0)
            setMinutes(0)
            setHours(0)
        };

        function ResetButton(props){
            return <button class='Button-flavor-theme' onClick={HandleReset}>{props.name}</button>
        }

        return (
            <div>
                <ResetButton name='RESET'/>
            </div>
        )
    };

    return (
        <div class='Countdown-container'>
            <div>
                {timerStatus == 'off' 
                // Starts the timer
                ? <HandleTimerWhenOff />
                // Stops the timer
                : <HandleTimerWhenOn />
                } 
                <ResetButton />
            </div>
            
            <div>
                <p>This is where the countdown UI will go</p>
                {/* NOTE.  The entire COUNTDOWN render is wired into display on the AnalyticsUi.jsx page and I wired in the hrCommit as a prop with the same name bound to the hrCommit STATE so that it is usable here as well.  In other words, why reinvent the wheel when it is already mechanically working there...I just needed the data.  Props helped with that. */}
                <p>Today's Hr Commit: {props.hrCommit} </p>
            </div>
            <Timer />
        </div>
    )

};

