import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/minicart.module.scss";
import { computeCartTotal } from "../../util/cartItemUtil";
import Price from "../general/price";

class Minicart extends React.Component {
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

    render() {
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
}

const filterAttributes = [];
const filterAttributesHeader = ["Size", "Color", "Capacity"];

export default Minicart;
