import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currencies: [
        "USD"
    ],
    selectedCurrency: "USD"
}

export const currenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        selectCurrency: (state, action) => {
            state.selectedCurrency = action.payload
        },
        setAllCurrencies: (state, action) => {
            let currencies = action.payload;
            state.currencies = currencies;
            state.selectedCurrency = (currencies === undefined || currencies.length === 0) ? "" : currencies[0]
        }
    },
})

export const { selectCurrency, setAllCurrencies } = currenciesSlice.actions

export default currenciesSlice.reducer