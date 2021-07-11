// Two items are equals if they have the same id and selected attributes
export const isSameItem = (item1, item2) => {
    if (item1.id === item2.id) {
        item1.attributes.forEach((attribute, index) => {
            if (attribute.selected !== item2.attributes[index]) return false;
        });
        return true;
    } else {
        return false;
    }
};

// Check if a cart item is present in a cart item array
export const isItemInCart = (item, items) => {
    return items.some((elem, index) => {
        if (isSameItem(elem, item)) {
            items[index].count += 1;
            return true;
        }
        return false;
    });
};

// Create a cart item from a product with count of 1 and default attributes
export const productToItem = (product) => {
    let newItemAttributes = product.attributes.map((attribute) => {
        let attributeItem = attribute.items.map((item, index) => {
            let selectedValue = false;
            if (index === 0) {
                selectedValue = true;
            }
            return { ...item, selected: selectedValue };
        });
        return { ...attribute, items: attributeItem };
    });
    const newItem = {
        ...product,
        count: 1,
        attributes: newItemAttributes,
    };
    return newItem;
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

// Remove one cartItem from cart items array and return the new array
export const removeItemInCart = (itemToRemove, cartItems) => {
    let index = cartItems.findIndex((cartItem) => {
        return isSameItem(itemToRemove, cartItem);
    });
    if (index > -1) {
        if (cartItems[index].count <= 1) cartItems.splice(index, 1);
        else cartItems[index].count--;
    }
    return cartItems;
};
