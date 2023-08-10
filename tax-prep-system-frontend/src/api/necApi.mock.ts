import { useFindNECBySocialQuery, useUpdateNECMutation } from './necApi';

// Mocking necApi functions
export const mockUseFindNECBySocialQuery = useFindNECBySocialQuery as jest.MockedFunction<typeof useFindNECBySocialQuery>;
export const mockUseUpdateNECMutation = useUpdateNECMutation as jest.MockedFunction<any>;

export const mockNECData = {
  social: 123,
  payer_tin: 456,
  compensation: 789,
};
