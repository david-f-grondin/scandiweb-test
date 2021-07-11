import { client, Query, Field } from "@tilework/opus";
const settings = require("./settings.json");

export const initAPI = () => {
    client.setEndpoint(settings.api_endpoint);
};

export const getAllCurrenciesAPI = async () => {
    const query = new Query("currencies", true);
    let response = await makeQuery(query);
    return response.currencies;
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
    let response = await makeQuery(query);
    return response.category.products;
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
