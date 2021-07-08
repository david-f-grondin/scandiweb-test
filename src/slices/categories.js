import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categories: [
        {
            name: "WOMEN"
        },
        {
            name: "MEN"
        },
        {
            name: "KIDS"
        }
    ],
    selectedCategory: { name: "WOMEN" }
}

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        selectCategory: (state, action) => {
            state.selectedCategory = action.payload
        },
    },
})

export const { selectCategory } = categoriesSlice.actions

export default categoriesSlice.reducer