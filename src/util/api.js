import { client, Query, Field } from "@tilework/opus";
const settings = require("../settings.json");

const productsFields = [
    "id",
    "name",
    "inStock",
    "description",
    "category",
    "brand",
];
const priceFields = ["currency", "amount"];
const attributeSetFields = ["id", "name", "type"];
const attributeFields = ["displayValue", "value", "id"];

export function initAPI() {
    client.setEndpoint(settings.api_endpoint);
}

export const getAllCurrenciesAPI = async () => {
    const query = new Query("currencies", true);
    const response = await makeQuery(query);
    return response?.currencies;
};

export const getAllCategoriesAPI = async () => {
    const query = new Query("categories", false).addField(new Field("name"));
    const response = await makeQuery(query);
    return categoriesApiToCategories(response?.categories);
};

export const getProductByIdAPI = async (productId) => {
    const query = new Query("product", false)
        .addArgument("id", "String!", productId)
        .addFieldList(productsFields)
        .addField(new Field("gallery", true))
        .addField(new Field("prices", true).addFieldList(priceFields))
        .addField(
            new Field("attributes", true)
                .addFieldList(attributeSetFields)
                .addField(
                    new Field("items", true).addFieldList(attributeFields)
                )
        );
    const response = await makeQuery(query);
    return response?.product;
};

export const getProductsByCategoryAPI = async (category) => {
    const query = new Query("category", false)
        .addArgument("input", "CategoryInput", { title: category })
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
    const response = await makeQuery(query);
    return response?.category.products;
};

export const getAllProductsAPI = async () => {
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
    const response = await makeQuery(query);
    return response?.category.products;
};

const makeQuery = async (query) => {
    try {
        const response = await client.post(query);
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
    const categories = [];
    categoriesApi?.forEach((categoryApi) => {
        categories.push(categoryApi.name);
    });
    return categories;
};
