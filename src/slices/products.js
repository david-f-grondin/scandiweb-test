import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            return action.payload;
        },
    },
});

export const { setAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
