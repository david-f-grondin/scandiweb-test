import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isCurencySwitcherOpen: false,
    isMinicartOpen: false
}

export const statesSlice = createSlice({
    name: 'states',
    initialState,
    reducers: {
        setCurrencySwitcherState: (state, action) => {
            state.isCurencySwitcherOpen = action.payload
        },
        setMinicartState: (state, action) => {
            state.isMinicartOpen = action.payload
        }
    },
})

export const { setCurrencySwitcherState, setMinicartState } = statesSlice.actions

export default statesSlice.reducer