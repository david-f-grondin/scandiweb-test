import { createSlice } from "@reduxjs/toolkit";
import { selectAttributeInSet, selectAttributeSet } from "../util/cartItemUtil";

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
        selectAttribute: (state, action) => {
            const product = state.find(
                (product) => product.id === action.payload.product.id
            );

            const attributeSet = selectAttributeSet(
                action.payload.attributeSetId,
                product
            );
            selectAttributeInSet(action.payload.attributeId, attributeSet);
        },
    },
});

export const { setAllProducts, addProducts, selectAttribute } =
    productsSlice.actions;

export default productsSlice.reducer;
