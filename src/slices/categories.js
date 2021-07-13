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
        // Set all categories from an array and add the category 'all'
        setAllCategories: (state, action) => {
            let categories = action.payload;
            if (categories !== undefined && !categories.includes("all")) {
                categories.push("all");
            } else {
                categories = ["all"];
            }
            state.selectedCategory = categories[0];
            state.categories = categories;
        },
    },
});

export const { selectCategory, setAllCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
