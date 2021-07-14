import { createSlice } from "@reduxjs/toolkit";
import {
    canBeAddedToCart,
    getIndexOfItemInCart,
    getIndexesOfItemInCart,
    removeItemInCart,
    selectAttributeSet,
    selectAttributeInSet,
} from "../util/cartItemUtil";

const initialState = [];

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            let newItem = action.payload;

            if (canBeAddedToCart(newItem)) {
                const itemIndex = getIndexOfItemInCart(newItem, state);
                if (itemIndex === -1) {
                    state.push({ ...newItem, count: 1 });
                } else {
                    state[itemIndex].count += 1;
                }
            } else {
                return state;
            }
        },
        removeItem: (state, action) => {
            const itemToRemove = action.payload;
            return removeItemInCart(itemToRemove, state);
        },
        // Fuse all similar cart items into one
        selectAttribute: (state, action) => {
            const product =
                state[getIndexOfItemInCart(action.payload.product, state)];

            const attributeSet = selectAttributeSet(
                action.payload.attributeSetId,
                product
            );
            selectAttributeInSet(action.payload.attributeId, attributeSet);

            const indexesOfItemInCart = getIndexesOfItemInCart(product, state);
            let numberOfSimilarItems = 0;
            for (var i = indexesOfItemInCart.length - 1; i >= 1; i--) {
                numberOfSimilarItems += state[indexesOfItemInCart[i]].count;
                state.splice(indexesOfItemInCart[i], 1);
            }
            state[indexesOfItemInCart[0]].count += numberOfSimilarItems;
        },
    },
});

export const { addItem, removeItem, selectAttribute } = cartSlice.actions;

export default cartSlice.reducer;
