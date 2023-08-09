import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import W2Form from './W2Form';

test('renders W2 form and submits', async () => {
  render(<W2Form />);

  // Wait for the input fields to be rendered
  await waitFor(() => {
    const tinInput = screen.getByLabelText('Employer Tax Identification Number (TIN)') as HTMLInputElement;
    const employerInput = screen.getByLabelText('Employer') as HTMLInputElement;
    const wagesInput = screen.getByLabelText('Wages') as HTMLInputElement;
    const fedWithholdingInput = screen.getByLabelText('Federal Withholding') as HTMLInputElement;

    // Fill out form fields
    fireEvent.change(tinInput, { target: { value: '123456789' } });
    fireEvent.change(employerInput, { target: { value: 'Company XYZ' } });
    fireEvent.change(wagesInput, { target: { value: '50000' } });
    fireEvent.change(fedWithholdingInput, { target: { value: '2500' } });

    const submitButton = screen.getByText('Save') as HTMLButtonElement;

    // Simulate form submission
    fireEvent.click(submitButton);

    // Add any additional assertions you need after the form submission
  });
});
