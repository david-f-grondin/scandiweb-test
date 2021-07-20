// Two items are equals if they have the same id and selected attributes
export const isSameItem = (item1, item2) => {
    if (item1.id === item2.id) {
        return !item1.attributes.some((attributeSet, indexSet) => {
            return attributeSet.items.some((attribute, indexAttribute) => {
                return (
                    attribute.selected !==
                    item2.attributes[indexSet].items[indexAttribute].selected
                );
            });
        });
    } else {
        return false;
    }
};

// Check if a cart item is present in a cart item array and return its index or -1
export const getIndexOfItemInCart = (item, items) => {
    return items.findIndex((elem, index) => isSameItem(elem, item));
};

// Return indexes of occurences of item in a cart items
export const getIndexesOfItemInCart = (item, items) => {
    const indexes = [];
    for (let i = 0; i < items.length; i++)
        if (isSameItem(items[i], item)) indexes.push(i);
    return indexes;
};

// Compute the total price of the cart for a given currency
export const computeCartTotal = (cartItems, currency) => {
    let totalPrice = 0;
    cartItems.forEach((item) => {
        totalPrice +=
            item.count *
            item.prices.find((price) => price.currency === currency).amount;
    });
    return totalPrice;
};

// Compute the total number of items in a cart
export const countCartItems = (cartItems) => {
    let total = 0;
    cartItems.forEach((item) => {
        total += item.count;
    });
    return total;
};

// Remove one cartItem from cart items array and return the new array
export const removeItemInCart = (itemToRemove, cartItems) => {
    const index = cartItems.findIndex((cartItem) => {
        return isSameItem(itemToRemove, cartItem);
    });
    if (index > -1) {
        if (cartItems[index].count <= 1) cartItems.splice(index, 1);
        else cartItems[index].count--;
    }
    return cartItems;
};

// Select an attributeSet in a product
export const selectAttributeSet = (attributeSetId, product) => {
    return product.attributes.find(
        (attributeSet) => attributeSet.id === attributeSetId
    );
};

// Select an attribute in an attribute set
export const selectAttributeInSet = (attributeId, attributeSet) => {
    attributeSet.items.forEach((item) => {
        item.selected = item.id === attributeId;
    });
    return attributeSet;
};

// Check if a product can be added to cart
export const canBeAddedToCart = (product) => {
    return product.inStock && allAttributesSetsSelected(product);
};

// Check if a product has at least one value selected for each attribute set
export const allAttributesSetsSelected = (product) => {
    return !product.attributes.some((attributeSet) => {
        return !hasAnAttributeSelected(attributeSet);
    });
};

// Check if an attribute set have at least one attribute selected
export const hasAnAttributeSelected = (attributeSet) => {
    return attributeSet.items.some((attribute) => {
        return attribute.selected;
    });
};
