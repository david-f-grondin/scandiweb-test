import { createSlice } from "@reduxjs/toolkit";
import { indexOfItemInCart, removeItemInCart } from "../util/cartItemUtil";

const initialState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            let newItem = action.payload;
            const itemIndex = indexOfItemInCart(newItem, state);
            if (itemIndex === -1) {
                state.push({ ...newItem, count: 1 });
            } else {
                state[itemIndex].count += 1;
            }
        },
        removeItem: (state, action) => {
            const itemToRemove = action.payload;
            return removeItemInCart(itemToRemove, state);
        },
    },
});

export const { addItem, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
