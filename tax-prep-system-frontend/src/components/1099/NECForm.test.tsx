//import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NECForm from './NECForm'; // Import the correct component

test('renders NEC form', () => {
  render(<NECForm />);
  
  // Check if important elements are present
  expect(screen.getByLabelText(/Payer Tax Identification Number \(TIN\)/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Compensation/i)).toBeInTheDocument();
  expect(screen.getByText(/Save/i)).toBeInTheDocument();
});

test('submit NEC form', () => {
  render(<NECForm />);

  // Fill out form fields
  const tinInput = screen.getByLabelText(/Payer Tax Identification Number \(TIN\)/i) as HTMLInputElement;
  const wagesInput = screen.getByLabelText(/Compensation/i) as HTMLInputElement;
  const submitButton = screen.getByText(/Save/i) as HTMLButtonElement;

  fireEvent.change(tinInput, { target: { value: '12345' } });
  fireEvent.change(wagesInput, { target: { value: '5000' } });

  // Simulate form submission
  fireEvent.click(submitButton);

  // You can add assertions here to check the form submission behavior
});
