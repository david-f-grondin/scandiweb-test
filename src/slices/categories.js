import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    selectedCategory: "",
};

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        // Get all existing categories from a list of products
        setAllCategories: (state, action) => {
            let categories = [];
            let products = action.payload;
            products.forEach((product) => {
                let category = product.category;
                if (!categories.includes(category)) categories.push(category);
            });
            state.categories = categories;
            state.selectedCategory =
                categories === undefined || categories.length === 0
                    ? ""
                    : categories[0];
        },
    },
});

export const { selectCategory, setAllCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
