import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://75.101.219.66.nip.io:8080', // Adjust the URL as needed
  }),
  endpoints: (builder) => ({
    login: builder.mutation<string, { email: string; password: string }>({
      query: (credentials) => ({
        method: 'POST',
        url: '/login',
        body: credentials,
      }),
    }),

    register: builder.mutation<void, { username: string; password: string }>({
        query: (credentials) => ({
          method: 'POST',
          url: '/register',
          body: credentials,
        }),
    }),
    
  }),
});

export const { useLoginMutation } = authApi;