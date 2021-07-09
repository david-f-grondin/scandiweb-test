import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../slices/categories';
import currenciesReducer from '../slices/currencies';
import productsReducer from '../slices/products';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        currencies: currenciesReducer,
        products: productsReducer,
    }, 
})