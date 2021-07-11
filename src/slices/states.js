import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCurencySwitcherOpen: false,
    isMinicartOpen: false
}

export const statesSlice = createSlice({
    name: 'states',
    initialState,
    reducers: {
        setCurrencySwitcherState: (state, action) => {
            let isCurencySwitcherOpen = action.payload;
            state.isCurencySwitcherOpen = isCurencySwitcherOpen;
            if (isCurencySwitcherOpen)
                state.isMinicartOpen = false;
        },
        setMinicartState: (state, action) => {
            let isMinicartOpen = action.payload;
            state.isMinicartOpen = isMinicartOpen;
            if (isMinicartOpen)
                state.isCurencySwitcherOpen = false;
        }
    },
})

export const { setCurrencySwitcherState, setMinicartState } = statesSlice.actions;

export default statesSlice.reducer;