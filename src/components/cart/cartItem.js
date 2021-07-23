import React from "react";
import { Link } from "react-router-dom";
import baseStyle from "./styles/cartItem.module.scss";
import style1 from "./styles/cartItem1.module.scss";
import style2 from "./styles/cartItem2.module.scss";
import { productPriceSelector } from "../../store/selectors";
import ImageCarousel from "./imageCarousel";
import AttributesPicker from "../general/attributesPicker";
import Price from "../general/price";

class CartItem extends React.Component {
    getStyleMod = () => {
        const { styleMod } = this.props;
        switch (styleMod) {
            case "1":
                return style1;
            case "2":
                return style2;
            default:
                return style1;
        }
    };

    addToCartClicked = (cartItem) => {
        this.props.addItem(cartItem);
    };

    removeItemClicked = (cartItem) => {
        this.props.removeItem(cartItem);
    };

    render() {
        const {
            cartItem,
            styleMod,
            selectedCurrency,
            selectAttribute,
            filterAttributes,
            filterAttributesHeader,
        } = this.props;
        const style = this.getStyleMod();
        const price = productPriceSelector(cartItem, selectedCurrency);

        return (
            <div className={`${baseStyle.item} ${style.item}`}>
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
                    <div className={style.priceContainer}>
                        <Price
                            currency={selectedCurrency}
                            price={price.amount}
                            styleMod={styleMod}
                        />
                    </div>
                </div>
                <div className={baseStyle.attributes}>
                    <AttributesPicker
                        product={cartItem}
                        styleMod={styleMod}
                        selectAttribute={selectAttribute}
                        filterAttributes={filterAttributes}
                        filterAttributesHeader={filterAttributesHeader}
                    />
                </div>
                <button
                    className={`${baseStyle.addItem} ${baseStyle.button} ${style.button}`}
                    onClick={() => this.addToCartClicked(cartItem)}
                />
                <div className={`${baseStyle.countItems} ${style.countItems}`}>
                    {cartItem.count}
                </div>
                <button
                    className={`${baseStyle.removeItem} ${baseStyle.button} ${style.button}`}
                    onClick={() => this.removeItemClicked(cartItem)}
                />
                <div className={`${baseStyle.image} ${style.image}`}>
                    <ImageCarousel
                        images={cartItem.gallery}
                        isNavigable={styleMod === "2"}
                    />
                </div>
            </div>
        );
    }
}

CartItem.defaultProps = {
    styleMod: "1",
    filterAttributes: [],
    filterAttributesHeader: [],
};

export default CartItem;
