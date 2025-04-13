import {useState, setState, useEffect} from 'react';
import './StagesUi.css'

export default function StageUi () {

    function CircleComponent (props) {
        return (
                <button class='circles'>{props.name}</button>
        )
    };

    function LineComponent () {
        return (
                <p class='lines'>{null}</p>
        )
    };

    return (
        <div class='StageUi-Container'>
                <div>

                </div>
                <div>
                    <CircleComponent name='Stage 1'/>
                </div>

                <div>
                    <CircleComponent name='Stage 2'/>
                </div>

                <div>
                    <CircleComponent name='Stage 3'/>
                </div>
                <div>

                </div>

        </div>
    )
}