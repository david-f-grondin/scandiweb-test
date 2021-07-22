import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/headerCart.module.scss";
import convertToSymbol from "../../util/currencyConverter";
import { computeCartTotal, countCartItems } from "../../util/cartItemUtil";
import { ReactComponent as HeaderCartLogo } from "../../images/emptyCart.svg";

class HeaderCart extends React.Component {
    minicartClicked = () => {
        const { isMinicartOpen, setMinicartState } = this.props;
        setMinicartState(!isMinicartOpen);
    };

    viewCartClicked = () => {
        const { setMinicartState } = this.props;
        setMinicartState(false);
    };

    render() {
        const {
            cart,
            isMinicartOpen,
            selectedCurrency,
            cartItems: CartItems,
        } = this.props;

        return (
            <div className={style.cartContainer}>
                <button
                    className={style.cartButton}
                    onClick={this.minicartClicked}
                >
                    <div className={style.cartLogoContainer}>
                        <HeaderCartLogo className={style.cartLogo} />
                        {cart.length > 0 && (
                            <div className={style.cartCountCircle}>
                                {countCartItems(cart)}
                            </div>
                        )}
                    </div>
                </button>
                {isMinicartOpen && (
                    <div className={style.minicart}>
                        <div className={style.itemsCounter}>
                            <span className={style.itemsCounterBold}>
                                My Bag,
                            </span>
                            <span> {cart.length} items</span>
                        </div>
                        <CartItems
                            styleMod="1"
                            filterAttributes={filterAttributes}
                            filterAttributesHeader={filterAttributesHeader}
                        />
                        <div className={style.total}>
                            <span className={style.totalText}>Total</span>
                            <span className={style.totalValue}>
                                {convertToSymbol(selectedCurrency) +
                                    computeCartTotal(
                                        cart,
                                        selectedCurrency
                                    ).toFixed(2)}
                            </span>
                        </div>
                        <div className={style.buttonsContainer}>
                            <Link to="/cart">
                                <button
                                    className={style.viewButton}
                                    onClick={this.viewCartClicked}
                                >
                                    VIEW BAG
                                </button>
                            </Link>
                            <button className={style.checkOutButton}>
                                CHECK OUT
                            </button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}

const filterAttributes = [];
const filterAttributesHeader = ["Size", "Color", "Capacity"];

export default HeaderCart;
