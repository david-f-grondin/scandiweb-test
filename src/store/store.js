import { configureStore } from '@reduxjs/toolkit';
import categoriesReducer from '../slices/categories';
import currenciesReducer from '../slices/currencies';
import productsReducer from '../slices/products';
import statesReducer from '../slices/states';

export const store = configureStore({
    reducer: {
        categories: categoriesReducer,
        currencies: currenciesReducer,
        products: productsReducer,
        states: statesReducer
    }, 
})