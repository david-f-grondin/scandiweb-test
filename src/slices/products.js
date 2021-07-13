import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            return action.payload;
        },
        addProducts: (state, action) => {
            const newProducts = action.payload;
            return [...state, ...newProducts];
        },
    },
});

export const { setAllProducts, addProducts } = productsSlice.actions;

export default productsSlice.reducer;
