import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/headerCart.module.scss";
import { computeCartTotal, countCartItems } from "../../util/cartItemUtil";
import { ReactComponent as HeaderCartLogo } from "../../images/emptyCart.svg";
import Price from "../general/price";

class HeaderCart extends React.Component {
    minicartClicked = () => {
        const { isMinicartOpen, setMinicartState } = this.props;
        setMinicartState(!isMinicartOpen);
    };

    viewCartClicked = () => {
        const { setMinicartState } = this.props;
        setMinicartState(false);
    };

    renderMinicartItemsCounter() {
        const { cart } = this.props;

        return (
            <div className={style.itemsCounter}>
                <span className={style.itemsCounterBold}>My Bag,</span>
                <span> {cart.length} items</span>
            </div>
        );
    }

    renderMinicartButtons() {
        return (
            <div className={style.buttonsContainer}>
                <Link to="/cart">
                    <button
                        className={style.viewButton}
                        onClick={this.viewCartClicked}
                    >
                        VIEW BAG
                    </button>
                </Link>

                <button className={style.checkOutButton}>CHECK OUT</button>
            </div>
        );
    }

    renderMinicartTotal() {
        const { cart, selectedCurrency } = this.props;
        const totalPrice = computeCartTotal(cart, selectedCurrency);

        return (
            <div className={style.total}>
                <span className={style.totalText}>Total</span>

                <Price
                    currency={selectedCurrency}
                    price={totalPrice}
                    styleMod="3"
                />
            </div>
        );
    }

    renderMinicart() {
        const { cartItems: CartItems } = this.props;

        return (
            <div className={style.minicart}>
                {this.renderMinicartItemsCounter()}

                <CartItems
                    styleMod="1"
                    filterAttributes={filterAttributes}
                    filterAttributesHeader={filterAttributesHeader}
                />

                {this.renderMinicartTotal()}
                {this.renderMinicartButtons()}
            </div>
        );
    }

    renderIfMinicartOpen(content) {
        const { isMinicartOpen } = this.props;
        return isMinicartOpen && content;
    }

    renderCartCountCircle() {
        const { cart } = this.props;
        const isEmpty = cart.length <= 0;

        return (
            !isEmpty && (
                <div className={style.cartCountCircle}>
                    {countCartItems(cart)}
                </div>
            )
        );
    }
    renderHeaderCartButton() {
        return (
            <button className={style.cartButton} onClick={this.minicartClicked}>
                <div className={style.cartLogoContainer}>
                    <HeaderCartLogo className={style.cartLogo} />

                    {this.renderCartCountCircle()}
                </div>
            </button>
        );
    }

    render() {
        return (
            <div className={style.cartContainer}>
                {this.renderHeaderCartButton()}

                {this.renderIfMinicartOpen(this.renderMinicart())}
            </div>
        );
    }
}

const filterAttributes = [];
const filterAttributesHeader = ["Size", "Color", "Capacity"];

export default HeaderCart;
