import {useState, setState, useEffect} from 'react';

// This is going to be wired into the AnalyticsUi.jsx page.

export default function Countdown (props) {

  
    // Originally I placed the intervalId in the HandleTimerWhenOff function.  But I brought it up to the top level here to make it more accessible without having it trigger a rerender.
    let intervalId = 'bay 1'


    // This is a cleaner way to do it instead of using functions.  You create 2 if statements that trigger whenever the timerStatus states change.  They will work cooperatively as on/off valves and override each other.  Since they are in the same effect, they'll be able to recognize the same intervalId a lot easier - preventing leaks.  It will operate with 2 switch buttons that will alter the state of timerStatus.


    const [timerStatus, setTimerStatus] = useState('off')
    const [count, setCount] = useState(1)

    function MyHook () {
        
        useEffect(()=>{
            if (timerStatus==='on'){
                intervalId = setInterval(()=>{
                // each interval is 1000 miliseconds and runs all the code here.
                console.log('Counted '+ count);  
                setCount(count+1)
                }, 1000);
            };

            return () => {clearInterval(intervalId)}

        }, [timerStatus]);

        return (
            <div>
                <p>Time in Progress: {count}</p>
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

        function MyOtherCustomButton (props) {
            return <button onClick={StartTimer}>{props.name}</button>
        }

        return (
            <div>
                {/* All you got to do now is make it so that These conditionally render {() ? :} */}
                <MyOtherCustomButton name='START'/>
            </div>
        )
    };

    function HandleTimerWhenOn () {

        function ClearTimer (props){
            console.log('clearing interval');
            setTimerStatus('off')
            // to pause the timer do not set the count back to zero.  Instead do nothing to it.
        }

        function MyCustomButton (props){
            return <button onClick={ClearTimer}>{props.name}</button>
        }

        return (
            <div>
                <MyCustomButton name='STOP'/>
            </div>
        )
    }

    return (
        <div class='Countdown-container'>
            {timerStatus == 'off' 
                // Starts the timer
                ? <HandleTimerWhenOff />
                // Stops the timer
                : <HandleTimerWhenOn />
                } 
            
            <p>This is where the countdown UI will go</p>
            <MyHook />
        </div>
    )

};