import { useState, useEffect} from 'react';
import './MiniCalendar.css';


// define props as you see fit from MainHeader Components seen in this function
export default function MiniCalendar () {
  return (
    <div class='mini-cal'>
      <div class='mini-cal-title'>
        <h1>6 Week Planner</h1>
      </div>

      <div class='mini-cal-container'>
        <div class='weekLayout'>
          <WeekCountComponent week='1'/>
          {/* the MiniGenerator has a display within it called props.today and I am naming the today prop for each individually here */}
          <MiniCalGenerator today='M' day='1' />
          <MiniCalGenerator today='T' day='2'/>
          <MiniCalGenerator today='W' day='3'/>
          <MiniCalGenerator today='TH' day='4'/>
          <MiniCalGenerator today='F' day='5'/>
          <MiniCalGenerator today='S' day='6'/>
          <MiniCalGenerator today='SN' day='7'/>
        </div>
        <div class='weekLayout'>
          <WeekCountComponent week='2' />
          <MiniCalGenerator today='M' day='8'/>
          <MiniCalGenerator today='T' day='9'/>
          <MiniCalGenerator today='W' day='10'/>
          <MiniCalGenerator today='TH' day='11'/>
          <MiniCalGenerator today='F' day='12'/>
          <MiniCalGenerator today='S' day='13'/>
          <MiniCalGenerator today='SN' day='14'/>
        </div>
        <div class='weekLayout'>
          <WeekCountComponent week='3' />
          <MiniCalGenerator today='M' day='15'/>
          <MiniCalGenerator today='T' day='16'/>
          <MiniCalGenerator today='W' day='17'/>
          <MiniCalGenerator today='TH' day='18'/>
          <MiniCalGenerator today='F' day='19'/>
          <MiniCalGenerator today='S' day='20'/>
          <MiniCalGenerator today='SN' day='21'/>
        </div>
        <div class='weekLayout'>
          <WeekCountComponent week='4'/>
          <MiniCalGenerator today='M' day='22'/>
          <MiniCalGenerator today='T' day='23'/>
          <MiniCalGenerator today='W' day='24'/>
          <MiniCalGenerator today='TH' day='25'/>
          <MiniCalGenerator today='F' day='26'/>
          <MiniCalGenerator today='S' day='27'/>
          <MiniCalGenerator today='SN' day='28'/>
        </div>
        <div class='weekLayout'>
          <WeekCountComponent week='5'/>
          <MiniCalGenerator today='M' day='29'/>
          <MiniCalGenerator today='T' day='30'/>
          <MiniCalGenerator today='W' day='31'/>
          <MiniCalGenerator today='TH' day='32'/>
          <MiniCalGenerator today='F' day='33'/>
          <MiniCalGenerator today='S' day='34'/>
          <MiniCalGenerator today='SN' day='35'/>
        </div>
        <div class='weekLayout'>
          <WeekCountComponent week='6'/>
          <MiniCalGenerator today='M' day='36'/>
          <MiniCalGenerator today='T' day='37'/>
          <MiniCalGenerator today='W' day='38'/>
          <MiniCalGenerator today='TH' day='39'/>
          <MiniCalGenerator today='F' day='40'/>
          <MiniCalGenerator today='S' day='41'/>
          <MiniCalGenerator today='SN' day='42'/>
        </div>
      </div>
    </div>
  );
}

  // props are enabled to allow for the days to change at the parent component level.  The parameter assigned is (today) // props.today
  function MiniCalGenerator (props) {

    // props.today will give you access to the parameter
    const [clickStatus, setClickStatus] = useState(false);

    // Edited to show how to set a key and value into local storage
    function DayIsClicked () {      

      // I assign contents of props.day (in this case it is a number of the day) as a mock primary key on the storage side because it will be unique and what I use to identify the data.  
      //I also asign clickStatus to be the value
      // style={{backgroundColor: '#59faa1'}} 
      return <button class='day-is-clicked' onClick={handleTheUnclick}>{props.today}</button>
    };

    function DayIsNotClicked () {
      // style={{backgroundColor: 'white'}}
      return <button class='day-not-clicked' onClick={handleTheClick}>{props.today}</button>
    };

    const handleTheClick = () => {
      setClickStatus(true)
    };

    const handleTheUnclick = () => {
      setClickStatus(false)
    };

    // Keep in mind the entire component will have its own unique attributes based on all of these settings.  
    // Meaning one can have different values but the same boiler plate.


    //mock test
    // const [test, setTest]=useState('day effect test');
    // //mock test
    // useEffect(()=>{
    //   const testVar= test
    //   // const someExample = localStorage.getItem(props.day);

    //   // I can access props because it is included in the parent component of this effect
    //   localStorage.setItem(props.day, testVar) //effect runs only when props.day changes
    // }, [props.day]);


    // IT WORKS using the 2 effects below.  
    const primeKey = 'day'+ props.day;

    useEffect(()=>{

      const savedState = localStorage.getItem(primeKey);
      if (savedState) {
        setClickStatus(JSON.parse(savedState))
      }
    }, []);
    
    useEffect(()=>{
      // Adjusts the storage side logic
      localStorage.setItem(primeKey, JSON.stringify(clickStatus))
    },[clickStatus]); //Runs whenever the clicStatus changes



    return (
      <div>
        {/* {weeks.map((weeks, index) => (
          <button class='day' key={index} onClick={handleClick}> {weeks} {clickStatus} </button>
        ))} */}
        {/* <button class='day' onClick={handleClick}>{props.today}</button> */}
        {/* check if the status starts as false */}
        {clickStatus ? <DayIsClicked /> : <DayIsNotClicked />}
      </div>
      )
    };

  // lets bring in props from the parent component MainHeader.  
  function WeekCountComponent (props) {
    // every rendered WeekCountComponent has its own unique states that apply to them all but operate independently of each other. 
    const [isClicked, setIsClicked]=useState(true);

    // DO NOT forget to return.  Returns a button with a custom style if this is used.
    function ButtonIsClicked () {
      return <button class='weekCountComponent-Is-Clicked' style={{backgroundColor: '#59faa1', border: 'solid', borderColor: 'black'}} onClick={handleClick}>Week {props.week}</button>
    };

    // returns a button
    function ButtonIsNotClicked() {
      return <button class='weekCountComponent-Is-UnClicked' style={{backgroundColor: '#ff0000', border: 'solid', borderColor: 'black', color: 'white'}} onClick={handleNotClicked}>Week {props.week}</button>
    };

    // Wired into ButtonIsClicked
    const handleClick = () => {
      setIsClicked(false)
    };
    
    // wired into ButtonIsNotClicked
    const handleNotClicked = () => {
      setIsClicked(true)
    };

    return (
      <div>
        {/* isClicked checks if the statement is true and if it is it returns the result of <ButtonIsClicked /> otherwise it returns <ButtonIsNotClicked /> contents */}
        {isClicked ? <ButtonIsClicked /> : <ButtonIsNotClicked />}
      </div>
    );
  }



    //  // DO NOT forget to return
    //  function ButtonIsClicked () {
    //   return <button onClick={handleClick}>I am Clicked</button>
    // };

    // function ButtonIsNotClicked() {
    //   return <button onClick={handleNotClicked}>I am NOT clicked</button>
    // };

    // const key = 'keythatwillbemodified';
    // const value = 'somevalue'

    // This automatically sets
    // localStorage.setItem(key, value); //whenever this changes it might be possible to use an effect that does something.


