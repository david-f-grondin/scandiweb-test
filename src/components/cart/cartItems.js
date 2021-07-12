import React from "react";
import baseStyle from "./styles/cartItems.module.scss";
import style1 from "./styles/cartItems1.module.scss";
import style2 from "./styles/cartItems2.module.scss";
import convertToSymbol from "../../util/currencyConverter";
import { productPriceSelector } from "../../store/selectors";
import ItemAttributes from "./itemAttributes";

class CartItems extends React.Component {
    addToCartClicked = (cartItem) => {
        this.props.addItem(cartItem);
    };
    removeItemClicked = (cartItem) => {
        this.props.removeItem(cartItem);
    };
    render() {
        const styleMod = (() => {
            switch (this.props.styleMod) {
                case "1":
                    return style1;
                case "2":
                    return style2;
                default:
                    return style1;
            }
        })();

        return (
            <div>
                {this.props.cartItems.map((cartItem, index) => {
                    const price = productPriceSelector(
                        cartItem,
                        this.props.selectedCurrency
                    );
                    return (
                        <div
                            key={index}
                            className={`${baseStyle.item} ${styleMod.item}`}
                        >
                            <div
                                className={`${baseStyle.namePrice} ${styleMod.namePrice}`}
                            >
                                <div
                                    className={`${baseStyle.brand} ${styleMod.brand}`}
                                >
                                    Apollo
                                </div>
                                <div
                                    className={`${baseStyle.name} ${styleMod.name}`}
                                >
                                    {cartItem.name}
                                </div>
                                <div
                                    className={`${baseStyle.price} ${styleMod.price}`}
                                >
                                    {convertToSymbol(price.currency) +
                                        cartItem.count * price.amount}
                                </div>
                            </div>
                            <div className={baseStyle.attributes}>
                                <ItemAttributes cartItem={cartItem} />
                            </div>
                            <button
                                className={`${baseStyle.addItem} ${baseStyle.button} ${styleMod.button}`}
                                onClick={() => this.addToCartClicked(cartItem)}
                            />
                            <div
                                className={`${baseStyle.countItems} ${styleMod.countItems}`}
                            >
                                {cartItem.count}
                            </div>
                            <button
                                className={`${baseStyle.removeItem} ${baseStyle.button} ${styleMod.button}`}
                                onClick={() => this.removeItemClicked(cartItem)}
                            />
                            <div
                                className={`${baseStyle.image} ${styleMod.image}`}
                            >
                                <div className={baseStyle.helperImage} />
                                <img src={cartItem.gallery[0]} alt="" />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default CartItems;
