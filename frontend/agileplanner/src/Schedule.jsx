import {useState, setState, useEffect} from 'react';
import './Schedule.css'
import './fonts.css'


// -----------HIGH SIDE UI (PARENT)

export default function Schedule({ScheduleUI}) {

    const scheduleA = [
        {index: 1, morning: '5am'},
        {index: 2, morning: '6am'},
        {index: 3, morning: '7am'},
        {index: 4, morning: '8am'},
        {index: 5, morning: '9am'},
        {index: 6, morning: '10am'},
        {index: 7, morning: '11am'},
        {index: 8, morning: '12pm'},
        {index: 9, morning: '1pm'},
        {index: 10, morning: '2pm'},
        {index: 11, morning: '3pm'},
        {index: 12, morning: '4pm'}
        
    ];

    const scheduleB = [
        {index: 13, morning: '5pm'},
        {index: 14, morning: '6pm'},
        {index: 15, morning: '7pm'},
        {index: 16, morning: '8pm'},
        {index: 17, morning: '9pm'},
        {index: 18, morning: '10pm'},
        {index: 19, morning: '11pm'},
        {index: 20, morning: '12am'},
        {index: 21, morning: '1am'},
        {index: 22, morning: '2am'},
        {index: 23, morning: '3am'},
        {index: 24, morning: '4am'},
    ];

    // See line 119 for usage.
    const [nest1, setNest1] = useState('Main-Component-a')
    const [nest2, setNest2] = useState('Main-Component-b')

    // Lifted up args.
    function MapSchedule ({schedules, theme, arrangement}) {

  
        const Tester = (props) => {
            return (
                <div>
                    <p>tester {props.name}</p>
                </div>
            )

        }

        // wiring in schedules array holding dictionaries here
        // creating binds for the dictionaries as well, that will be accessed via props.
        return (
  
            <div class={theme}>                
            {schedules.map((schedules, index) => (
                // <Tester index={schedules.index} name={schedules.name}/>
                <ScheduleUI index={schedules.index} morning={schedules.morning} arrangement={arrangement}/>
            ))}
            </div>
        
        )
    };


// -------------------------------HERE----------------------------- 4/28/25
    const [clearStatus, setClearStatus] = useState('lift up test passed');


    // YOU LEFT OFF HERE 10/25/24 you need to make a double trigger from true to false to refresh it.
    // Toggle that creates the conditional for what schedules return
    const HandleEzClear = () => {
        if (x!=='true')
            {setX('true'); 
            localStorage.setItem('clearTrigger', JSON.stringify('true'));
            console.log(clearStatus);
        }
            
        else if (x==='true') 
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

    // we have two different schedules being conditionally shown based on the button state.  The arguments adjust accordingly.  clear changes from 'true' to 'false' so that the ScheduleUI can react to it with useEffects at the child component level - by making changes to the storage based on the props passed to it (in this case the clear arg).
    return (
        <div>
            <div class='schedule-title-container'>
                <h1 class='schedule-title'>{dayOfWeek}</h1>
                <h5 class='schedule-quote'>You vs. You</h5>
                <button class='resetButton' onClick={HandleEzClear}>Clear The Schedule</button>

            </div>

            <div class='Full-ScheduleUi-Container'>
                <MapSchedule schedules={scheduleA} theme='grid-item-a' arrangement={nest1}/>
                <MapSchedule schedules={scheduleB} theme='grid-item-b' arrangement={nest2}/>
            </div>

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
            // So if you want to save the contents of setScheduleEntry.  Don't use scheduleEntry.
            // Directly access newValue instead, because it is currently Up TO Date.

            if (newValue!=='' || newValue!=null) {setEntryStatus(true)}
            else {setEntryStatus(false)}

            localStorage.setItem(dataForUi, JSON.stringify(newValue))
            };

        // YOU LEFT OFF HERE! 10/26/24 - it needs to clear the backend.  Thats all.  
        useEffect(()=> {
            if (props.clear!=='false') 
                // the front UI is already addressed.  Use the effect to clear the DB.+
                {const a = localStorage.getItem(dataForUi)
                localStorage.setItem(dataForUi, JSON.stringify(''))
                }
      
            }, [props.clear])

        // if the local storage changes then I want every ui to react to it and trigger the entry above to return a null entry and save it.
        // i NEED it to hook onto the local storage and make a binding to state with it.  so that when it changes i can run an effect but i just cant seem to do it.
        // You need to parse before you just start passing in data from local.

        // load button status at startup
        useEffect(()=>{
            if (localStorage.getItem(dataForScheduleButton)!=null)
            {const a = localStorage.getItem(dataForScheduleButton);
            const b = JSON.parse(a);
            setButtonStatus(b)}
            }, [])


        const saveButtonData = (trueOrFalse) => {
            const newValue=trueOrFalse;
            localStorage.setItem(dataForScheduleButton, JSON.stringify(newValue))
        };

        const handleButtonPress = () => {

            if (buttonStatus==='false') {
                setButtonStatus('yellow'); 
                saveButtonData('yellow');
            }

            else if (buttonStatus==='yellow') 
                {setButtonStatus('true'); 
                saveButtonData('true');
            }

            else if (buttonStatus==='true') 
                {setButtonStatus('false'); 
                saveButtonData('false');
            }
        };

        function ScheduleButton () {

            if (buttonStatus==='true') {
                return (
                    <button class='scheduleButtonOn' onClick={handleButtonPress}></button>
                )
            }

            else if (buttonStatus==='false') {
                return (
                    <button class='scheduleButtonOff' onClick={handleButtonPress}></button>
                )
            }

            else if (buttonStatus==='yellow') {
                return (
                    <button class='scheduleButtonYellow' onClick={handleButtonPress}></button>
                )
            }
        };
        
       

// --------------COMPONENT---------------------

        // In the handleEntryChange function there is a conditional that changes the state of entryStatus to a boolean operator.
        // LIFT up clearStatus and setClearStatus
        function ActualBoxComponent ({ clearStatus, setClearStatus }) {
            

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
            };

// --------------MAIN COMPONENT RENDER-------------------

        return (

            <div>      
                <div class={props.arrangement}> 
                    <div class='Container-ScheduleUi-main'>
                        <ScheduleButton class='item-button-main'/>
                        {(props.morning==='12am')
                        ? <sup id='12pm-area' class='item-daytime'>{props.morning} </sup>
                        : (props.morning==='5pm')
                            ? <sup id='5pm-area' class='item-daytime'>{props.morning} </sup>
                            : <sup class='item-daytime'>{props.morning} </sup>}
                        
                        <textarea class='item-ScheduleText' type='text' value={scheduleEntry} onChange={handleEntryChange}></textarea>
                    </div>

                    <div class='Container-Actual'>
                        <ActualBoxComponent clearStatus={clearStatus} setClearStatus={setClearStatus}/>
                    </div>
                </div>
            </div>
        )
    };       
}





