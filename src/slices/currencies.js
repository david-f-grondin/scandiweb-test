import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currencies: [
        "USD",
        "GBP",
        "AUD",
        "JPY",
        "RUB"
    ],
    selectedCurrency: "EUR"
}

export const currenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        selectCurrency: (state, action) => {
            state.selectedCurrency = action.payload
        },
        setAllCurrencies: (state, action) => {
            state.currencies = action.payload
            state.selectedCurrency = action.payload ? action.payload[0] : ""
        }
    },
})

export const { selectCurrency, setAllCurrencies } = currenciesSlice.actions

export default currenciesSlice.reducer