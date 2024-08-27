import React, { useState } from 'react';

function MessageComponent() {
  const [message, setMessage] = useState('Hello, world!');
  const [dictionarySample, setDictionarySample] = useState({color: 'green'})

  const updateMessage = () => {
    setMessage('Hello, React Testing Library!');
  };

  const changeTheState = () => {
    setMessage('Blue')
  };

  const changeToDictionaryBlue = () => {
    setDictionarySample({color: 'red'})
  };
  

  return (
    <div>
      <p>{message}</p>
      <button onClick={updateMessage}>Update Message</button>
      
      <button onClick={changeTheState}>Change The State</button>
      
      <button onClick={changeToDictionaryBlue}>Change the Dictionary State to red</button>
      <p>{dictionarySample['color']}</p>

    </div>
  );
}

export default MessageComponent;
