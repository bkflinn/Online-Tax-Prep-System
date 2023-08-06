import { configureStore } from '@reduxjs/toolkit';
import { necApi } from '../api/necApi';
import { w2Api } from '../api/w2Api';
import { userApi } from '../api/userApi';
import { resultApi } from '../api/resultApi';


const store = configureStore({
    reducer : {
        [necApi.reducerPath] : necApi.reducer,
        [w2Api.reducerPath] : w2Api.reducer,
        [userApi.reducerPath] : userApi.reducer,
        [resultApi.reducerPath] : resultApi.reducer,
    },
    middleware : (defaultMiddleWare) => defaultMiddleWare().concat(userApi.middleware)
});

export default store;