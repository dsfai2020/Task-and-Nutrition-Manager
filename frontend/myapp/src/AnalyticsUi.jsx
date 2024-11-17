import {useState, setState, useEffect} from 'react';
import './AnalyticsUi.css'

export default function AnalyticsUi (props) {
    function TopLevelUi() {
        return (
            <div class='AnalyticsUiContainer'>
            <h1>Sprint Cap in Hrs:</h1>
            <div class='AnalyticsUi-button-container'>
                <button class='AnalyticsUi-button'>Events</button>
                <button class='AnalyticsUi-button'>Social Obligations</button>
                <button class='AnalyticsUi-button'>Bugs</button>
            </div>
            <h1>Completed Hrs/Pts:</h1>
            <p>Some metrics might go here</p>
            <h1>Current View:</h1>
            <p>Buttons should display the lists or cards when pressed</p>
            <p>Dynamic displays based on what buttno is pressed (make it a render function)</p>
            </div>         
        )}
    return (
        <div>
            <TopLevelUi />
            <Placeholder tabView='events'/>
        </div>
    )

    function Placeholder(props) {
        
        const [currentList, setCurrentList] = useState([]);
        const [inputState, setInputState] = useState();

        useEffect(() => {
            // Load events from local storage on component mount
            const storedEvents = localStorage.getItem('events');
            // if this key exists load it
            if (storedEvents) {
              setCurrentList(JSON.parse(storedEvents));
            }
          }, []);

        useEffect(() => {
            // save to local whenever the events change
            localStorage.setItem('events', JSON.stringify(currentList))
        }, [currentList]);

        const handleChange = (e) => {
            console.log('change is working')
            setInputState(e.target.value)
        };

        const handleListToggle = () => {
            // Clicking should toggle the list on or off and remove it from the visible portion of the screen.
        };

        const handleRemoveList = (eventToRemove) => {
            // the _ parameter means that it is unused and the eventToRemove is the index from the mapping.
            const updatedevents = currentList.filter((_, i) => i !== eventToRemove);
            setCurrentList(updatedevents);
        };

        const handleAddList = () => {
            // ...Takes the previous state of the list.  You need to make sure that you include the new set in [].
            setCurrentList([...currentList, inputState]);
            setInputState('');
        };
        
        return (
            <div>

            <div>You are now viewing: {props.tabView}</div>
            <div class='Event-container'>
            <textarea placeholder='Enter an Event' onChange={handleChange}></textarea>
            <button onClick={handleAddList}>add</button>
            </div>

            <div class='List-Container'>
            <ul>
                {currentList.map((currentList, index) => (
                    <li class='list-item' key={index}>
                        {currentList}
                        <button class='item-remove-button' onClick={() =>handleRemoveList(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            </div>

            </div>
        );

        
    
    }};

