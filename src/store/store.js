import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../slices/categories';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
    }, 
})