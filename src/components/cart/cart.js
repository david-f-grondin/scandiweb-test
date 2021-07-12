import React from "react";
import styles from "./styles/cart.module.scss";

class Cart extends React.Component {
    render() {
        let { cartItems: CartItems } = this.props;
        return (
            <div className={styles.cartContainer}>
                <div className={styles.cartTitle}>CART</div>
                <CartItems styleMod="2" />
            </div>
        );
    }
}

export default Cart;
