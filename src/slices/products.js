import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
};

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setAllProducts: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setAllProducts } = productsSlice.actions;

export default productsSlice.reducer;
