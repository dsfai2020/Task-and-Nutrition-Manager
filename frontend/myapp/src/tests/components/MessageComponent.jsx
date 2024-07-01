import React, { useState } from 'react';

function MessageComponent() {
  const [message, setMessage] = useState('Hello, world!');

  const updateMessage = () => {
    setMessage('Hello, React Testing Library!');
  };

  return (
    <div>
      <p>{message}</p>
      <button onClick={updateMessage}>Update Message</button>
    </div>
  );
}

export default MessageComponent;
