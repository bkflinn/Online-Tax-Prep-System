import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type User = {
    social: number;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    street_address: string;
    city: string;
    state: string;
    zip: number;
    status: string;
};

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: ' http://75.101.219.66.nip.io:8080/users', 
        //credentials: 'include', // Include credentials for cross-origin requests
    }), // Adjust the URL as needed
    endpoints: (builder) => ({
        findAllUsers: builder.query<User[], void>({
            query: () => '/',
        }),

        findUserBySocial: builder.query<User, number>({
            query: (social) => `/user/${social}`,
        }),

        findUserByEmail: builder.query<User, string>({
            query: (email) => `/user/email/${email}`,
        }),

        createUser: builder.mutation<User, User>({
            query: (newUser) => ({
                method: 'POST',
                url: '/user',
                body: newUser,
            }),
        }),

        updateUser: builder.mutation<User, User>({
            query: (updatedUser) => ({
                method: 'PUT',
                url: '/user',
                body: updatedUser,
            }),
        }),

        deleteUser: builder.mutation<void, User>({
            query: (userToDelete) => ({
                method: 'DELETE',
                url: '/user',
                body: userToDelete,
            }),
        }),  
    }),
});

// Export hooks generated by createApi
export const {
    useFindAllUsersQuery,
    useFindUserBySocialQuery,
    useFindUserByEmailQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = userApi;