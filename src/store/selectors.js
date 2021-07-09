// Categories
export const categoriesSelector = ({categories}) => categories.categories;
export const selectedCategorySelector = ({categories}) => categories.selectedCategory;

// Products 
export const productNameSelector = (product) => product.name;
export const productsSelector = ({products}) => products.products;
export const productsByCategorySelector = ({products}, category) => products.products.filter((product) => product.category === category);
export const productsCurrentCategorySelector = ({products, categories}) => products.products.filter((product) => product.category === categories.selectedCategory);
export const productPriceSelector = (product, currency) => product.prices.find((price) => price.currency === currency);

// Currencies
export const selectedCurrencySelector = ({currencies}) => currencies.selectedCurrency;
