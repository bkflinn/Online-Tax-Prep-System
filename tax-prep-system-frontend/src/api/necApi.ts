import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type NEC = {
    social: number;
    payer_tin: number;
    compensation: number;
    fed_withheld: number;
};

export const necApi = createApi({
    reducerPath: 'necApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://75.101.219.66.nip.io:8080/NECs',
        //credentials: 'include', // Include credentials for cross-origin requests 
    }), // Adjust the URL as needed
    endpoints: (builder) => ({
        findAllNECs: builder.query<NEC[], void>({
            query: () => '/',
        }),

        findNECBySocial: builder.query<NEC, number>({
            query: (social) => `/NEC/${social}`,
        }),

        createNEC: builder.mutation<NEC, NEC>({
            query: (newNEC) => ({
                method: 'POST',
                url: '/NEC',
                body: newNEC,
            }),
        }),

        updateNEC: builder.mutation<NEC, NEC>({
            query: (updatedNEC) => ({
                method: 'PUT',
                url: '/NEC',
                body: updatedNEC,
            }),
        }),

        deleteNEC: builder.mutation<void, NEC>({
            query: (necToDelete) => ({
                method: 'DELETE',
                url: '/NEC',
                body: necToDelete,
            }),
        }),
    }),
});   

// Export hooks generated by createApi
export const {
    useFindAllNECsQuery,
    useFindNECBySocialQuery,
    useCreateNECMutation,
    useUpdateNECMutation,
    useDeleteNECMutation,
} = necApi;