import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CreateAccountPage from './CreateAccountPage';
import { useCreateUserMutation } from '../api/userApi';
import { useCreateW2Mutation } from '../api/w2Api';
import { useCreateNECMutation } from '../api/necApi';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key, // Use 'string' type here
  }),
}));

jest.mock('../api/userApi', () => ({
  useCreateUserMutation: jest.fn(),
}));

jest.mock('../api/w2Api', () => ({
  useCreateW2Mutation: jest.fn(),
}));

jest.mock('../api/necApi', () => ({
  useCreateNECMutation: jest.fn(),
}));

describe('CreateAccountPage', () => {
  const mockStore = configureStore();
  let store: ReturnType<typeof mockStore>; // Specify store type

  beforeEach(() => {
    store = mockStore({});
  });

  test('renders and submits form correctly', async () => {
    const mockCreateUser = jest.fn();
    const mockCreateW2 = jest.fn();
    const mockCreateNEC = jest.fn();
    (useCreateUserMutation as jest.Mock).mockReturnValue([mockCreateUser, { isLoading: false }]); // Type assert and use jest.Mock
    (useCreateW2Mutation as jest.Mock).mockReturnValue([mockCreateW2]);
    (useCreateNECMutation as jest.Mock).mockReturnValue([mockCreateNEC]);

    render(
      <BrowserRouter>
        <Provider store={store}>
          <CreateAccountPage />
        </Provider>
      </BrowserRouter>
    );

    // Fill out form fields
    fireEvent.change(screen.getByTestId('first-name-input'), { target: { value: 'John' } });
    fireEvent.change(screen.getByTestId('last-name-input'), { target: { value: 'Doe' } });
    fireEvent.change(screen.getByTestId('ssn-input'), { target: { value: '123456789' } });
    fireEvent.change(screen.getByTestId('phone-input'), { target: { value: '555-1234' } });

    // Submit the form
    fireEvent.click(screen.getByTestId('submit-button'));


    // Wait for the form submission and mutations to complete
    await waitFor(() => {
      
    });

    // You can add further assertions based on the expected behavior after successful form submission
  });
});
