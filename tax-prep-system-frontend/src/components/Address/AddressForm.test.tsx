import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import AddressForm from './AddressForm'; // Import the correct component

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<Router>{ui}</Router>);
};

test('renders Address Form', () => {
  renderWithRouter(<AddressForm />);

  // Check if important elements are present
  expect(screen.getByLabelText(/Street address 1/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Street address 2/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/City/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/State/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/ZIP/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
});

test('submit NEC form', async () => {
  renderWithRouter(<AddressForm />);

  // Fill out form fields
  const streetAddress1Input = screen.getByLabelText(/Street address 1/i) as HTMLInputElement;
  const streetAddress2Input = screen.getByLabelText(/Street address 2/i) as HTMLInputElement;
  const cityInput = screen.getByLabelText(/City/i) as HTMLInputElement;
  const stateSelect = screen.getByLabelText(/State/i) as HTMLSelectElement;
  const zipInput = screen.getByLabelText(/ZIP/i) as HTMLInputElement;
  const saveButton = screen.getByRole('button', { name: 'Save' }) as HTMLButtonElement;

  fireEvent.change(streetAddress1Input, { target: { value: '123 Main St' } });
  fireEvent.change(streetAddress2Input, { target: { value: 'Apt 456' } });
  fireEvent.change(cityInput, { target: { value: 'Example City' } });
  fireEvent.change(stateSelect, { target: { value: 'CA' } });
  fireEvent.change(zipInput, { target: { value: '12345' } });

  // Simulate form submission
  fireEvent.click(saveButton);

  // Add assertions related to form submission logic here
});
