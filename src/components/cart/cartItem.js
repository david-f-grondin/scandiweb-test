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
    addToCartClicked = (cartItem) => {
        this.props.addItem(cartItem);
    };

    removeItemClicked = (cartItem) => {
        this.props.removeItem(cartItem);
    };

    getStyleMod() {
        const { styleMod } = this.props;
        switch (styleMod) {
            case "1":
                return style1;
            case "2":
                return style2;
            default:
                return style1;
        }
    }

    renderTitlePrice(style) {
        const { cartItem, styleMod, selectedCurrency } = this.props;
        const price = productPriceSelector(cartItem, selectedCurrency);
        const linkToProduct = "/product/" + cartItem.id;

        return (
            <div className={style.titlePrice}>
                <div className={style.brand}>
                    <Link to={linkToProduct}>{cartItem.brand}</Link>
                </div>

                <div className={style.name}>
                    <Link to={linkToProduct}>{cartItem.name}</Link>
                </div>

                <div className={style.priceContainer}>
                    <Price
                        currency={selectedCurrency}
                        price={price.amount}
                        styleMod={styleMod}
                    />
                </div>
            </div>
        );
    }

    renderAttributes() {
        const {
            cartItem,
            styleMod,
            selectAttribute,
            filterAttributes,
            filterAttributesHeader,
        } = this.props;

        return (
            <div className={baseStyle.attributes}>
                <AttributesPicker
                    product={cartItem}
                    styleMod={styleMod}
                    selectAttribute={selectAttribute}
                    filterAttributes={filterAttributes}
                    filterAttributesHeader={filterAttributesHeader}
                />
            </div>
        );
    }

    renderAddItemButton(style) {
        const { cartItem } = this.props;
        const addItemButtonClassName = `
            ${baseStyle.addItem} 
            ${baseStyle.button} 
            ${style.button}
        `;

        return (
            <button
                className={addItemButtonClassName}
                onClick={() => this.addToCartClicked(cartItem)}
            />
        );
    }

    renderRemoveItemButton(style) {
        const { cartItem } = this.props;
        const removeItemButtonClassName = `
            ${baseStyle.removeItem} 
            ${baseStyle.button} 
            ${style.button}
        `;

        return (
            <button
                className={removeItemButtonClassName}
                onClick={() => this.removeItemClicked(cartItem)}
            />
        );
    }

    renderItemCount(style) {
        const { cartItem } = this.props;
        const countItemClassName = `
            ${baseStyle.countItems}
            ${style.countItems}
        `;

        return <div className={countItemClassName}>{cartItem.count}</div>;
    }

    renderImageCarousel(style) {
        const { cartItem, styleMod } = this.props;
        const imageCarouselClassName = `${baseStyle.image} ${style.image}`;

        return (
            <div className={imageCarouselClassName}>
                <ImageCarousel
                    images={cartItem.gallery}
                    isNavigable={styleMod === "2"}
                />
            </div>
        );
    }

    render() {
        const style = this.getStyleMod();
        const cartItemClassName = `${baseStyle.item} ${style.item}`;

        return (
            <div className={cartItemClassName}>
                {this.renderTitlePrice(style)}

                {this.renderAttributes()}

                {this.renderAddItemButton(style)}

                {this.renderItemCount(style)}

                {this.renderRemoveItemButton(style)}

                {this.renderImageCarousel(style)}
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
