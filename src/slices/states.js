import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCurencySwitcherOpen: false,
    isMinicartOpen: false,
};

export const statesSlice = createSlice({
    name: "states",
    initialState,
    reducers: {
        setCurrencySwitcherState: (state, action) => {
            return {
                isCurencySwitcherOpen: action.payload,
                isMinicartOpen: action.payload ? false : state.isMinicartOpen,
            };
        },
        setMinicartState: (state, action) => {
            return {
                isMinicartOpen: action.payload,
                isCurencySwitcherOpen: action.payload
                    ? false
                    : state.isCurencySwitcherOpen,
            };
        },
    },
});

export const { setCurrencySwitcherState, setMinicartState } =
    statesSlice.actions;

export default statesSlice.reducer;
