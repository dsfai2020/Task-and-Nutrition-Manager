import {useState, setState, useEffect} from 'react';
import './Schedule.css'


// -----------HIGH SIDE UI (PARENT)

export default function Schedule(props) {
    
    function ClearScheduleButton (props) {
        const [simpleStatus, setSimpleStatus] = useState('false')
        const handleClearSchedule = () => {
            if (simpleStatus == 'false') {
                setSimpleStatus('true');
                localStorage.setItem('clearTrigger', JSON.stringify(simpleStatus))
            }
            else if (simpleStatus == 'true') {
                setSimpleStatus('false');
                localStorage.setItem('clearTrigger', JSON.stringify(simpleStatus))
            }
        }

        return (
            <div>
                <button onClick={handleClearSchedule}>CLEAR SCHEDULE</button>
            </div>
        )
            };
    

    function GenerateSchedule (props) {
        return (
            <div>
            <p>SCHEDULE</p>
            <ScheduleUI morning='7am' />
            <ScheduleUI morning='8am' />
            <ScheduleUI morning='9am' />
            <ScheduleUI morning='10am' />
            <ScheduleUI morning='11am' />
            <ScheduleUI morning='12pm' />
            <ScheduleUI morning='1pm' />
            <ScheduleUI morning='2pm' />
            <ScheduleUI morning='3pm' />
            <ScheduleUI morning='4pm' />
            <ScheduleUI morning='5pm' />
            <ScheduleUI morning='6pm' />
            <ScheduleUI morning='7pm' />
            <ScheduleUI morning='8pm' />
            <ScheduleUI morning='9pm' />
            <ScheduleUI morning='10pm' />
            <ScheduleUI morning='11pm' />
            <ScheduleUI morning='12am' />
            <ScheduleUI morning='1am' />
            <ScheduleUI morning='2am' />
            <ScheduleUI morning='3am' />
            <ScheduleUI morning='4am' />
            <ScheduleUI morning='5am' />
            <ScheduleUI morning='6am' />
        </div>
        )
    };


    // YOU LEFT OFF HERE 10/25/24 you need to make a double trigger from true to false to refresh it.
    // Toggle that creates the conditional for what schedules return
    const handleEzClear = () => {
        if (x!='true')
            {setX('true'); 
            localStorage.setItem('clearTrigger', JSON.stringify('true'))
            }
        else if (x=='true') 
            {setX('false');  
            localStorage.setItem('clearTrigger', JSON.stringify('false'))
            }
    }
    // const a = localStorage.getItem('clearTrigger')
    const [x, setX] = useState('false')

    // upon init this is going to setup a local storage item for clearTrigger and I'll make it set to default as false.
    useEffect(()=> {
        localStorage.setItem('clearTrigger', JSON.stringify('false'))
    }, [])

    // we have two different schedules behing conditional shown based on the button state.  The arguments adjust accordingly.  clear changes from 'true' to 'false' so that the ScheduleUI can react to it with useEffects at the child component level - by making changes to the storage based on the props passed to it (in this case the clear arg).
    return (
        <div>
            <h1>Schedule</h1>
            {(x=='true')
            // ? <button onClick = {handleEzClear} >Green</button>
            ? <div>
                <ScheduleUI morning='7am' clear='true'/>
                <ScheduleUI morning='8am' clear='true'/>
                <ScheduleUI morning='9am' clear='true'/>
                <ScheduleUI morning='10am' clear='true'/>
                <ScheduleUI morning='11am' clear='true'/>
                <ScheduleUI morning='12pm' clear='true'/>
                <ScheduleUI morning='1pm' clear='true'/>
                <ScheduleUI morning='2pm' clear='true'/>
                <ScheduleUI morning='3pm' clear='true'/>
                <ScheduleUI morning='4pm' clear='true'/>
                <ScheduleUI morning='5pm' clear='true'/>
                <ScheduleUI morning='6pm' clear='true'/>
                <ScheduleUI morning='7pm' clear='true'/>
                <ScheduleUI morning='8pm' clear='true'/>
                <ScheduleUI morning='9pm' clear='true'/>
                <ScheduleUI morning='10pm' clear='true'/>
                <ScheduleUI morning='11pm' clear='true'/>
                <ScheduleUI morning='12am' clear='true'/>
                <ScheduleUI morning='1am' clear='true'/>
                <ScheduleUI morning='2am' clear='true'/>
                <ScheduleUI morning='3am' clear='true'/>
                <ScheduleUI morning='4am' clear='true'/>
                <ScheduleUI morning='5am' clear='true'/>
                <ScheduleUI morning='6am' clear='true'/>
            </div>
            : <div>
                <ScheduleUI morning='7am' clear='false'/>
                <ScheduleUI morning='8am' clear='false'/>
                <ScheduleUI morning='9am' clear='false'/>
                <ScheduleUI morning='10am' clear='false'/>
                <ScheduleUI morning='11am' clear='false'/>
                <ScheduleUI morning='12pm' clear='false'/>
                <ScheduleUI morning='1pm' clear='false'/>
                <ScheduleUI morning='2pm' clear='false'/>
                <ScheduleUI morning='3pm' clear='false'/>
                <ScheduleUI morning='4pm' clear='false'/>
                <ScheduleUI morning='5pm' clear='false'/>
                <ScheduleUI morning='6pm' clear='false'/>
                <ScheduleUI morning='7pm' clear='false'/>
                <ScheduleUI morning='8pm' clear='false'/>
                <ScheduleUI morning='9pm' clear='false'/>
                <ScheduleUI morning='10pm' clear='false'/>
                <ScheduleUI morning='11pm' clear='false'/>
                <ScheduleUI morning='12am' clear='false'/>
                <ScheduleUI morning='1am' clear='false'/>
                <ScheduleUI morning='2am' clear='false'/>
                <ScheduleUI morning='3am' clear='false'/>
                <ScheduleUI morning='4am' clear='false'/>
                <ScheduleUI morning='5am' clear='false'/>
                <ScheduleUI morning='old schedule' clear='false'/>
            </div>
            }
            {/* <ClearScheduleButton /> */}
            <button onClick={handleEzClear}>Clear The Schedule</button>
        </div>
    );

    // ------------LOW SIDE UI (child)

    function ScheduleUI (props) {

        const [scheduleEntry, setScheduleEntry] = useState();

        const [dataForUi, setDataForUi] = useState('schedule_'+props.morning);

        const [buttonStatus, setButtonStatus] = useState(false);

        const [dataForScheduleButton, setDataForButton] = useState('button_'+props.morning)

        // The key is remembering that the useEffect will trigger for all of the LowSide Ui (child) rendering on the HighSide Ui (parent)
        useEffect(()=>{
            const a = localStorage.getItem(dataForUi);
            const b = JSON.parse(a);
            
            // JSON.stringify(b)
            // populate the schedule by setting the entries at init.
            setScheduleEntry(b)

        }, []);


// IMPORTANT NOTE
        // Since the function uses ASYNC through react live updates will be lagging a step behind until functions are complete
        const handleEntryChange = (e) => {
            const newValue=e.target.value;

            setScheduleEntry(newValue)
            // So if you want to save the contents of setScheduleEntry.  Dont use scheduleEntry.
            // Directly access newValue instead, because it is currently Up TO Date.

            localStorage.setItem(dataForUi, JSON.stringify(newValue))
        };

        // YOU LEFT OFF HERE! 10/26/24 - it needs to clear the backend.  Thats all.  
        useEffect(()=> {
            if (props.clear!='false') 
                // the front UI is already addressed.  Use the effect to clear the DB.+
                {const a = localStorage.getItem(dataForUi)
                localStorage.setItem(dataForUi, JSON.stringify(''))
                }
      
        }, [props.clear])

        // if the local storage changes then I want every ui to react to it and trigger the entry above to return a null entry and save it.
        // i NEED it to hook onto the local storage and make a binding to state with it.  so that when it changes i can run an effect but i just cant seem to do it.
        // all i know is that you need to parse before you just start passing in data from local.



        // load button status at startup
        useEffect(()=>{
            if (localStorage.getItem(dataForScheduleButton)!=null)
            {const a = localStorage.getItem(dataForScheduleButton);
            const b = JSON.parse(a);
            setButtonStatus(b)}
        }, [])


        const saveButtonData = (trueOrFalse) => {
            const newValue=trueOrFalse
            console.log('this is'+ {trueOrFalse})
            localStorage.setItem(dataForScheduleButton, JSON.stringify(newValue))
        };

        const handleButtonPress = () => {
            console.log('test' + {buttonStatus})
            if (buttonStatus==false) {setButtonStatus(true); saveButtonData(true)}
            else if (buttonStatus==true) {setButtonStatus(false); saveButtonData(false)}
        };


        return (
            <div class='ScheduleUi'>
                {(buttonStatus==true)
                ? <button class='scheduleButtonOn' onClick={handleButtonPress}></button>
                : <button class='scheduleButtonOff' onClick={handleButtonPress}></button>}
                {/* time */}
                <p>{props.morning} </p>
                <textarea type='text' value={scheduleEntry} onChange={handleEntryChange}></textarea>
            </div>
        )
    };

    // WIRE IN SOME FUNCTIONALITY FOR THE BUTTON AND SEE IF YOU CAN ACCESS THE DATA WHILE RETAINING THE KEYS.  THEN DUMP ALL THE VALUES AND SAVE THAT TO THE DATABASE AGAIN.  MAYBE HAVE A REVERT BUTTON.  BUT NOT YET.  AFTER YOU MAKE CHICKEN COME BACK AND FINISH THIS.        
}





