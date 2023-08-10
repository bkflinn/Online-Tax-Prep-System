import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { useFindW2BySocialQuery, useUpdateW2Mutation } from '../../api/w2Api';
import W2Form from './W2Form';

const mockStore = configureStore();

jest.mock('../../api/w2Api', () => ({
  ...jest.requireActual('../../api/w2Api'),
  useFindW2BySocialQuery: jest.fn(),
  useUpdateW2Mutation: jest.fn(),
}));

describe('W2Form Component', () => {
  const mockW2 = {
    emp_tin: 123,
    employer: 'Example Employer',
    wages: 5000,
    fed_withheld: 100,
  };

  beforeEach(() => {
    (useFindW2BySocialQuery as jest.Mock).mockReturnValue({
      data: mockW2,
      refetch: jest.fn(),
    });
    (useUpdateW2Mutation as jest.Mock).mockReturnValue([jest.fn(), {}]);
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
        <W2Form />
      </Provider>
    );

    const empTinInput = getByTestId('tin') as HTMLInputElement;
  const employerInput = getByTestId('employer') as HTMLInputElement;
  const wagesInput = getByTestId('wages') as HTMLInputElement;
  const withholdingInput = getByTestId('fed-withholding') as HTMLInputElement;
  const saveButton = getByRole('button', { name: 'save' });

  fireEvent.change(empTinInput, { target: { value: '456' } });
  fireEvent.change(employerInput, { target: { value: 'New Employer' } });
  fireEvent.change(wagesInput, { target: { value: '7000' } });
  fireEvent.change(withholdingInput, { target: { value: '150' } });

  fireEvent.click(saveButton);

  await waitFor(() => {
    expect(useUpdateW2Mutation).toHaveBeenCalledWith();
  });
  });
});
