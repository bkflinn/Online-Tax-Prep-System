import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import CreateAccountPage from './CreateAccountPage';
import '@testing-library/jest-dom/extend-expect';

const renderWithRouter = (ui: React.ReactElement) => {
  return render(<Router>{ui}</Router>);
};

test('renders create account page', () => {
  renderWithRouter(<CreateAccountPage />);

  // Use getByRole to target the heading element
  expect(screen.getByRole('heading', { name: /Create account/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/Email address/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Create password/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Re-type password/i)).toBeInTheDocument();
});


test('toggle password visibility', () => {
  renderWithRouter(<CreateAccountPage />);

  const showPasswordLink = screen.getByText(/Show password/i);
  const passwordInput = screen.getByLabelText(/Create password/i) as HTMLInputElement;
  const confirmPasswordInput = screen.getByLabelText(/Re-type password/i) as HTMLInputElement;

  fireEvent.click(showPasswordLink);
  expect(passwordInput.type).toBe('text');
  expect(confirmPasswordInput.type).toBe('text');

  fireEvent.click(showPasswordLink);
  expect(passwordInput.type).toBe('password');
  expect(confirmPasswordInput.type).toBe('password');
});
