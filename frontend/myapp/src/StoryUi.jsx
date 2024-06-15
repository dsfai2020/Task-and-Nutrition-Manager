import {useState, setState, useEffect} from 'react';
import './StoryUi.css' 


// handle, useEffects, states, redners, components parent and child.

// Eventually I might need to create a state and place StoryUiComponents inside of them [] as a baked in raw render.
export default function StoryUi(props) {
    // Very IMPORTANT.  Will use this to wire into an effect that will run a map iteration through this array.
    // Every iteration will then run 

    // TEST
    const [dynamicUi, setDynamicUi]=useState();

    const [counter, setCounter]=useState(0);

    const [someList, setSomeList]=useState([1]);

    const [preStage, setPreStage]=useState({
        mode: 'testing',
    });

    const [initCounter, setInitCounter]=useState(0);

        // Needs to be a list for mapping
    const [deliveryList, setDeliveryList]=useState([]);

    const [forDelivery, setForDelivery]=useState();

    function AddAnother (props) {
        return (
                <button onClick={handlePress}>Add another. Name is {props.name}</button>
        )
    };

    // handle the dynamicUi at press
    const handlePress = () => {
        console.log('handlePress activated');
        setCounter(counter+1);
        console.log('This is the counter: '+ counter);

        // TEST
        // setDynamicUi([<StoryUiComponent name='Dynamic Ui Test Passed'/>])
    };
    
    // Next you need a useEffect that allows that stages a variable array with multiples and sets it.
        // For that you can use a map iteration and assign keys for accessibility. 

    // TEST Trigger off of the change from a dynamic after press populates it.
    useEffect (() => {
        console.log('You tested here');
        const x=[0,1,2];
        x.map((something)=>{console.log(something)})
         }, [dynamicUi]
    );

    useEffect (() => {
        console.log('You left off here, someList is: ' + (counter));

        // appends counter to someList
        someList.push(counter);
       
        // triggers when counter changes
        }, [counter]
    );

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
        for (let each in localStorage) {
            console.log(each);
            // FAIL - still getting the entire localStorage... i only want the ui components
            if (each.includes('uiBackEnd')) {
                console.info('Breaking down the keys: '+each);

                // absolutely important step
                const a = localStorage.getItem(each);
                 
                // IVE GOT THE ITEMS I NEED IN b (PASS)  I JUST DON'T KNOW HOW TO RETURN IT AS PROPS OR RENDER OR INTO A STATE
                const b = JSON.parse(a);

                // DISPLAYS CORRECTLY what I wanted.
                console.warn(b);
              
                // COULD THIS BE THE FIX?  I SIMPLY NEEDED TO PUSH b TO THE LIST?!!?!?!?!?!?!?
                deliveryList.push(b);

                };
                // I am parsing this because I READ the data from local storage which only saves strings.
    
       
            }; 

        
        console.debug(deliveryList);
        console.warn(deliveryList);
    
        
        if (preStage['mode']='testing') {
            console.log('The mode is testing with initCounter at ' + initCounter);
            // even though it updates it technically won't change until rerendering because the effect is constrained to initCounter.
            setPreStage({mode: 'green'});
            console.log(preStage);

            if (initCounter<1) {
                setInitCounter(initCounter + 1);
                };            
        };

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


    return (
        

        <div>
            
            {/* <StoryUiComponent someState={someState} name='testing props'/>
            {/* setting prop args don't require commas or semicolons */}
            {/* The index record itself will be the index and it'll generate a pair on the storage side as well by default */}

            
            {/* I need to pass in the props to the StoryComponent but I'm having trouble. testing with lenthDelivery being a state that is really just an array of 3 numbers.  SO far it sort of works but I need parameters */}
            {(deliveryList && initCounter===1) ? deliveryList.map((item, index)=>{
                // deliveryList a list containing objects that were pushed into it after parsing in an effect. Generating at startup based on how long the deliveryList is.
                return <StoryUiComponent 
                key={index}
                name={item.name}
                estimate={item.estimate}
                description={item.description}
                />}) 
                : <p>FAILED</p>}

            {someList.map((item)=>{return <StoryUiComponent name={counter+1} index={counter+1} estimate='estimate' value='value' size='size' description='description'/>})}
            <AddAnother name='dynamic'/>
        </div>
    )
};
  
    
// REUSABLE component.  Must be in caps like a Method. Wired into the Parent Ui.
// Everytime StoryUiComponent is called it will run everything below in that components own 'world'.
function StoryUiComponent (props) {
    
    
    // Remember that each state within the component is managed independently of clones.  Multi States Reusable.    
    const [inputValue, setInputValue]= useState();

    // on arrival carry props as (is ui state) remember each is its own client
    const [uiClient, setUiClient]=useState(props);

    // for delivery
    const [propsClone, setPropsClone]=useState({...uiClient, [props.description]: inputValue, [props.size]: '5', [props.estimate]:'5 story points', [props.value]: 'high value'});
    
    // KEY it saves under in the localstorage'
    // for example if it is a string - uiBackEnd than that'll be the key but I concat the index to it as well uiBackEnd123 etc.
    const [uIBackEnd, setUiBackEnd]=useState('uiBackEnd'+props.index);

  
    
    // const [activeKey, setActiveKey] = useState(props.index);

        // hypothesis: Add an onChange={handleInputChange} to capture text value of description.  PASSED.

    // UPDATE front end PREP stage.
    const handleDescriptionChange =(e)=>{

        setInputValue(e.target.value);


        // hypothesis:  props.description is actually editing the value of description because of it was set in quotes.
        
        // stage client before clone
        const stage = {...uiClient, 
            [props.description]: inputValue, 
            [props.size]: '3', 
            [props.estimate]:'5 story points', 
            [props.value]: 'high value'}

        // display tests
        const x=localStorage.getItem(props.index)
        console.log('TESTING INDEX :'+ x)

        // FAIL ITS 1 BEHIND
        // Object.entries() Object.keys() and Object.values(the object you want to get values of)
        console.log('you typed: ' + inputValue + ' '+ Object.entries(propsClone));

        // hypothesis: stage will show me the correct changes in description and attributes for the ui.  PASSED.
        console.log(stage);
        // hypothesis: printing out stageTest will show me the same output as Stage  FAILED.  It just says object object.
                 // console.log('stageTest: ' +stageTest)

        // stage and clone
        setPropsClone(stage) 
        
    };

        // hypothesis:  When the component first renders itll automatically run this effect since its blank. PASSED.
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


    // hypothesis:  I think that saving the state of the UI at the child level might just make it so that the local data saves. FAIL

    // THIS IS ONE UI COMPONENT
    return (
        <div class='storyUi-Container'>
            <textarea class='text-a' type='text' placeholder='Title'>{props.name}</textarea>
            <textarea class='text-b' type='text' placeholder="Please Enter a Description" value={inputValue} onChange={handleDescriptionChange}></textarea>

            <div class='label-Container'>
                <p>Estimate</p>
                <p>Value</p>
                <p>Size</p>
            </div>  

            {/* ESTIMATE SIZE AND VALUE */}
            <div class='metric-Container'>
                {/* estimate */}
                <input type='text' id='textInput' placeholder={props.estimate} class='metric-a'></input>
                {/* value */}
                <input type='text' id='textInput-2' placeholder={props.value} class='metric-b'></input>
                {/* size */}
                <input type='text' id='textInput-3' placeholder={props.size} class='metric-c'></input>
            </div>

        </div>
            )
};

