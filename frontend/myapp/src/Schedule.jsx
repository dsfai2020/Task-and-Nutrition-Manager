import {useState, setState, useEffect} from 'react';
import './Schedule.css'


// -----------HIGH SIDE UI (PARENT)

export default function Schedule(props) {
    return (
        <div>
            <p>SCHEDULE</p>
            <ScheduleUI morning='7am'/>
            <ScheduleUI morning='8am'/>
            <ScheduleUI morning='9am'/>
            <ScheduleUI morning='10am'/>
            <ScheduleUI morning='11am'/>
            <ScheduleUI morning='12pm'/>
            <ScheduleUI morning='1pm'/>
            <ScheduleUI morning='2pm'/>
            <ScheduleUI morning='3pm'/>
            <ScheduleUI morning='4pm'/>
            <ScheduleUI morning='5pm'/>
            <ScheduleUI morning='6pm'/>
            <ScheduleUI morning='7pm'/>
            <ScheduleUI morning='8pm'/>
            <ScheduleUI morning='9pm'/>
            <ScheduleUI morning='10pm'/>
            <ScheduleUI morning='11pm'/>
            <ScheduleUI morning='12am'/>
            <ScheduleUI morning='1am'/>
            <ScheduleUI morning='2am'/>
            <ScheduleUI morning='3am'/>
            <ScheduleUI morning='4am'/>
            <ScheduleUI morning='5am'/>
            <ScheduleUI morning='6am'/>

        </div>
    );

    // ------------LOW SIDE UI (child)

    function ScheduleUI (props) {

        const [scheduleEntry, setScheduleEntry] = useState();

        const [dataForUi, setDataForUi] = useState('schedule_'+props.morning);

        const [buttonStatus, setButtonStatus] = useState(false);

        const [dataForButton, setDataForButton] = useState('button_'+props.morning)

        // The key is remembering that the useEffect will trigger for all of the LowSide Ui (child) rendering on the HighSide Ui (parent)
        useEffect(()=>{
            const a = localStorage.getItem(dataForUi);
            const b = JSON.parse(a);
            
            // JSON.stringify(b)
            // populate the schedule by setting the entries at init.
            setScheduleEntry(b)

        }, []);


        // Since the function uses ASYNC through react live updates will be lagging a step behind until functions are complete
        const handleEntryChange = (e) => {
            const newValue=e.target.value;

            // So if you want to save the contents of setScheduleEntry.  Dont use scheduleEntry.
            // Directly access newValue instead, because it is currently Up TO Date.
            setScheduleEntry(newValue);

            console.log('Changed')
            localStorage.setItem(dataForUi, JSON.stringify(newValue))
        };

        // load button status at startup
        useEffect(()=>{
            if (localStorage.getItem(dataForButton)!=null)
            {const a = localStorage.getItem(dataForButton);
            const b = JSON.parse(a);
            setButtonStatus(b)}
        }, [])

        const saveButtonData = (trueOrFalse) => {
            const newValue=trueOrFalse
            console.log('this is'+ {trueOrFalse})
            localStorage.setItem(dataForButton, JSON.stringify(newValue))
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
}





