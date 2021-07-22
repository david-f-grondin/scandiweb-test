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
        // Mutate state with new attribute selected
        selectAttribute: (state, action) => {
            const {
                product: actionProduct,
                attributeSetId,
                attributeId,
            } = action.payload;

            const product = state.find(
                (product) => product.id === actionProduct.id
            );

            const attributeSet = selectAttributeSet(attributeSetId, product);
            selectAttributeInSet(attributeId, attributeSet);
        },
    },
});

export const { setAllProducts, addProducts, selectAttribute } =
    productsSlice.actions;

export default productsSlice.reducer;
