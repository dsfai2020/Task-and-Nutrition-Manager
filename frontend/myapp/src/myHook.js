import React, {useState, useEffect } from "react";
import ReactDOM from "react-dom"

// You'll need to take a look at the image links and bind it into list object (just an example but work with variables as needed) with state below.  Remember that you can also double render with multiple states.

// Dont be afraid to use conditional formatting. Its all about state based hook functions at this point.

// finally Done! React hooks cannot be used inside of a class they must be imported in as Methods
const MyHook = () => {
    const [count, updateCount] = useState(0);

// Effect means that everytime it renders call this.
    useEffect(()=> {
        setTimeout(()=> {
                updateCount(count + 1)
        }, 1000);
    });

    return (
        <div>
        <p> You've been here for {count} Seconds!</p>
        </div>
        );
};

export default MyHook;

