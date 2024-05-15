import { useState, useEffect} from 'react';
import './MainHeader.css'


// define props as you see fit from MainHeader Components seen in this function
export default function MainHeader () {
  return (
    <div class='container'>
      <div class='miniCalTitle'>
        <h1>6 Week Planner</h1>
      </div>
      <div class='weekLayout'>
        <WeekCountComponent week='1'/>
        {/* the MiniGenerator has a display within it called props.today and I am naming the today prop for each individually here */}
        <MiniCalGenerator today='M'/>
        <MiniCalGenerator today='T'/>
        <MiniCalGenerator today='W'/>
        <MiniCalGenerator today='TH'/>
        <MiniCalGenerator today='F'/>
        <MiniCalGenerator today='S'/>
        <MiniCalGenerator today='SUN'/>
      </div>
      <div class='weekLayout'>
        <WeekCountComponent week='2'/>
        <MiniCalGenerator today='M'/>
        <MiniCalGenerator today='T'/>
        <MiniCalGenerator today='W'/>
        <MiniCalGenerator today='TH'/>
        <MiniCalGenerator today='F'/>
        <MiniCalGenerator today='S'/>
        <MiniCalGenerator today='SUN'/>
      </div>
      <div class='weekLayout'>
        <WeekCountComponent week='3'/>
        <MiniCalGenerator today='M'/>
        <MiniCalGenerator today='T'/>
        <MiniCalGenerator today='W'/>
        <MiniCalGenerator today='TH'/>
        <MiniCalGenerator today='F'/>
        <MiniCalGenerator today='S'/>
        <MiniCalGenerator today='SUN'/>
      </div>
      <div class='weekLayout'>
        <WeekCountComponent week='4'/>
        <MiniCalGenerator today='M'/>
        <MiniCalGenerator today='T'/>
        <MiniCalGenerator today='W'/>
        <MiniCalGenerator today='TH'/>
        <MiniCalGenerator today='F'/>
        <MiniCalGenerator today='S'/>
        <MiniCalGenerator today='SUN'/>
      </div>
      <div class='weekLayout'>
        <WeekCountComponent week='5'/>
        <MiniCalGenerator today='M'/>
        <MiniCalGenerator today='T'/>
        <MiniCalGenerator today='W'/>
        <MiniCalGenerator today='TH'/>
        <MiniCalGenerator today='F'/>
        <MiniCalGenerator today='S'/>
        <MiniCalGenerator today='SUN'/>
      </div>
      <div class='weekLayout'>
        <WeekCountComponent week='6'/>
        <MiniCalGenerator today='M'/>
        <MiniCalGenerator today='T'/>
        <MiniCalGenerator today='W'/>
        <MiniCalGenerator today='TH'/>
        <MiniCalGenerator today='F'/>
        <MiniCalGenerator today='S'/>
        <MiniCalGenerator today='SUN'/>
      </div>
    </div>
  );
}

  // props are enabled to allow for the days to change at the parent component level.
  function MiniCalGenerator (props) {

    // props.today will give you access to the parameter

    const [clickStatus, setClickStatus] = useState(false);

    function DayIsClicked () {
      return <button style={{backgroundColor: '#59faa1'}} class='day' onClick={handleTheUnclick}>{props.today}</button>
    };

    function DayIsNotClicked () {
      return <button style={{backgroundColor: 'white'}} class='day' onClick={handleTheClick}>{props.today}</button>
    };

    const handleTheClick = () => {
      setClickStatus(true)

    };

    const handleTheUnclick = () => {
      setClickStatus(false)
    };

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

  // lets bring in props from the parent component MainHeader
  function WeekCountComponent (props) {
    const [isClicked, setIsClicked]=useState(true);

    // DO NOT forget to return
    function ButtonIsClicked () {
      return <button style={{backgroundColor: '#59faa1'}} onClick={handleClick}>Week {props.week}</button>
    };

    function ButtonIsNotClicked() {
      return <button onClick={handleNotClicked}>Week {props.week}</button>
    };

    // Wired into ButtonIsClicked
    const handleClick = () => {
      setIsClicked(false)
    };
    
    const handleNotClicked = () => {
      setIsClicked(true)
    };

    return (
      <div>
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






