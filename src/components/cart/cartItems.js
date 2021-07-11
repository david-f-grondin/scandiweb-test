import React from "react";
import styles from "./styles/cartItems.module.scss";
import convertToSymbol from "../../util/currencyConverter";
import { productPriceSelector } from "../../store/selectors";

class CartItems extends React.Component {
    addToCartClicked = (cartItem) => {
        this.props.addItem(cartItem);
    };
    removeItemClicked = (cartItem) => {
        this.props.removeItem(cartItem);
    };
    render() {
        return (
            <div className={styles.cartItems}>
                {this.props.cartItems.map((cartItem, index) => {
                    const price = productPriceSelector(
                        cartItem,
                        this.props.selectedCurrency
                    );
                    return (
                        <div key={index} className={styles.item}>
                            <div className={styles.namePrice}>
                                <div className={styles.brand}>Apollo</div>
                                <div className={styles.name}>
                                    {cartItem.name}
                                </div>
                                <div className={styles.price}>
                                    {convertToSymbol(price.currency) +
                                        cartItem.count * price.amount}
                                </div>
                            </div>
                            <div className={styles.attributes}>
                                <button className={styles.attributesButton}>
                                    XS
                                </button>
                                <button className={styles.attributesButton}>
                                    M
                                </button>
                            </div>
                            <button
                                className={`${styles.addItem} ${styles.button}`}
                                onClick={() => this.addToCartClicked(cartItem)}
                            />
                            <div className={styles.countItems}>
                                {cartItem.count}
                            </div>
                            <button
                                className={`${styles.removeItem} ${styles.button}`}
                                onClick={() => this.removeItemClicked(cartItem)}
                            />
                            <div className={styles.image}>
                                <img src={cartItem.gallery[0]} alt=""></img>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CartItems;
