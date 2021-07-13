import { client, Query, Field } from "@tilework/opus";
const settings = require("./settings.json");

export function initAPI() {
    client.setEndpoint(settings.api_endpoint);
}

export const getAllCurrenciesAPI = async () => {
    console.log("getAllCurrenciesAPI");
    const query = new Query("currencies", true);
    let response = await makeQuery(query);
    return response.currencies;
};

export const getAllCategoriesAPI = async () => {
    console.log("getAllCategoriesAPI");
    const query = new Query("category", false)
        .addField(new Field("name"))
        .addField(new Field("products", true).addField(new Field("category")));
    let response = await makeQuery(query);
    return categoriesApiToCategories(response.category.products);
};

export const getAllProductsAPI = async () => {
    console.log("getAllProductsAPI");
    const productsFields = ["id", "name", "inStock", "description", "category"];
    const priceFields = ["currency", "amount"];
    const attributeSetFields = ["id", "name", "type"];
    const attributeFields = ["displayValue", "value", "id"];
    const query = new Query("category", false)
        .addField(new Field("name"))
        .addField(
            new Field("products", true)
                .addFieldList(productsFields)
                .addField(new Field("gallery", true))
                .addField(new Field("prices", true).addFieldList(priceFields))
                .addField(
                    new Field("attributes", true)
                        .addFieldList(attributeSetFields)
                        .addField(
                            new Field("items", true).addFieldList(
                                attributeFields
                            )
                        )
                )
        );
    let response = await makeQuery(query);
    response = response.category.products.map((productApi) => {
        return productApiToProduct(productApi);
    });
    return response;
};

const makeQuery = async (query) => {
    try {
        let response = await client.post(query);
        if (response.error) {
            throw Error(response.error);
        }
        return response;
    } catch (error) {
        console.log(error);
    }
};

// Create an array of categories from a response of categoriesApi
export const categoriesApiToCategories = (categoriesApi) => {
    let categories = [];
    categoriesApi.forEach((categoryApi) => {
        let category = categoryApi.category;
        if (!categories.includes(category)) categories.push(category);
    });
    return categories;
};

// Create a product from a productApi with default attributes
export const productApiToProduct = (product) => {
    let newProductAttributes = product.attributes.map((attribute) => {
        let attributeItem = attribute.items.map((item, index) => {
            let selectedValue = false;
            if (index === 0) {
                selectedValue = true;
            }
            return { ...item, selected: selectedValue };
        });
        return { ...attribute, items: attributeItem };
    });
    const newProduct = {
        ...product,
        attributes: newProductAttributes,
    };
    return newProduct;
};
