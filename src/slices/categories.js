import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [
        "WOMEN",
        "MEN",
        "KIDS"
    ],
    selectedCategory: "WOMEN"
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
        setAllCategories: (state, action) => {
            state.categories = action.payload
            state.selectedCategory = action.payload ? action.payload[0] : ""
        }
    },
})

export const { selectCategory, setAllCategories } = categoriesSlice.actions

export default categoriesSlice.reducer