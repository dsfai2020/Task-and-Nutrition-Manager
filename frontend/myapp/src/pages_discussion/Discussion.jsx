import './Discussion.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Discussion = () => {
    return (
    <div>
    <h1>Let's Start a Discussion</h1>
    <form>
        <input type='date'/>
    </form>
    <div class='grid-container'>
        <h1 class='grid-item item-h'>SUBJECT</h1>
        <img class='grid-item item-g' src={process.env.PUBLIC_URL + './machineLearningImage.PNG'}/>
        <ProgressBar class ='grid-item item-i' striped variant="info" key={1} animated now={1000} label={"Time Left"}/>
        <button class='grid-item item-a'>Begin</button>
        <button class='grid-item item-b'>Next Subject</button>
        <button class='grid-item item-c'>Go Back</button>
        <button class='grid-item item-d'>End</button>
        <button class='grid-item item-e'>Save</button>
        <button class='grid-item item-f'>Help</button>
    </div>



    </div>
    )};
  
  export default Discussion;
  
  // Update the documentation on how the routing was setup and the package you needed to do it.
  // Make sure to include the file structure on PAPER or on a Diagram and save.