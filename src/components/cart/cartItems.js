import React from "react";
import { Link } from "react-router-dom";
import baseStyle from "./styles/cartItems.module.scss";
import style1 from "./styles/cartItems1.module.scss";
import style2 from "./styles/cartItems2.module.scss";
import { productPriceSelector } from "../../store/selectors";
import ImageCarousel from "./imageCarousel";
import AttributesPicker from "../general/attributesPicker";
import Price from "../general/price";

class CartItems extends React.Component {
    addToCartClicked = (cartItem) => {
        this.props.addItem(cartItem);
    };
    removeItemClicked = (cartItem) => {
        this.props.removeItem(cartItem);
    };

    getStyleMod = (styleMod) => {
        switch (styleMod) {
            case "1":
                return style1;
            case "2":
                return style2;
            default:
                return style1;
        }
    };

    render() {
        const {
            cartItems,
            selectedCurrency,
            selectAttribute,
            styleMod,
            filterAttributes,
            filterAttributesHeader,
        } = this.props;

        const style = this.getStyleMod(styleMod);

        return (
            <div>
                {cartItems.map((cartItem, index) => {
                    const price = productPriceSelector(
                        cartItem,
                        selectedCurrency
                    );
                    return (
                        <div
                            key={index}
                            className={`${baseStyle.item} ${style.item}`}
                        >
                            <div className={style.namePrice}>
                                <div className={style.brand}>
                                    <Link to={"/product/" + cartItem.id}>
                                        {cartItem.brand}
                                    </Link>
                                </div>
                                <div className={style.name}>
                                    <Link to={"/product/" + cartItem.id}>
                                        {cartItem.name}
                                    </Link>
                                </div>
                                <div className={style.price}>
                                    <Price
                                        currency={selectedCurrency}
                                        price={price.amount}
                                    />
                                </div>
                            </div>
                            <div className={baseStyle.attributes}>
                                <AttributesPicker
                                    product={cartItem}
                                    styleMod={styleMod}
                                    selectAttribute={selectAttribute}
                                    filterAttributes={filterAttributes}
                                    filterAttributesHeader={
                                        filterAttributesHeader
                                    }
                                />
                            </div>
                            <button
                                className={`${baseStyle.addItem} ${baseStyle.button} ${style.button}`}
                                onClick={() => this.addToCartClicked(cartItem)}
                            />
                            <div
                                className={`${baseStyle.countItems} ${style.countItems}`}
                            >
                                {cartItem.count}
                            </div>
                            <button
                                className={`${baseStyle.removeItem} ${baseStyle.button} ${style.button}`}
                                onClick={() => this.removeItemClicked(cartItem)}
                            />
                            <div
                                className={`${baseStyle.image} ${style.image}`}
                            >
                                <ImageCarousel
                                    images={cartItem.gallery}
                                    isNavigable={styleMod === "2"}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

CartItems.defaultProps = {
    styleMod: "1",
    filterAttributes: [],
    filterAttributesHeader: [],
};

export default CartItems;
