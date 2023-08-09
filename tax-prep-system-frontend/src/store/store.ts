import { configureStore } from '@reduxjs/toolkit';
import { necApi } from '../api/necApi';
import { w2Api } from '../api/w2Api';
import { userApi } from '../api/userApi';
import { resultApi } from '../api/resultApi';
import userReducer from './userSlice';

// Define RootState type
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
    reducer : {
        user: userReducer,
        [necApi.reducerPath] : necApi.reducer,
        [w2Api.reducerPath] : w2Api.reducer,
        [userApi.reducerPath] : userApi.reducer,
        [resultApi.reducerPath] : resultApi.reducer,
    },
    middleware : (defaultMiddleWare) => 
        defaultMiddleWare()
            .concat(necApi.middleware) // Add necApi middleware
            .concat(w2Api.middleware)  // Add w2Api middleware
            .concat(userApi.middleware)  // Add userApi middleware
            .concat(resultApi.middleware),  // Add resultApi middleware
    
});

export default store;