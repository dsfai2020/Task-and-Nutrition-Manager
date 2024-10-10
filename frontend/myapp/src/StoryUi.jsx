    import {useState, setState, useEffect} from 'react';
    import './StoryUi.css' 


    // --------------------HIGH SIDE UI (PARENT)

    // handle, useEffects, states, redners, components parent and child.

    // Eventually I might need to create a state and place StoryUiComponents inside of them [] as a baked in raw render.
    export default function StoryUi(props) {
        // Very IMPORTANT.  Will use this to wire into an effect that will run a map iteration through this array.
        // Every iteration will then run 

        // THIS needs to be saved and loaded
        const [counter, setCounter]=useState(0);

        // Making this start off empty prevents the render from automatically mapping this into a ui component using the length of 1 because there is nothing here.  So keep this empty and let it populate on press through handlePress.
        const [someList, setSomeList]=useState([]);

        const [preStage, setPreStage]=useState({
            mode: 'testing',
        });

        const [initCounter, setInitCounter]=useState(0);

            // Its just a holding list with objects in it that have been parsed so that they can be dictionary read.
        const [listOfObjects, setListOfObjects]=useState([]);

        // functional component
        function AddAnother (props) {
            return (
                    <button onClick={handlePress}>Add another Card</button>
            )
        };

        // handle the add ui button.  This increases the counter.
        const handlePress = () => {
            console.log('handlePress activated');
            setCounter(counter+1);
            console.log('This is the counter: '+ counter);
            someList.push(counter);
            // TEST
            // setDynamicUi([<StoryUiComponent name='Dynamic Ui Test Passed'/>])
        };
        
        // Create/Overwrite a key in local storage everytime counter changes.
        // This makes sure to trigger AFTER the init.
        useEffect (() => {
            if (initCounter===1) {
            localStorage.setItem('UiCounter', JSON.stringify(counter))}
            }, [counter]
        );

        // At startup set the counter
        useEffect (()=> {
            if (preStage['mode']='testing') {
                console.warn('The mode is testing with initCounter at: ' + initCounter);
                console.warn("someList Contents BEFORE Init Completed: " + someList)
                // even though it updates it technically won't change until rerendering because the effect is constrained to initCounter.
                setPreStage({mode: 'green'});
                console.log(preStage);

                // sets the INIT to a value of 1.  This lets you know that the INIT has happened.
                if (initCounter<1) {
                    setInitCounter(initCounter + 1);
                    console.warn("Init Completed.  initCounter at: " + initCounter);
                    console.warn("someList Contents after Init Completed: " + someList)

                    };            
            };

            const storedCounter=localStorage.getItem('UiCounter')
            const accessStoredCounter=JSON.parse(storedCounter)
            setCounter(accessStoredCounter)
            }, []
        );


        const parseUiStorageToListOfObjects = () => {
            console.warn('Preparing the PARSE.. These are the contents in RAW object form unparsed and still serialized ')

            for (let each in localStorage) {
                console.log(each);
                // FAIL - still getting the entire localStorage... i only want the ui components
                if (each.includes('uiBackEnd')) {
                    console.info('Breaking down the keys: '+each);

                    // absolutely important step
                    const rawUnparsedStorageObject = localStorage.getItem(each);
                    
                    // IVE GOT THE ITEMS I NEED IN b (PASS)  I JUST DON'T KNOW HOW TO RETURN IT AS PROPS OR RENDER OR INTO A STATE
                    const parsedObject = JSON.parse(rawUnparsedStorageObject);

                   

                    // I'm checking if a status to delete is present.  If not I will agree to push the contents for deliver.
                    // CYCLE THROUGH LOCAL STORAGE
                        if (parsedObject['status']!='delete') {
                            console.warn("MUTATING - bad - PARSEDOBJECT NOT MARKED FOR DELETE")
                            // DISPLAYS CORRECTLY what I wanted.
                            console.warn(parsedObject);
                        

                            // do not mutate the data directly...using a push.
                            
                            // what if I mutate it then transform it?
                            listOfObjects.push(parsedObject);
                            


                            // const tempZone = [...listOfObjects]
                            // tempZone.push(parsedObject)
                            // Adjust the pointer to trigger a re-render? This triggers a rerender because of the change in state?
                            // tempZone[parsedObject]=[{...listOfObjects['a'], a: 'parsedObject'}];
                            // setListOfObjects([listOfObjects])

                            console.warn('MUTATING completed of listOfObjects by pushing the parsed object into it.  -- This needs to change.')
                            console.warn(listOfObjects);
                            // console.warn(tempZone)
                            console.warn("WARNING LIST OF OBJECTS UPDATED")
                            // setListOfObjects(tempZone);
                            console.warn(listOfObjects)
                            };
                        
                        if (parsedObject['status']==='delete') {
                            localStorage.removeItem(each)
                        };
                    };
                    // I am parsing this because I READ the data from local storage which only saves strings.
                }; 
        };

        // INIT
        useEffect (() => {
            console.log('the page has loaded.  Ready to setup cards'); 
            console.log(localStorage);
            const storedData=localStorage.getItem('uiBackEnd3');
            console.log('Parsing...' + storedData);

            // setPreStage({test: JSON.parse(storedData)}); 
            
            // prestage was assigned dictionary defaults at its defined state.
            console.log(preStage['mode']);
            console.log(preStage);

            // get Keys

            // for delivery being a dictionary causing issues with parse to object because conflict.
            // const forDelivery = {};  Do not make the mistake of trying to pass the objects into a dictionary.  All you need to do is push them into a state list.  That way the array of the state object contains the objects being parsed.  This is because parse converts the stringify local storage content (which is a pre require to be in local storage) back into an object.  It isn't actually a dictionary (but can be handled exactly like one) - it is an Object as seen on parseData.test.js

            parseUiStorageToListOfObjects();

            
            console.debug(listOfObjects);
            console.warn(listOfObjects);
        

            console.log("Finding...Post Init preStage" + preStage);
            console.log('concluding init below:');
            console.log(preStage);
            // localStoredData.map((x)=>{
            //     console.log("Passed iteration Test")
            //     });
            }, []
        );
        // Hypothesis:  I map the ui states.  Not sure if all states should be in 1 key or if they should have their own keys.
            // I'm thinking it would be better to hold all in a single key because thats what a user would have.
        const handleDeliveryListRemove = (cardToRemove) => {
            console.log('TEST')
        };

        function SomeButton (stuff) {
            return (
                <button onClick={handleDeliveryListRemove}>HELLO</button>
            )
        }; 


        function MapListOfObjectsToUi () {
            console.log('mapping now');
            console.warn('Current listOfObects is:  ')
            console.warn(listOfObjects)
            
            return listOfObjects.map((item, index)=> (
                <div>
                    <StoryUiComponent
                        key={index} 
                        name={item.name}
                        estimate={item.estimate}
                        description={item.description}
                        value={item.value}
                        index={item.name}
                        size={item.size}
                    />
                    {/* <button onClick={handleDeliveryListRemove}>testing</button> */}
                </div>
            
            ))
        };
        
        function AnalyticsUi () {
            return (
                <div class='AnalyticsUiContainer'>
                <h1>Sprint Cap in Hrs:</h1>
                <button class='AnalyticsUi-button'>Change View to Weekly</button>
                <button class='AnalyticsUi-button'>Change View to Daily</button>
                <button class='AnalyticsUi-button'>Change View to Bugs</button>
                
                <h1>Completed Hrs/Pts:</h1>
                <h1>Current View: </h1>
                </div>
            )
        };

        return (
            <div>
                
                {/* <StoryUiComponent someState={someState} name='testing props'/>
                {/* setting prop args don't require commas or semicolons */}
                {/* The index record itself will be the index and it'll generate a pair on the storage side as well by default */}
                <AnalyticsUi />
               
                
                {/* INIT conditional will continuously map as long as the init is 1.*/}
                {MapListOfObjectsToUi()}
    
                {/* consider counter saving where it left off in its own key to prevent duplicates */}
                {/* This is triggering for each item in someList but its happening twice for some reason. */}
                {/* STUCK HERE - I want this to continously trigger ONLY if.. the delivery list is not rendering anything.*/}

                {/* THIS is for new cards made with button click */}
                {someList.map((item)=>{return <StoryUiComponent name={counter} index={counter} estimate={null} value={null} size={null} description=''/>})}
                <AddAnother name='dynamic'/>
            </div>
        )
    };
    
    // ------------------------LOW SIDE UI (CHILD) 

    // REUSABLE component.  Must be in caps like a Method. Wired into the Parent Ui.
    // Everytime StoryUiComponent is called it will run everything below in that components own 'world'.
    function StoryUiComponent (props) {
        
        // on arrival carry props as (is ui state) remember each is its own client
        const [uiClient, setUiClient]=useState(props);

        // for delivery props. gives values so dont set that as a key
        // const [propsClone, setPropsClone]=useState({...uiClient, description: inputValue, size: props.size, estimate: props.estimate, value: props.value});

        const [propsClone, setPropsClone]=useState(props);
        
        // KEY it saves under in the localstorage'
        // for example if it is a string - uiBackEnd than that'll be the key but I concat the index to it as well uiBackEnd123 etc.
        const [uIBackEnd, setUiBackEnd]=useState('uiBackEnd'+props.index);
    
            
        // Remember that each state within the component is managed independently of clones.  Multi States Reusable.    
        const [inputValue, setInputValue]= useState(props.description);
        // UPDATE front end PREP stage.
        const handleDescriptionChange =(e)=>{

            // CRITICAL NOTE: value is the actual key. value=(something you set on the UIcard) and e.target.value accesses its contents.
            
            const newValue=e.target.value;

            setInputValue(newValue);
            // absolutely important step.  Get the backend by the primary key
            const a = localStorage.getItem(uIBackEnd);
            // IVE GOT THE ITEMS I NEED IN b.  It is basically an instanced version of the storage record.
            const b = JSON.parse(a);
            b.description=newValue

            console.warn(b);
            console.log(b);
    
            // I need to set just a specific entry within the record.  
            localStorage.setItem(uIBackEnd, JSON.stringify(b))
        };

            // hypothesis:  When the component first renders it'll automatically run this effect since its blank. PASSED.
        useEffect(()=>{
            // index declared as arg from parent
            console.log('a UI subcomponent was created with Index: '+ props.index);

            console.log('accessing client:' + Object.entries(uiClient))

            // hypothesis:  assigning a props manually should reflect in the local storage. FAILED.
            // hypothesis:  I should be able to add in the non props e.target.value to the props itself.
            
            // hypothesis:  Putting the props into a state would allow me to edit the state since I can't change inherited props.
                // This could then setup a case for accessibility through points and values for loading storage.

            // hypothesis: if I just use the props in full.  I'll get the dictionary as the value. PASSED.

            console.log('last check: ' + Object.entries(propsClone))


            
            // propsClone.index
            // hypothesis: I should be able to set the index as the key for the entry.  PASSED.
            localStorage.setItem(uIBackEnd, JSON.stringify(propsClone))
            // hypothesis:  The index prop is wired to a counter mechanic on the parent side.  I want to save locally with index.
            // hypothesis: If i bind stageTest as the trigger it'll work off the handleInput each time. PASS
            },  
        []);

        // UPDATES BACKEND ONLY WHEN CLONE CHANGES.  creates KEY for values
        useEffect(()=>{
            localStorage.setItem(uIBackEnd, JSON.stringify(propsClone))
            },  
        [propsClone]);

        const [estimateInputValue, setEstimateInputValue]=useState(props.estimate);

        // -------------------------CHANGES

        const handleEstimateChange =(e)=>{      
            const newValue=e.target.value;

            setEstimateInputValue(newValue);

            // absolutely important step.  Get the backend by the primary key
            const a = localStorage.getItem(uIBackEnd);
                    
            // IVE GOT THE ITEMS I NEED IN b.  It is basically an instanced version of the storage record.
            const b = JSON.parse(a);

            // I thought Object.estimate would've worked but I needed the OBJECT to exist and without parse it didn't.  b worked.       
            // I can't actually edit b because its like props its read only? No...b.estimate='this is a test' worked in the output.
            // b.estimate='This is a test';
            b.estimate=newValue;
            console.warn(b);
            console.log(b);
    
            // I need to set just a specific entry within the record.  
            localStorage.setItem(uIBackEnd, JSON.stringify(b))
        };

        const [storyValueInputValue, setStoryValueInputValue]= useState(props.value);

        const handleStoryValueChange = (e) => {
            const newValue=e.target.value;

            setStoryValueInputValue(newValue);

            const a = localStorage.getItem(uIBackEnd);

            const b = JSON.parse(a);

            b.value=newValue;
            
            localStorage.setItem(uIBackEnd, JSON.stringify(b))

        };

        const [sizeInputValue, setSizeInputValue] = useState(props.size);

        const handleSizeInputValueChange = (e) => {
            const newValue=e.target.value;

            setSizeInputValue(newValue);

            const a=localStorage.getItem(uIBackEnd);

            const b=JSON.parse(a);

            b.size=newValue;

            localStorage.setItem(uIBackEnd, JSON.stringify(b))
        };

        const handleDelete = () => {
            console.warn('deleting: ' + uIBackEnd);
            // localStorage.removeItem(uIBackEnd)

            const a=localStorage.getItem(uIBackEnd);

            const b=JSON.parse(a);

            b.status='delete';

            // I am adding a status to delete for the front end.  This ensures that it will not render on the delivery list because I put an if statement into the render as well.  The if statement chooses to only render non deleted cards.
            localStorage.setItem(uIBackEnd, JSON.stringify(b))
            
        
            };
        // hypothesis:  I think that saving the state of the UI at the child level might just make it so that the local data saves. FAIL

        // THIS IS ONE UI COMPONENT
        return (
            <div class='storyUi-Container'>
                <textarea class='text-a' type='text' placeholder='Title'>{props.name}</textarea>
                <button onClick={handleDelete}>Delete</button>
                <textarea class='text-b' type='text' placeholder="Please Enter a Description" value={inputValue} onChange={handleDescriptionChange}>{props.description}</textarea>
                
                {/* {props.description} + ' Index is: ' + props.index */}

                <div class='label-Container'>
                    <p>Hrs</p>
                    <p>Impact</p>
                    <p>Size</p>
                </div>  

                {/* ESTIMATE SIZE AND VALUE */}
                <div class='metric-Container'>
                    {/* estimate */}
                    <input type='text' id='textInput' onChange={handleEstimateChange} value={estimateInputValue} placeholder={props.estimate} class='metric-a'></input>
                    {/* value */}
                    <input type='text' id='textInput-2' onChange={handleStoryValueChange} value={storyValueInputValue} placeholder={props.value} class='metric-b'></input>
                    {/* size */}
                    <input type='text' id='textInput-3' onChange={handleSizeInputValueChange} value={sizeInputValue} placeholder={props.size} class='metric-c'></input>
                </div>
                
            </div>
                )
    };

