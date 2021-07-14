import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/headerCart.module.scss";
import convertToSymbol from "../../util/currencyConverter";
import { computeCartTotal } from "../../util/cartItemUtil";
import { ReactComponent as HeaderCartLogo } from "../../images/emptyCart.svg";

class HeaderCart extends React.Component {
    minicartClicked = () => {
        this.props.setMinicartState(!this.props.isMinicartOpen);
    };
    viewCartClicked = () => {
        this.props.setMinicartState(false);
    };
    render() {
        let { cartItems: CartItems } = this.props;
        const filterAttributes = ["With USB 3 ports", "Touch ID in keyboard"];
        const filterAttributesHeader = ["Size", "Color", "Capacity"];

        return (
            <div className={styles.cartContainer}>
                <button
                    className={styles.cartButton}
                    onClick={this.minicartClicked}
                >
                    <div className={styles.cartLogoContainer}>
                        <HeaderCartLogo className={styles.cartLogo} />
                        {this.props.cart.length > 0 ? (
                            <div className={styles.cartCountCircle}>
                                {this.props.cart.length}
                            </div>
                        ) : null}
                    </div>
                </button>
                {this.props.isMinicartOpen ? (
                    <div className={styles.minicart}>
                        <div className={styles.itemsCounter}>
                            <span className={styles.itemsCounterBold}>
                                My Bag,
                            </span>
                            <span> {this.props.cart.length} items</span>
                        </div>
                        <CartItems
                            styleMod="1"
                            filterAttributes={filterAttributes}
                            filterAttributesHeader={filterAttributesHeader}
                        />
                        <div className={styles.total}>
                            <span className={styles.totalText}>Total</span>
                            <span className={styles.totalValue}>
                                {convertToSymbol(this.props.selectedCurrency) +
                                    computeCartTotal(
                                        this.props.cart,
                                        this.props.selectedCurrency
                                    ).toFixed(2)}
                            </span>
                        </div>
                        <div className={styles.buttonsContainer}>
                            <Link to="/cart">
                                <button
                                    className={styles.viewButton}
                                    onClick={this.viewCartClicked}
                                >
                                    VIEW BAG
                                </button>
                            </Link>
                            <button className={styles.checkOutButton}>
                                CHECK OUT
                            </button>
                        </div>
                    </div>
                ) : null}
            </div>
        );
    }
}

export default HeaderCart;
