import {useState, setState, useEffect} from 'react';
import './AnalyticsUi.css'

export default function AnalyticsUi (props) {
    
    function TopLevelUi() {

        const [exp, setExp] = useState(45);

        const handleExp = (e) => {
            setExp(e.target.value)
        };

        function ExpComponent(){
            return(
                <div class='Exp-Bar-Container'>
                    <h1 class='Exp-Fill' style={{width: `${exp}%`, backgroundColor: 'green'}}></h1>
                    <h1></h1>
                </div>
            )
        }

        return (
            <div class='AnalyticsUiContainer'>

                <div class='AnalyticsUi-Interval'> 
                    <h1>Stories in Sprint</h1>
                        <select class='AnalyticsUi-Interval-item'>
                            <option>1</option>
                        </select>
                </div>   
            
                <div class='AnalyticsUi-Exp'>
                    <h1>Experience Points</h1>
                    <textarea placeholder='coming soon' onChange={handleExp} value={exp}></textarea>
                </div>

                <div>
                    <p>Rank 1 Coming Soon</p>
                </div>
                
                <ExpComponent />
                
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
        // State managers
        // Key value states used for data storage, management and display on the ui.
        const [currentList, setCurrentList] = useState([]);
        const [events, setEvents] = useState([]);
        const [counter, setCounter] = useState(0);
        

        // if you can get the view to trigger a selected list like bugs or for people it will work.  
        const [bugs, setBugs] = useState([]);
        const [forPeople, setForPeople] = useState([]);
        const [tasks, setTasks] = useState([]);
        const [inventory, setInventory] = useState([])

        const [leisure, setLeisure] = useState([]);

        // Init trigger that loads the data from local storage into the ui based on it's key values.
        useEffect(() => {
            // Load events from local storage on component mount (At init it'll start with events)
            const storedEvents = localStorage.getItem('Events');

            // const storedLegacyEvents = localStorage.getItem('events');

            // merge old key with new
            // const mergedEvents = [...storedEvents, ...storedLegacyEvents];

            // if this key exists load it
            const storedForPeople = localStorage.getItem('For People')

            const storedBugs = localStorage.getItem('Bugs')

            const storedTasks = localStorage.getItem('Tasks')

            const storedInventory = localStorage.getItem('Inventory')

            const storedLeisure = localStorage.getItem('Leisure')

            // If the key is found (stored) from the local storage, parse and set it into state management.
            if (storedEvents) {
                setEvents(JSON.parse(storedEvents))};
            
            if (storedForPeople) {
                setForPeople(JSON.parse(storedForPeople))};
            
            if (storedBugs) {
                setBugs(JSON.parse(storedBugs))};

            if (storedTasks) {
                setTasks(JSON.parse(storedTasks))};
            
            if (storedInventory) {
                setInventory(JSON.parse(storedInventory))};

            if (storedLeisure) {
                setLeisure(JSON.parse(storedLeisure))};
          
            }, []);

        // Once the state managers are loaded with data from storage;
        // It will Trigger a new local storage save whenever the state of the manager changes [events, bugs, tasks etc...]
        // First we locate the key '', then we take the current state manager and stringify the data into it.
        useEffect(() => {
            localStorage.setItem('Events', JSON.stringify(events))
        }, [events]);

        useEffect(() => {
            localStorage.setItem('Bugs', JSON.stringify(bugs))
        }, [bugs]);

        useEffect(() => {
            localStorage.setItem('For People', JSON.stringify(forPeople))
        }, [forPeople]);

        useEffect(() => {
            localStorage.setItem('Tasks', JSON.stringify(tasks))
        }, [tasks]);

        useEffect(()=> {
            localStorage.setItem('Inventory', JSON.stringify(inventory))
        }, [inventory]);

        useEffect(()=>{
            localStorage.setItem('Leisure', JSON.stringify(leisure))
        }, [leisure]);


        const handleChange = (e) => {
            setInputState(e.target.value)
        };

        const handleKeyPress = (e) => {
            if (e.key === 'Enter') {
            // Trigger the ENTER add button when Enter is pressed on keyboard
              handleAddList();
            }
        };
        
        const handleListToggle = () => {
            // Clicking should toggle the list on or off and remove it from the visible portion of the screen.
        };

// ------------- ADDING AND REMOVING ---------------

        // This fires when the remove button on the ui is clicked.  It checks for the active view and then removes the argument passed into it (eventToRemove).  Afterwards it updates the state causing a cascade of other triggers to update in previous effects.
        const handleRemoveList = (eventToRemove) => {
            if (view=='Events') {
                const updatedevents = events.filter((_, i) => i !== eventToRemove);
                setEvents(updatedevents);
            };
            if (view=='For People') {
                const updatedForPeople = forPeople.filter((_, i) => i !== eventToRemove);
                setForPeople(updatedForPeople);   
            };
            if (view=='Bugs') {
                const updatedBugs = bugs.filter((_, i) => i !== eventToRemove);
                setBugs(updatedBugs);   
            };
            // The reason for the '' is because the view by default starts as empty.  You need to adjust this.
            if (view=='Tasks' || view=='') {
                const updatedTasks = tasks.filter((_, i) => i !== eventToRemove);
                setTasks(updatedTasks);
            };
            if (view=='Inventory') {
                const updatedInventory = inventory.filter((_, i) => i !== eventToRemove);
                setInventory(updatedInventory);
            };
            if (view=='Leisure') {
                const updatedLeisure = leisure.filter((_, i) => i !== eventToRemove);
                setLeisure(updatedLeisure)
            }

            
            // the _ parameter means that it is unused and the eventToRemove is the index from the mapping.

        };
        
        const [inputState, setInputState] = useState();

        // This is bound to a textArea component that has it's value set as a created state manager named inputState.
        const handleAddList = () => {
            if (view=='Events') {
            // ...Takes the previous state of the list.  You need to make sure that you include the new set in [].
                setEvents([...events, inputState]);
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
            if (view=='Tasks' || view=='') {
                setTasks([...tasks, inputState]);
                setInputState('');
            };
            if (view=='Inventory') {
                setInventory([...inventory, inputState]);
                setInputState('');
            };
            if (view=='Leisure') {
                setLeisure([...leisure, inputState])
                setInputState('');
            };


            
        };

// -------------- VIEW -----------------
        // This is causing some issues where the view is getting tangled up with '' even though the loaded contents are displaying properly based on Keys in the Storage.  SO at init the proper data will display but since the view itself is still technically '' it sometimes causes issues with button interactivity.
        const [view, setView] = useState('');

        useEffect(() => {
            console.log('view has changed... to You still need to wire it into the lower ui' + (view));
            // setCounter(counter+1);
            // console.log(counter)
            }, [view]
        );

        // This is bound to the option selector.  It fires whenever a change to the state manager named view is changed.
        // It will set the view state equal to whatever option was selected onChange.  It's value is bound to view and this function updates the view so that it equals to whatever option is selected.
        const handleSelection = (e) => {
            setView(e.target.value);

            // This is a trick to get the most updated value since there is a natural async action that takes place in react that causes an issue if you tried to view the current state in the same script of code.
            const updatedView = (e.target.value)

            // console.log('selected ' + (updatedView))
        };

// --------------RENDER COMPONENTS-------------

        function RenderedList(ListToBeMapped){
            
            if (view=='Events') {ListToBeMapped=events};
            if (view=='For People') {ListToBeMapped=forPeople};
            if (view=='Bugs') {ListToBeMapped=bugs}; 
            // task will check for Tasks or an empty string to display as Default
            if (view=='Tasks'|| view=='') {ListToBeMapped=tasks};
            if (view=='Inventory') {ListToBeMapped=inventory};
            if (view=='Leisure') {ListToBeMapped=leisure};


            return (
            <ul>
            {ListToBeMapped.map((ListToBeMapped, index) => (
                <li class='list-item' key={index}>
                    {/* <button class='arrow-Up'>&#x21E7;</button>
                    <button class='arrow-Down'>&#x21E9;</button> */}
                    <button class='item-remove-button' onClick={() =>handleRemoveList(index)}>Remove</button>
                    {ListToBeMapped}
                </li>
            ))}
            </ul>
            )
        }; 
// ----------DROP DOWN LIST OPTIONS FOR VIEW---------------
        return (
            <div>
            {/* THIS IS THE ORDER OF THE VIEW DISPLAY */}
            <div class='AnalyticsUi-button-container'>
                <h1>Current View:</h1>
                {/* This creates the view options referencing the view state.  the value is bound to the state manager named view that updates with handleSelection.*/}
                <select value={view} onChange={handleSelection}>
                    <option class='Current-View-Tasks'>Tasks</option>
                    <option class='Current-View-Events'>Events</option>
                    <option class='Current-View-For-People'>For People</option>
                    <option class='Current-View-Bugs'>Bugs</option>
                    <option class='Current-View-Inventory'>Inventory</option>
                    <option class='Current-View-Leisure'>Leisure</option>
                </select>
            </div>


            <div>You are now viewing: {view}</div>
            <div class='Event-container'>
            {/* This is the textarea that adds items to each view*/}
            <textarea placeholder='What do you need to be reminded of?' value={inputState} onChange={handleChange} onKeyDown={handleKeyPress}></textarea>
            {/* Adds items to each list in the view */}
            <button onClick={handleAddList}>add</button>
            </div>

            <div class='List-Container'>
                <RenderedList />
            </div>

            </div>
        );

        
    
    }};

