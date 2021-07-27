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
            return { ...state, selectedCategory: action.payload };
        },
        // Set all categories from an array and add the category 'all'
        setAllCategories: (...[, action]) => {
            let categories = action.payload;
            if (categories !== undefined && !categories.includes("all")) {
                categories.push("all");
            } else {
                categories = ["all"];
            }
            return { categories: categories, selectedCategory: categories[0] };
        },
    },
});

export const { selectCategory, setAllCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
