import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store/store';
import NECForm from './NECForm';
import { mockUseFindNECBySocialQuery, mockUseUpdateNECMutation, mockNECData } from '../../api/necApi.mock'; // Corrected import path

// Mock the react-i18next useTranslation hook
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// Mock the necApi module before importing the store (or any module that may use it)
jest.mock('../../api/necApi', () => ({
  useFindNECBySocialQuery: () => ({ data: mockNECData, refetch: jest.fn() }),
  useUpdateNECMutation: mockUseUpdateNECMutation,
}));

describe('NECForm', () => {
  it('renders NECForm and handles form submission', async () => {
    // Mock API call results
    mockUseFindNECBySocialQuery.mockReturnValue({ data: mockNECData, refetch: jest.fn() });
    mockUseUpdateNECMutation.mockReturnValue([() => {}, {}]);

    render(
      <Provider store={store}>
        <NECForm />
      </Provider>
    );

    const tinInput = screen.getByLabelText('payer-tin') as HTMLInputElement;
    const compensationInput = screen.getByLabelText('compensation') as HTMLInputElement;
    const saveButton = screen.getByText('save');

    userEvent.type(tinInput, '54321');
    userEvent.type(compensationInput, '98765');

    fireEvent.click(saveButton);

    await waitFor(() => {
      // Add assertions here to check if the form submission behavior is correct
      // For example, you can expect the mock updateNEC to have been called
      expect(mockUseUpdateNECMutation).toHaveBeenCalledWith(expect.any(Object));
    });
  });
});
