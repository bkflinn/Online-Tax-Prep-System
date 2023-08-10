import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import W2Form from './W2Form';
import { useFindW2BySocialQuery, useUpdateW2Mutation } from '../../api/w2Api';

// Mock react-i18next for translation
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

// Mock w2Api hooks
jest.mock('../../api/w2Api', () => ({
  useFindW2BySocialQuery: jest.fn(),
  useUpdateW2Mutation: jest.fn(),
}));

describe('W2Form', () => {
  const mockStore = configureStore([]);

  it('should render the form and update data', async () => {
    // Mocked user data
    const mockSocial = 123456789;

    // Mock the useFindW2BySocialQuery response
    useFindW2BySocialQuery.mockReturnValue({
      data: {
        emp_tin: 123,
        employer: 'Example Employer',
        wages: 50000,
        fed_withheld: 2000,
      },
    });

    // Mock the useUpdateW2Mutation function
    const mockUpdateW2Mutation = jest.fn();
    useUpdateW2Mutation.mockReturnValue([mockUpdateW2Mutation]);

    // Mock initial Redux state
    const initialState = {
      user: {
        user: {
          social: mockSocial,
        },
      },
    };

    const store = mockStore(initialState) as MockStoreEnhanced;

    const { getByLabelText, getByText } = render(
      <Provider store={store}>
        <W2Form />
      </Provider>
    );

    // Verify that the form fields are rendered
    const employerInput = getByLabelText('employer');
    const wagesInput = getByLabelText('wages');
    const withholdingInput = getByLabelText('withholding');

    // Simulate changing form input values
    fireEvent.change(employerInput, { target: { value: 'Updated Employer' } });
    fireEvent.change(wagesInput, { target: { value: '60000' } });
    fireEvent.change(withholdingInput, { target: { value: '2500' } });

    // Click the "save" button
    const saveButton = getByText('save');
    fireEvent.click(saveButton);

    // Verify that updateW2 mutation was called with the updated data
    await waitFor(() => {
      expect(mockUpdateW2Mutation).toHaveBeenCalledWith({
        emp_tin: 123,
        employer: 'Updated Employer',
        wages: 60000,
        fed_withheld: 2500,
      });
    });
  });

  // Add more test cases for different scenarios
  // ...

});
