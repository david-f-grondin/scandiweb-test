import React from "react";
import styles from "./styles/cart.module.scss";

class Cart extends React.Component {
    render() {
        let { cartItems: CartItems } = this.props;
        return (
            <div className={styles.cartContainer}>
                <CartItems />
            </div>
        );
    }
}

export default Cart;
