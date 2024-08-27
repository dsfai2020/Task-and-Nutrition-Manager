import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MessageComponent from './MessageComponent';

test('renders initial message', () => {
  render(<MessageComponent />);
  
  // Check if the initial message is rendered
  expect(screen.getByText('Hello, world!')).toBeInTheDocument();
});

test('updates message when button is clicked', () => {
  render(<MessageComponent />);
  
  // Click the button to update the message
  fireEvent.click(screen.getByText('Update Message'));

  // Check if the message is updated
  expect(screen.getByText('Hello, React Testing Library!')).toBeInTheDocument();
});

test('message component changes the text display to blue when a button is pressed - triggering a method to change the state', ()=> {
  render(<MessageComponent />);

  fireEvent.click(screen.getByText('Change The State'));

  // Basically a render of the state object is in the DOM.  The button you access changes the state of it and causes the display to show the new text because the button you clicked activated it.  Because of this you're now able to check if the entire DOM contains the simple word 'Blue'.
  expect(screen.getByText('Blue')).toBeInTheDocument();
})


test('the paragraph should change the dictionary value to blue', () => {
  render(<MessageComponent />);

  fireEvent.click(screen.getByText('Change the Dictionary State to red'));

  expect(screen.getByText('red')).toBeInTheDocument();
})