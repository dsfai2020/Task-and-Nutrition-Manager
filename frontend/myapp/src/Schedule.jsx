import {useState, setState, useEffect} from 'react';
import './Schedule.css'
import './fonts.css'


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
            <ScheduleUI morning='12am' />
            <ScheduleUI morning='1am' />
            <ScheduleUI morning='2am' />
            <ScheduleUI morning='3am' />
            <ScheduleUI morning='4am' />
            <ScheduleUI morning='5am' />
            <ScheduleUI morning='6am' />
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

    const today = new Date();
    const dayOfWeek = today.toLocaleDateString('en-us', {weekday: 'long'});

    // we have two different schedules behing conditional shown based on the button state.  The arguments adjust accordingly.  clear changes from 'true' to 'false' so that the ScheduleUI can react to it with useEffects at the child component level - by making changes to the storage based on the props passed to it (in this case the clear arg).
    return (
        <div>
            <div class='schedule-title-container'>
                <h1 class='schedule-title'>{dayOfWeek}</h1>
                <h5 class='schedule-quote'>You vs. You</h5>
            </div>
{/* 
            <div>
                <button>New Clear Button</button>
            </div> */}

            {(x=='true')
            // ? <button onClick = {handleEzClear} >Green</button>
            ? <div class='Full-ScheduleUi-Container'>
                <div>
                    <ScheduleUI morning='5am' clear='true'/>
                    <ScheduleUI morning='6am' clear='true'/>
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
                </div>
                <div>
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
                </div>
            </div>
            : <div class='Full-ScheduleUi-Container'>
                <div>
                    <ScheduleUI morning='5am' clear='false'/>
                    <ScheduleUI morning='6am' clear='false'/>
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
                </div>
                <div>
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
                </div>
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

        const [buttonStatus, setButtonStatus] = useState('false');

        const [dataForScheduleButton, setDataForButton] = useState('button_'+props.morning);

        const [entryStatus, setEntryStatus] = useState(false);

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

            if (newValue!='' || newValue!=null) {setEntryStatus(true)}
            else {setEntryStatus(false)}

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
            localStorage.setItem(dataForScheduleButton, JSON.stringify(newValue))
        };

        const handleButtonPress = () => {
            if (buttonStatus=='false') {setButtonStatus('yellow'); saveButtonData('yellow');}
            else if (buttonStatus=='yellow') {setButtonStatus('true'); saveButtonData('true')}
            else if (buttonStatus=='true') {setButtonStatus('false'); saveButtonData('false')}
        };

        const ScheduleButton = () => {
            if (buttonStatus=='true') {return (
                <button class='scheduleButtonOn' onClick={handleButtonPress}></button>
                )
            }
            else if (buttonStatus=='false') {
                return (
                    <button class='scheduleButtonOff' onClick={handleButtonPress}></button>
                )
            }
            else if (buttonStatus=='yellow') {
                return (
                    <button class='scheduleButtonYellow' onClick={handleButtonPress}></button>
                )
            }
        };

// --------------COMPONENT---------------------


    // In the handleEntryChange function there is a conditional that changes the state of entryStatus to a boolean operator.
    function ActualBoxComponent () {
        
        const [actualBoxInput, setActualBoxInput] =  useState([]);

        // See lines about schedule entry (around 176) for more about this.  It is important to mirror the e.target.value onto a newValue and then have the state set to that.  That way, when you assign the actual state to the value of the textarea it has something to load into that isn't already tied up doing two things at once (save and load).  
        const handleActualBoxChange = (e) => {
            const newValue = e.target.value
            setActualBoxInput(newValue)
            localStorage.setItem('schedule_'+props.morning+'_actual', JSON.stringify(newValue))
        };

        // Load the ActualBox data at init
        useEffect(()=>{
            // props.morning is a prop used for the schedule name and so I use that very same key but add in the _actual.  This was intentionally done to simplify key access by making everything have a single isolated key (for now).
            const a = localStorage.getItem('schedule_'+props.morning+'_actual');
            const b = JSON.parse(a);
            
            setActualBoxInput(b);
        }, []);

        // by Default Value of the textareaa is assigned to its native input.
        return (
            <textarea placeholder='Actual' onChange={handleActualBoxChange} value={actualBoxInput}></textarea>
        );

        // if (entryStatus==true) {
        //     return ActualBox
        //     }

        };

// --------------MAIN COMPONENT RENDER-------------------

        return (
            <div>
                <div class='Container-ScheduleUi-main'>
                    <ScheduleButton class='item-button-main'/>
                    {/* time */}
                    <p class='item-daytime'>{props.morning} </p>
                    {/* Schedule Entry */}
                    <textarea class='item-ScheduleText' type='text' value={scheduleEntry} onChange={handleEntryChange}></textarea>
                </div>

                <div class='Container-Actual'>
                    {/* <textarea placeholder='Actual'></textarea> */}
                    <ActualBoxComponent />
                </div>
            </div>
        )
    };

    // WIRE IN SOME FUNCTIONALITY FOR THE BUTTON AND SEE IF YOU CAN ACCESS THE DATA WHILE RETAINING THE KEYS.  THEN DUMP ALL THE VALUES AND SAVE THAT TO THE DATABASE AGAIN.  MAYBE HAVE A REVERT BUTTON.  BUT NOT YET.  AFTER YOU MAKE CHICKEN COME BACK AND FINISH THIS.        
}





