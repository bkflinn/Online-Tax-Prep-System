import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NECForm from './NECForm';
import { useFindNECBySocialQuery, useUpdateNECMutation } from '../../api/necApi';

const mockStore = configureStore();

jest.mock('../../api/necApi', () => ({
  ...jest.requireActual('../../api/necApi'),
  useFindNECBySocialQuery: jest.fn(),
  useUpdateNECMutation: jest.fn(),
}));

describe('NECForm Component', () => {
  const mockNEC = {
    social: 123456789,
    payer_tin: 123,
    compensation: 5000,
    fed_withheld: 100,
  };

  beforeEach(() => {
    (useFindNECBySocialQuery as jest.Mock).mockReturnValue({
      data: mockNEC,
      refetch: jest.fn(),
    });
    (useUpdateNECMutation as jest.Mock).mockReturnValue([jest.fn(), {}]);
  });

  test('renders form fields and handles submission', async () => {
    const initialState = {
      user: {
        user: {
          social: 123456789,
          payer_tin: 123,
          compensation: 5000,
          fed_withheld: 100, // Provide the required state here
        },
      },
    };
    const store = mockStore(initialState);

    const { getByTestId, getByRole } = render(
      <Provider store={store}>
        <NECForm />
      </Provider>
    );

    const payerTinInput = getByTestId('textInput-payer_tin') as HTMLInputElement;
    const compensationInput = getByTestId('textInput-compensation') as HTMLInputElement;
    const saveButton = getByRole('button', { name: 'save' });

    fireEvent.change(payerTinInput, { target: { value: '456' } });
    fireEvent.change(compensationInput, { target: { value: '7000' } });

    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(useUpdateNECMutation).toHaveBeenCalledWith(); // You can add more expectations here
    });
  });
});
