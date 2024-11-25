import {useState, setState, useEffect} from 'react';
import './AnalyticsUi.css'

export default function AnalyticsUi (props) {
    
    function TopLevelUi() {

        return (
            <div class='AnalyticsUiContainer'>

                <div class='AnalyticsUi-Interval'> 
                    <h1>Stories in Sprint</h1>
                        <select class='AnalyticsUi-Interval-item'>
                            <option>1</option>
                        </select>
                </div>   
            
                <div class='AnalyticsUi-Completed'>
                    <h1>Experience Points</h1>
                    <input placeholder='coming soon'></input>
                </div>

                <EventLists tabView='' />
            </div>         
    

        )};

    
    return (
        <div>
            <TopLevelUi />
            {/* EventLists renders above */}
        </div>
    )

    function EventLists(props) {
        
        const [currentList, setCurrentList] = useState([]);
        const [inputState, setInputState] = useState();
        const [counter, setCounter] = useState(0);
        

        // if you can get the view to trigger a selected list like bugs or for people it will work.  
        const [bugs, setBugs]= useState([]);
        const [forPeople, setForPeople] = useState([]);

        useEffect(() => {
            // Load events from local storage on component mount (At init it'll start with events)
            const storedEvents = localStorage.getItem(view);
            // if this key exists load it
            if (storedEvents=='Events') {
                setCurrentList(JSON.parse(storedEvents))
            };
            if (storedEvents=='For People') {
                setForPeople(JSON.parse(storedEvents))
            };
            if (storedEvents=='Bugs') {
                setBugs(JSON.parse(storedEvents));
            }
          }, []);

        useEffect(() => {
            // save to local whenever the events change
            // localStorage.setItem('events', JSON.stringify(currentList))
            localStorage.setItem('Events', JSON.stringify(currentList))
        }, [currentList]);

        useEffect(() => {
            localStorage.setItem('Bugs', JSON.stringify(bugs))
        }, [bugs]);

        useEffect(() => {
            localStorage.setItem('For People', JSON.stringify(forPeople))
        }, [forPeople]);

        const handleChange = (e) => {
            setInputState(e.target.value)
        };

        const handleListToggle = () => {
            // Clicking should toggle the list on or off and remove it from the visible portion of the screen.
        };

        const handleRemoveList = (eventToRemove) => {
            if (view=='Events') {
                const updatedevents = currentList.filter((_, i) => i !== eventToRemove);
                setCurrentList(updatedevents);
            };
            if (view=='For People') {
                const updatedForPeople = forPeople.filter((_, i) => i !== eventToRemove);
                setForPeople(updatedForPeople);   
            };
            if (view=='Bugs') {
                const updatedBugs = bugs.filter((_, i) => i !== eventToRemove);
                setBugs(updatedBugs);   
            }

            // the _ parameter means that it is unused and the eventToRemove is the index from the mapping.

        };

        const handleAddList = () => {
            if (view=='Events'|| view=='') {
            // ...Takes the previous state of the list.  You need to make sure that you include the new set in [].
                setCurrentList([...currentList, inputState]);
                setInputState('');
            };
            if (view=='For People') {
                setForPeople([...forPeople, inputState]);
                setInputState(''); 
            };
            if (view=='Bugs') {
                setBugs([...bugs, inputState]);
                setInputState('');
            };

            
        };
        

        const [view, setView] = useState('');

        useEffect(() => {
            console.log('view has changed... to You still need to wire it into the lower ui' + (view));
            // setCounter(counter+1);
            // console.log(counter)
            }, [view]
        );

        const handleSelection = (e) => {
            setView(e.target.value);

            // This is a trick to get the most updated value since there is a natural async action that takes place in react that causes an issue if you tried to view the current state in the same script of code.
            const updatedView = (e.target.value)

            // console.log('selected ' + (updatedView))
        };

        function RenderedList(ListToBeMapped){
            if (view=='Events' || view=='') {ListToBeMapped=currentList};
            if (view=='For People') {ListToBeMapped=forPeople};
            if (view=='Bugs') {ListToBeMapped=bugs}; 

            return (
            <ul>
            {ListToBeMapped.map((ListToBeMapped, index) => (
                <li class='list-item' key={index}>
                    {/* <button class='arrow-Up'>&#x21E7;</button>
                    <button class='arrow-Down'>&#x21E9;</button> */}
                    {ListToBeMapped}
                    <button class='item-remove-button' onClick={() =>handleRemoveList(index)}>Remove</button>
                </li>
            ))}
            </ul>
            )
        }; 

        return (
            <div>

            <div class='AnalyticsUi-button-container'>
                <h1>Current View:</h1>
                
                <select value={view} onChange={handleSelection}>
                    <option class='Current-View-Events'>Events</option>
                    <option class='Current-View-For-People'>For People</option>
                    <option class='Current-View-Bugs'>Bugs</option>
                </select>
            </div>


            <div>You are now viewing: {view}</div>
            <div class='Event-container'>
            <textarea placeholder='Enter an Event' onChange={handleChange}></textarea>
            <button onClick={handleAddList}>add</button>
            </div>

            <div class='List-Container'>
                <RenderedList />
            </div>

            </div>
        );

        
    
    }};

