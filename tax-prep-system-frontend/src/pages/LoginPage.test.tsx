import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from './LoginPage'; // Update the import path
import '@testing-library/jest-dom/extend-expect';

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<Router>{ui}</Router>);
};

test('renders login page', () => {
  renderWithRouter(<LoginPage />);

  // Use getByRole to target the heading element
  expect(screen.getByRole('heading', { name: /sign-in/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
});

test('toggle password visibility', () => {
  renderWithRouter(<LoginPage />);

  const showPasswordLink = screen.getByText(/show-password/i);
  const passwordInput = screen.getByLabelText(/password/i) as HTMLInputElement;

  fireEvent.click(showPasswordLink);
  expect(passwordInput.type).toBe('text');

  fireEvent.click(showPasswordLink);
  expect(passwordInput.type).toBe('password');
});
