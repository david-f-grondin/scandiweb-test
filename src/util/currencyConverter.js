const currencySymbols = {
    "USD": '$',
    "GBP": '£',
    "AUD": 'A$',
    "JPY": '¥',
    "RUB": '₽',
    "EUR" : '€'
}

const convertToSymbol = (currency) => {
    return currency in currencySymbols ? currencySymbols[currency] : "";
}

export default convertToSymbol;