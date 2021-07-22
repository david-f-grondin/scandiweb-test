import { createSlice } from "@reduxjs/toolkit";
import {
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
            const newItem = action.payload;

            const itemIndex = getIndexOfItemInCart(newItem, state);
            if (itemIndex === -1) {
                return [...state, { ...newItem, count: 1 }];
            } else {
                return state.map((elem, index) =>
                    index === itemIndex
                        ? { ...elem, count: elem.count + 1 }
                        : elem
                );
            }
        },
        removeItem: (state, action) => {
            const itemToRemove = action.payload;
            return removeItemInCart(itemToRemove, state);
        },
        // Fuse all similar cart items into one (state mutation allowed by Immer)
        selectAttribute: (state, action) => {
            const {
                attributeSetId,
                attributeId,
                product: actionProduct,
            } = action.payload;
            const product = state[getIndexOfItemInCart(actionProduct, state)];
            const attributeSet = selectAttributeSet(attributeSetId, product);
            selectAttributeInSet(attributeId, attributeSet);

            const indexesOfItemInCart = getIndexesOfItemInCart(product, state);
            let numberOfSimilarItems = 0;
            for (let i = indexesOfItemInCart.length - 1; i >= 1; i--) {
                numberOfSimilarItems += state[indexesOfItemInCart[i]].count;
                state.splice(indexesOfItemInCart[i], 1);
            }
            state[indexesOfItemInCart[0]].count += numberOfSimilarItems;
        },
    },
});

export const { addItem, removeItem, selectAttribute } = cartSlice.actions;

export default cartSlice.reducer;
