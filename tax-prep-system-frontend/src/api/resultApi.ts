import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type Result = {
    social: number;
    owed: number;
};

export const resultApi = createApi({
    reducerPath: 'resultApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8282/results' }), // Adjust the URL as needed
    endpoints: (builder) => ({
        findAllResults: builder.query<Result[], void>({
            query: () => '/',
        }),

        findResultBySocial: builder.query<Result, number>({
            query: (social) => `/result/${social}`,
        }),

        createResult: builder.mutation<Result, Result>({
            query: (newResult) => ({
                method: 'POST',
                url: '/result',
                body: newResult,
            }),
        }),

        updateResult: builder.mutation<Result, Result>({
            query: (updatedResult) => ({
                method: 'PUT',
                url: '/result',
                body: updatedResult,
            }),
        }),

        deleteResult: builder.mutation<void, Result>({
            query: (resultToDelete) => ({
                method: 'DELETE',
                url: '/result',
                body: resultToDelete,
            }),
        }),
    }),
});

// Export hooks generated by createApi
export const {
    useFindAllResultsQuery,
    useFindResultBySocialQuery,
    useCreateResultMutation,
    useUpdateResultMutation,
    useDeleteResultMutation,
} = resultApi;