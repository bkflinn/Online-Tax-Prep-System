import { render, fireEvent, waitFor } from '@testing-library/react';
import NECForm from './NECForm';
import { mockUseFindNECBySocialQuery, mockUseUpdateNECMutation, mockNECData } from '../../api/necApi.mock';

jest.mock('../../api/necApi', () => ({
  useFindNECBySocialQuery: mockUseFindNECBySocialQuery,
  useUpdateNECMutation: mockUseUpdateNECMutation,
}));

describe('NECForm', () => {
  it('renders and submits the form', async () => {
    const { getByLabelText, getByText } = render(<NECForm />);
    
    // Find form inputs and buttons
    const payerTinInput = getByLabelText('Payer TIN');
    const compensationInput = getByLabelText('Compensation');
    const saveButton = getByText('Save');

    // Mock data
    const updatedNECData = { ...mockNECData, payer_tin: 789, compensation: 1000 };
    
    // Simulate user input
    fireEvent.change(payerTinInput, { target: { value: updatedNECData.payer_tin } });
    fireEvent.change(compensationInput, { target: { value: updatedNECData.compensation } });

    // Mock the update mutation function
    mockUseUpdateNECMutation.mockReturnValue({
      mutateAsync: jest.fn().mockResolvedValue(updatedNECData),
    });

    // Submit the form
    fireEvent.click(saveButton);

    // Wait for async operations to complete
    await waitFor(() => {});

    // Expectations
    expect(mockUseUpdateNECMutation).toHaveBeenCalledWith();
    expect(mockUseUpdateNECMutation().mutateAsync).toHaveBeenCalledWith(expect.objectContaining(updatedNECData));
  });
});
