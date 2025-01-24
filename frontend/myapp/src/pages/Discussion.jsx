import './Discussion.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Discussion = () => {
    return (
    <div>
    <div class="container primary">
      <p>Coming Soon...</p>
      <div class='item wrapper-2'>
        <div class='grid-container-2'>
            <button class='custom-item custom-1'>Start a Discussion</button>
            <input class='custom-item custom-2' type='date'/>
            <button class='custom-item custom-3'>Plan a Discussion</button>
        </div>
      </div>

      <div class='item main'>       
        <div class='grid-container'>
            <button class='grid-item item-h'>SUBJECT</button>
            <button class='grid-item item-j'>Time Remaining</button>
            <img class='grid-image item-g' src={process.env.PUBLIC_URL + './machineLearningImage.PNG'}/>
            <h1 class='grid-item item-i'>Component Example</h1>
            {/* <h1 class='grid-item item-k'>This is a test</h1> */}
            <button class='grid-item item-a'>Begin</button>
            <button class='grid-item item-b'>Next Subject</button>
            <button class='grid-item item-c'>Go Back</button>
            <button class='grid-item item-d'>End</button>
            <button class='grid-item item-e'>Save</button>
            <button class='grid-item item-f'>Help</button>
        </div>
      </div>
    </div>
    
    </div>
    )};
  
  export default Discussion;
  
  // Update the documentation on how the routing was setup and the package you needed to do it.
  // Make sure to include the file structure on PAPER or on a Diagram and save.