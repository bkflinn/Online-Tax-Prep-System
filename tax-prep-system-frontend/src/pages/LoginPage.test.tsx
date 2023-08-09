import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for testing routes
import LoginPage from './LoginPage';

// Wrap the component in a Router to simulate route rendering
const renderWithRouter = (ui: React.ReactNode) => {
  return render(<Router>{ui}</Router>);
};

test('renders login page', () => {
  renderWithRouter(<LoginPage />);
  
  // Check if important elements are present
  expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
});

test('toggle password visibility', () => {
  renderWithRouter(<LoginPage />);

  const showPasswordLink = screen.getByText(/Show Password/i);
  const passwordInput = screen.getByLabelText(/Password/i) as HTMLInputElement;

  fireEvent.click(showPasswordLink);
  expect(passwordInput.type).toBe('text');

  fireEvent.click(showPasswordLink);
  expect(passwordInput.type).toBe('password');
});


