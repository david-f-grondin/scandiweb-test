import { createSlice } from "@reduxjs/toolkit";
import {
    isItemInCart,
    productToItem,
    removeItemInCart,
} from "../util/cartItemUtil";

const initialState = {
    items: [],
    selectedItem: {},
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        selectCartItem: (state, action) => {
            state.selectedItem = action.payload;
        },
        addItem: (state, action) => {
            const newItem = action.payload;
            if (!isItemInCart(newItem, state.items)) {
                state.items.push(newItem);
            }
        },
        removeItem: (state, action) => {
            const itemToRemove = action.payload;
            state.items = removeItemInCart(itemToRemove, state.items);
        },
        selectProduct: (state, action) => {
            const product = action.payload;
            state.selectedItem = productToItem(product);
        },
    },
});

export const { addItem, removeItem, selectCartItem, selectProduct } =
    cartSlice.actions;

export default cartSlice.reducer;
