import {useState, setState, useEffect} from 'react';
import '/.Schedule.css'
export default function Schedule(props) {
    return (
        <div>
            <p>SCHEDULE</p>
            <ScheduleUI morning='7am to Noon'/>
            <ScheduleUI morning='1pm to 5pm'/>
            <ScheduleUI morning='6pm to Midnight'/>
        </div>
    );

    function ScheduleUI (props) {
        return (
            <div>
                <button class='scheduleButton'></button>
                <p>Time {props.morning} </p>
            </div>
        )
    };

}





