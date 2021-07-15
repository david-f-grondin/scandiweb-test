import { client, Query, Field } from "@tilework/opus";
const settings = require("./settings.json");

export function initAPI() {
    client.setEndpoint(settings.api_endpoint);
}

export const getAllCurrenciesAPI = async () => {
    const query = new Query("currencies", true);
    const response = await makeQuery(query);
    return response?.currencies;
};

export const getAllCategoriesAPI = async () => {
    const query = new Query("category", false)
        .addField(new Field("name"))
        .addField(new Field("products", true).addField(new Field("category")));
    const response = await makeQuery(query);
    return categoriesApiToCategories(response?.category.products);
};

export const getProductsByCategoryAPI = async (category) => {
    const productsFields = ["id", "name", "inStock", "description", "category"];
    const priceFields = ["currency", "amount"];
    const attributeSetFields = ["id", "name", "type"];
    const attributeFields = ["displayValue", "value", "id"];
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
    return response.category.products.map((productApi) => {
        return productApiToProduct(productApi);
    });
};

export const getAllProductsAPI = async () => {
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
    const response = await makeQuery(query);
    return response.category.products.map((productApi) => {
        return productApiToProduct(productApi);
    });
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
        const category = categoryApi.category;
        if (!categories.includes(category)) categories.push(category);
    });
    return categories;
};

// Create a product from a productApi with default attributes
export const productApiToProduct = (product) => {
    /* Use to give default attributes to products

    const newProductAttributes = product.attributes.map((attribute) => {
        const attributeItem = attribute.items.map((item, index) => {
            let selectedValue = false;
            if (index === 0) {
                selectedValue = true;
            }
            return { ...item, selected: selectedValue };
        });
        return { ...attribute, items: attributeItem };
    });*/
    const newProduct = {
        ...product,
        brand: "Brand",
        /*attributes: newProductAttributes,*/
    };
    return newProduct;
};
