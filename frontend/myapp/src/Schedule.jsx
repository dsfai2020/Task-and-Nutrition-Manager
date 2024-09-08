import {useState, setState, useEffect} from 'react';
import './Schedule.css'
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
            <ScheduleUI morning='12 Midnight'/>
        </div>
    );

    function ScheduleUI (props) {
        return (
            <div class='ScheduleUi'>
                <button class='scheduleButton'></button>
                <p>Time {props.morning} </p>
                <input type='text'></input>
            </div>
        )
    };

}





