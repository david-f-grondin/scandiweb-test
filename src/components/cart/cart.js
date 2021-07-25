import React from "react";
import style from "./styles/cart.module.scss";

class Cart extends React.Component {
    render() {
        const { cartItems: CartItems } = this.props;

        return (
            <div className={style.cartContainer}>
                <div className={style.cartTitle}>CART</div>

                <CartItems
                    styleMod="2"
                    filterAttributesHeader={filterAttributesHeader}
                />
            </div>
        );
    }
}

const filterAttributesHeader = ["Size", "Color", "Capacity"];

export default Cart;
