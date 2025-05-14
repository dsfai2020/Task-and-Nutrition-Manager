import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom"

// Notice that there is 1 major function (SlideShow) and within are numerous setups that return renders from functions.  Each function inside of the main one is then plugged into the actual main render at the bottom the same way the index file usually works.  Then the entirety of it is wired in as the main functions name.

// Why use a function and not a class?  Because classes cant use hook syntax.  SO working with a function, as long as you understand how to setup the states and change them, gives you extreme flexibility.  

// What about custom functions can I use those?  Yes and they usually expect one of the declared state variables as an arg.
// Keep an eye out for effects because they get wired into the functions without a name for the effect.  useEffect and work as conditionals that alter the state of things.  

// doubleclick clockTimer and notice all the triggers tied to that state -- if you are curious.

// WHERE YOU LEFT OFF:  you were working on hook syntax dictionaries.

// This is HOOK SYNTAX.  Effects are applied to NON-CLASS states.  

// 1-27-23 I think that you can honestly create a bunch of nice pages using hooks.  I'm pretty certain of it. I don't even think you need to go back to classes on js because the hooks are setup in such a way as to where it is a new form of OOP.  Let's get back to Coding!

const SlideShow = (x) => {
    const [clockTimer, myMethod] = useState(0);
    const [gallery, galleryMethod] = useState([{active: process.env.PUBLIC_URL + "/padres7.png", qued: process.env.PUBLIC_URL + "/padrefans.jpg", bay3: process.env.PUBLIC_URL + "/screenshot.png"}]);
    const [someVar, myRender] = useState({a: "You accessed a variables key value", b: "char"});


    // Using this for testing purposes with studio being the second key in the dictionary.
    const [test, testIt] = useState({core: "This", studio: 5})
    

    const [customstyle, myStyle] =useState({style: {backgroundColor: "brown", display: "flex", flexDirection: "row", justifyContent: "space-between"}});

    const [itemStyle, setItemStyle] = useState({style: {border: "solid", width: 500, height: 300}});



//  Might need to work with MAPS

// 1ST AND 2ND ITEM UNPACKING ARRAY -- the first item is order the second is updateOrder to handle it.  So a list helps encapsulate all into the first object.
    const [order, updateOrder] = useState([{meal1: "breakfast", meal2: "snack"}]);


    const [name, setName]=useState([]);




    // myMethod is actually an update state to clock timer.  setTimeout I'm not sure if it is a default or custom.
    useEffect(()=> {
        setTimeout(()=> {
            myMethod(clockTimer+1)
        }, 1000);
    });



    // custom Function is a success! the argument works and you can do whatever you want inside of the function.  If it is going to be a hook you have to put use in front of it
    function selectPokemon(pokemon){
        if (pokemon>=5) {
        return (
            <h1>{pokemon}</h1>)}
    };

    // IT IS ABSOLUTELY IMPORTANT THAT React Function components start with Capital letters
    function LiveSlideShow(counterEffect) {
        return (<div>
            <h1>{order[0].meal2} is on the Lunch Menu</h1>
            <h1>The Nintendo Switch OLED is</h1>
            </div>
    )}; useEffect(()=>{
        if (clockTimer>=4) {
            order[0].meal2="Turkey Sandwhich"
        };
        if (clockTimer>=9) {
            order[0].meal2="Chicken Salad"
        };
    });


  

    
    // This was a test that didn't work and is to be tested again.  At the time Axios wasn't understood nor implemented.
    function TestCase1(data) {
        const Names = async () => {
        const response = await fetch("https://127.0.0.1:5000/somestrike");
        setName(await response.json());};
        
        useEffect(()=> {Names()}, []);

        return (
            <div>
            <ol>
                {name.map(data=> {return <li>{data}</li>;})}
            </ol>
            </div>
        )};


    // This is THE slideshow to be embedded in as an encapuslated function with a customized hook effect that alters the state of its items being rendered.  Also it is passed the counterEffect which is really just the timer from the very first object in the program and we're using that timer as a trigger point.

    function FinalSlideShow(counterEffect) {
        return (
            <div style={customstyle.style}>
            <img style={itemStyle.style} src={gallery[0].active}/>
            <img style={itemStyle.style} src={gallery[0].qued}/>
            <img style={itemStyle.style} src={gallery[0].bay3}/>
            </div>
            );}
        useEffect(()=>{
            if (clockTimer>=1) {
                gallery[0].active=process.env.PUBLIC_URL + "/padrefans.jpg";
                gallery[0].qued=process.env.PUBLIC_URL + "/padrefans.jpg";
                gallery[0].bay3=process.env.PUBLIC_URL + "/padrefans.jpg"};
            if (clockTimer>=5) {
                gallery[0].active=process.env.PUBLIC_URL + "/screenshot.png";
                gallery[0].qued=process.env.PUBLIC_URL + "/screenshot.png";
                gallery[0].bay3=process.env.PUBLIC_URL + "/screenshot.png"};

        });



//         if (counterEffect>=5) {
            // order[0].meal2="dinner";

    // CREATE SOME RENDER
    // SET UP USE STATE THAT USES A LIST INSIDE OF IT AND NOTE ZERO

    // FOR THE MORNING

    // BUILD MANUAL FUNCTIONS WITH RENDERS THAT DISPLAY OR STATEMENTS AND RETURNS
    // WORK MAPS INTO THE ELEMENTS SO THAT IT ISN'T SO HARD TO DO.  SEE YOUR NOTES.  IE MAKE EVERYTHING MAP INTO ELEMENTS FROM A LIST AS NEEDED.
    // GET ALL THE SLIDES INTO THE PROGRAM


    return (
        <div>

        <div id="testPing">
        {TestCase1()}
        <h1>Lets Ping it</h1>
        <h1>hi</h1>
        </div>

        <div>
        {FinalSlideShow(clockTimer)}
        </div>

        <div id="embeddedFunctionRender">
        {LiveSlideShow(clockTimer)}
        </div>

        <div class="testingIfFunctionsRender">
        {selectPokemon(clockTimer)}
        </div>

        <div id="testingDictionaryMultipleKeys">
        <h1>You are in studio {test.studio}</h1>
        <h1>{test.core}</h1>
        </div>

        <h1>{someVar.a}</h1>
        <h1> This is counter that has ticked {clockTimer} Times!</h1>
        
        <div id="testingConditionals">
            {(clockTimer>=10)
                ? <h1>This is a conditional</h1>
                : null
            }

            {(clockTimer>=20)
                ? <h1>This is another maybe I could use id but it would be better to RENDER a return this is why you need to know how to process functons.  Maybe you could alter the state and have it display the state instead of creating new h1 elements everytime</h1>
                : null
            }
        </div>

        <div id="testingLinksForApi">
        <a href="https://pythonbasics.org/flask-http-methods/">Flask Notes for <strong>API</strong></a>
        <br />
        <a href="https://jasonwatmore.com/post/2020/01/27/react-fetch-http-get-request-examples">React Notes for <strong>API</strong></a>
        </div>

        </div>
        );
};

export default SlideShow;

// Using inputs means that you need /> closing tags jsx style at the end.

// if your using embedded functions don't forget the () at the end.

// When encapsulating Return renders be sure to include the divs so that multiple fields can be in that div or else it won't even render.

// all function variables are accessible form within other functions



//  WHAT IF WE MADE IT A DOCK BAY AND THEN HAD A SEPARATE LIST UPLOAD INTO THAT DOCK BAY SIMILAR TO STAGING IN GIT????? THAT WAY THE VARIABLE FOR STATE DOESN'T HAVE TO WORRY ABOUT CONTAINING KEYS AND VALUES.  IT WOULD JUST HAVE 1 RAW STATE THAT CHANGES BY ACCESSING WHICH LIST ITEM IS NEEDED ON SAID INTERVAL OR REQUIREMENT FROM ANOTHER LIST.

// UPLOADING THE STATE OF AN OBJECT GIVES YOU TROUBLE WHEN USING FUNCTIONS THAT NEST DICTIONARIES.  THIS ISNT A PROBLEM WITH ACTUAL CLASSES BUT IS A PROBLEM WITH HOOK STATES.  ITS LIKE THEY CAN ONLY HOLD THE 1 SINGLE OBJECT CONTENT NO LAYERS NO LISTS.  APPARENTLY I CAN HOLD LISTS AND DICTIONARIES BUT THE STATE WON'T UPDATE.





// 1ST AND 2ND ITEM UNPACKING ARRAY are how the 2 variables work in hook syntax
// You needed to place the dictionary INSIDE of the an array so that the object detects that as the first WHOLE item.  from there access as normal
        // This is how you update it
        //  if (counterEffect>=3) {
            // order[0].meal2="dinner";

        // This is how you create the state object for hook syntax 
    // const [order, updateOrder] = useState([{meal: "breakfast", meal2: "snack"}])
    
        // This is how you view it in the header.  
    //   <h1>{order[0].meal2}</h1>

    // Hooks can be very simple but your using dictionaries to make it work properly with effects. There was an issue where effects wouldn't allow you to update the information because of the fact that the information needed was inside of a class and the HOOKs are not allowed in classes.



// A small Failing Test really means a test that isn't complete that needs to BE completed and then refactored (optimized).  Think of it was a way to comb the beach.

// TEST
    // - Run a basic script that updates each active slide in the first slot over a set period of time (5 seconds) apart. -PASS
    // - IF that works then do this for all 3 slide shots and populate the slide assets with more images. -PASS
    // - IF that works then try to refactor the code into a better way using maps.

//  Backlog
    // Tie in everything (inputs, effects, hooks, statebased css classes -- flexbox) all to create a really dynamic webpage.
    // Gather more knowledge on Grid and Boostrap
    // Get a form to submit a request to (possible document.innerHTML) to the flask backend python JSON


// NOTES
    //  Create a function --Capital if its going to use a custom hook -- add the renders you need, hook up an effect.  Make sure that you've already constructed the hook state variable and method that you need along with its state object.  Then make sure that if you're using a dictionary that you encapsulate it inside of a nice array so that it is easy to handle using the 0,1 slots of the array that naturally fit into the hooks syntax.  IF your rendering make sure to include divs and also be sure to embed it into {} on the function render.  For the main render do the same but make sure the name -- capital -- is included <div> <{YourFunction} /> </div> inside of a div just to make things easier.  All in all everything should work out.


// TEST 
    // Successfully configure an API request from the front end
        // use an href and add on query strings.
    // Successfully return information from the back end FLASK
        // make sure query strings interact as args for the Flask app.
    // Successfully implement a back end SQL server (server meaning that it is serving information -- nothing special)
    // Successfully display that content onto a react Element 

    // Bonus - Use maps to generate iterated content from the keys and values.
        // That way the JSON returns are embedded via state base.

// NOTES
    // using maps will allow you to really create dynamic content
    // Take note of how SQL requests work and really make sure that the sources are lining up on the flask side too.
    // Refine your sql skills if needed
    // write down the notes on cards and look at it if you really need to disect it.
    // Use diagram app if you need to spread out your thoughts.


// DOWN THE ROAD
    // CUSTOM Page experience Renders using SQL resources and log ins.

    // calendar implementation
    // buttons that react with exp
    // bootstrap css
    // grid and flexbox improvement
    // Pokemon Battle on site Demo.


    // Example of GEt
        // button with a href. 
            // link with a query string of what parameter it wants and what it provides attatched at the end of it so that it pushes to the associated flask url
            // a user name entry field and password that adjusts the state of an entry object that gets pushed.
                // The button sends that information to the source and returns the page.
            // All of the renders can be customized via embed.
                // Some of the renders can be returned conditionally -- like exp progress.  User Profile image.  Etc...


//  Get the CRUD for a URL
// View the page on phone
// React must display a request from FLASK server