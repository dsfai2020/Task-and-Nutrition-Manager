import {useState, setState, useEffect} from 'react';
import './Schedule.css'


// -----------HIGH SIDE UI (PARENT)

export default function Schedule(props) {
    return (
        <div>
            <p>SCHEDULE</p>
            <ScheduleUI morning='7am to Noon'/>
            <ScheduleUI morning='1pm to 5pm'/>
            <ScheduleUI morning='6pm'/>
            <ScheduleUI morning='7pm'/>
            <ScheduleUI morning='8pm'/>
            <ScheduleUI morning='9pm'/>
            <ScheduleUI morning='10pm'/>
            <ScheduleUI morning='11pm'/>
            <ScheduleUI morning='Midnight to 1am'/>
            <ScheduleUI morning='1am to 2am'/>
            <ScheduleUI morning='2am to 3am'/>
            <ScheduleUI morning='3am to sleep'/>

        </div>
    );

    // ------------LOW SIDE UI (child)

    function ScheduleUI (props) {

        const [scheduleEntry, setScheduleEntry] = useState();

        const [dataForUi, setDataForUi] = useState('schedule_'+props.morning);

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

        return (
            <div class='ScheduleUi'>
                <button class='scheduleButton'></button>
                <p>Time {props.morning} </p>
                <textarea type='text' value={scheduleEntry} onChange={handleEntryChange}></textarea>
            </div>
        )
    };
}





