import React from "react";

class CartItems extends React.Component {
    render() {
        const {
            cartItem: CartItem,
            cartItems,
            styleMod,
            filterAttributes,
            filterAttributesHeader,
        } = this.props;

        return (
            <div>
                {cartItems.map((cartItem, index) => {
                    return (
                        <CartItem
                            key={index}
                            cartItem={cartItem}
                            styleMod={styleMod}
                            filterAttributes={filterAttributes}
                            filterAttributesHeader={filterAttributesHeader}
                        />
                    );
                })}
            </div>
        );
    }
}

CartItems.defaultProps = {
    styleMod: "1",
    filterAttributes: [],
    filterAttributesHeader: [],
};

export default CartItems;
