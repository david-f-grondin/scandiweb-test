import React from "react";
import styles from "./styles/cart.module.scss";

class Cart extends React.Component {
    render() {
        const { cartItems: CartItems } = this.props;
        const filterAttributesHeader = ["Size", "Color", "Capacity"];

        return (
            <div className={styles.cartContainer}>
                <div className={styles.cartTitle}>CART</div>
                <CartItems
                    styleMod="2"
                    filterAttributesHeader={filterAttributesHeader}
                />
            </div>
        );
    }
}

export default Cart;
