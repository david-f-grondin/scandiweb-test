import React from "react";

class CartItems extends React.Component {
    renderCartItems() {
        const {
            cartItem: CartItem,
            cartItems,
            styleMod,
            filterAttributes,
            filterAttributesHeader,
        } = this.props;

        return cartItems.map((cartItem, index) => {
            return (
                <CartItem
                    key={index}
                    cartItem={cartItem}
                    styleMod={styleMod}
                    filterAttributes={filterAttributes}
                    filterAttributesHeader={filterAttributesHeader}
                />
            );
        });
    }

    render() {
        return <div>{this.renderCartItems()}</div>;
    }
}

CartItems.defaultProps = {
    styleMod: "1",
    filterAttributes: [],
    filterAttributesHeader: [],
};

export default CartItems;
