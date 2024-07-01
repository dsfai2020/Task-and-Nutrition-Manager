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
