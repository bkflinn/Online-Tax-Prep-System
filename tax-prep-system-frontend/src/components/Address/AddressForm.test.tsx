import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useFindUserBySocialQuery, useUpdateUserMutation } from '../../api/userApi';
import AddressForm from './AddressForm';

const mockStore = configureStore();

jest.mock('../../api/userApi', () => ({
  ...jest.requireActual('../../api/userApi'),
  useFindUserBySocialQuery: jest.fn(),
  useUpdateUserMutation: jest.fn(),
}));

describe('AddressForm Component', () => {
  const mockUser = {
    street_address: '123 Main St',
    city: 'Example City',
    state: 'CA',
    zip: '12345',
  };

  beforeEach(() => {
    (useFindUserBySocialQuery as jest.Mock).mockReturnValue({
      data: mockUser,
      refetch: jest.fn(),
    });
    (useUpdateUserMutation as jest.Mock).mockReturnValue([jest.fn(), {}]);
  });

  test('renders form fields and handles submission', async () => {
    const initialState = {
      user: {
        user: {
          social: 123456789,
        },
      },
    };
    const store = mockStore(initialState);

    const { getByTestId, getByRole } = render(
      <Provider store={store}>
        <AddressForm />
      </Provider>
    );

    const streetInput = getByTestId('street_address') as HTMLInputElement;
    const cityInput = getByTestId('city') as HTMLInputElement;
    const stateDropdown = getByTestId('state') as HTMLSelectElement;
    const zipInput = getByTestId('zip') as HTMLInputElement;
    const saveButton = getByRole('button', { name: 'save' });

    fireEvent.change(streetInput, { target: { value: '456 New St' } });
    fireEvent.change(cityInput, { target: { value: 'New City' } });
    fireEvent.change(stateDropdown, { target: { value: 'NY' } });
    fireEvent.change(zipInput, { target: { value: '54321' } });

    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(useUpdateUserMutation).toHaveBeenCalledWith();
    });
  });
});
