import {useState, setState, useEffect} from 'react';
import './AnalyticsUi.css'

export default function AnalyticsUi (props) {
    function TopLevelUi() {

        const [view, setView] = useState('');

        const handleChange = (e) => {
            setView(e.target.value);

            // This is a trick to get the most updated value since there is a natural async action that takes place in react that causes an issue if you tried to view the current state in the same script of code.
            const updatedView = (e.target.value)

            // console.log('selected ' + (updatedView))
        };

        return (
            <div class='AnalyticsUiContainer'>

            <div class='AnalyticsUi-Interval'> 
                <h1>Stories in Sprint</h1>
                    <select class='AnalyticsUi-Interval-item'>
                        <option>1</option>
                    </select>
            </div>   

            <div class='AnalyticsUi-button-container'>
                <h1>Current View:</h1>
            
                <select value={view} onChange={handleChange}>
                    <option class='Current-View-Events'>Events</option>
                    <option class='Current-View-For-People'>For People</option>
                    <option class='Current-View-Bugs'>Bugs</option>
                </select>
                {/* <button class='AnalyticsUi-button'>Events</button>
                <button class='AnalyticsUi-button'>Social Obligations</button>
                <button class='AnalyticsUi-button'>Bugs</button> */}
            </div>
            
            <div class='AnalyticsUi-Completed'>
                <h1>Experience Points</h1>
                <input placeholder='coming soon'></input>
                </div>
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
                            {/* <button class='arrow-Up'>&#x21E7;</button>
                            <button class='arrow-Down'>&#x21E9;</button> */}
                            {currentList}
                            <button class='item-remove-button' onClick={() =>handleRemoveList(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>

            </div>
        );

        
    
    }};

