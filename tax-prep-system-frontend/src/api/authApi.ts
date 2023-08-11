import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://75.101.219.66.nip.io:8080', // Adjust the URL as needed
  }),
  endpoints: (builder) => ({
    login: builder.mutation<string, { email: string; password: string }>({
        query: ({ email, password }) => ({
            method: 'GET', // Use GET for Basic Authentication
            url: '/login', // Adjust the URL as needed
            headers: {
                Authorization: `Basic ${btoa(`${email}:${password}`)}`,
            },
        }),
    }),

    register: builder.mutation<void, {
        email: string;
        password: string;
        social: number;
        first_name: string;
        last_name: string;
        phone: string;
      }>({
        query: (credentials) => ({
          method: 'POST',
          url: '/register',
          headers: {
            Authorization: `Basic ${btoa(`${credentials.email}:${credentials.password}`)}`,
          },
          body: {
            ssn: credentials.social,
            firstName: credentials.first_name,
            lastName: credentials.last_name,
            phoneNumber: credentials.phone,
          },
        }),
      }),
    
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
