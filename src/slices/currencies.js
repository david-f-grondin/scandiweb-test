import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currencies: ["USD"],
    selectedCurrency: "USD",
};

export const currenciesSlice = createSlice({
    name: "currencies",
    initialState,
    reducers: {
        selectCurrency: (state, action) => {
            return { ...state, selectedCurrency: action.payload };
        },
        setAllCurrencies: (...[, action]) => {
            const currencies = action.payload;
            const selectedCurrency =
                currencies === undefined || currencies.length === 0
                    ? ""
                    : currencies[0];
            return {
                currencies: currencies,
                selectedCurrency: selectedCurrency,
            };
        },
    },
});

export const { selectCurrency, setAllCurrencies } = currenciesSlice.actions;

export default currenciesSlice.reducer;
