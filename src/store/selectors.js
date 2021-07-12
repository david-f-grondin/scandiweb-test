// Categories
export const categoriesSelector = ({ categories }) => categories.categories;
export const selectedCategorySelector = ({ categories }) =>
    categories.selectedCategory;

// Products
export const productNameSelector = (product) => product.name;
export const productsSelector = ({ products }) => products;
export const productsByCategorySelector = ({ products }, category) =>
    products.filter((product) => product.category === category);
export const productsCurrentCategorySelector = ({ products, categories }) =>
    products.filter(
        (product) =>
            product.category === categories.selectedCategory ||
            categories.selectedCategory === "all"
    );
export const productPriceSelector = (product, currency) =>
    product.prices.find((price) => price.currency === currency);

// Currencies
export const currenciesSelector = ({ currencies }) => currencies.currencies;
export const selectedCurrencySelector = ({ currencies }) =>
    currencies.selectedCurrency;

// Cart
export const cartItemSelector = ({ products }, productId) =>
    products.find((product) => product.id === productId);
export const cartItemsSelector = ({ cart }) => cart;

// States
export const currencySwitcherStateSelector = ({ states }) =>
    states.isCurencySwitcherOpen;
export const minicartStateSelector = ({ states }) => states.isMinicartOpen;
