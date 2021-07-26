import React from "react";
import parse from "html-react-parser";
import style from "./styles/productInfo.module.scss";
import { productPriceSelector } from "../../store/selectors";
import AttributesPicker from "../general/attributesPicker";
import { canBeAddedToCart } from "../../util/cartItemUtil";
import Price from "../general/price";

class ProductInfo extends React.Component {
    addToCartClicked = () => {
        const { product, addItem } = this.props;

        if (canBeAddedToCart(product)) {
            addItem(product);
        }
    };

    renderUnavailableButton() {
        const { inStock } = this.props.product;
        const buttonContent = inStock ? "CHOOSE FEATURES" : "OUT OF STOCK";

        return (
            <button className={style.outOfStockButton}>{buttonContent}</button>
        );
    }

    renderProductDescription() {
        const { description } = this.props.product;
        const parsedDescription = parse(description);

        return (
            <div className={style.productDescription}>{parsedDescription}</div>
        );
    }

    renderAddToCartButton() {
        return (
            <button
                className={style.addToCartButton}
                onClick={this.addToCartClicked}
            >
                ADD TO CART
            </button>
        );
    }

    renderProductInfoButton() {
        const { product } = this.props;

        return canBeAddedToCart(product)
            ? this.renderAddToCartButton()
            : this.renderUnavailableButton();
    }

    renderProductPrice() {
        const { product, selectedCurrency } = this.props;
        const price = productPriceSelector(product, selectedCurrency);

        return (
            <>
                <div className={style.priceHeader}>PRICE:</div>
                <div className={style.priceContainer}>
                    <Price
                        currency={selectedCurrency}
                        price={price.amount}
                        styleMod="2"
                    />
                </div>
            </>
        );
    }

    renderProductTitle() {
        const { brand, name } = this.props.product;

        return (
            <div className={style.productTitle}>
                <div className={style.productTitleBrand}>{brand}</div>
                <div className={style.productTitleName}>{name}</div>
            </div>
        );
    }

    render() {
        const { product, selectAttribute } = this.props;

        return (
            <div className={style.productInfoContainer}>
                {this.renderProductTitle()}

                <AttributesPicker
                    styleMod="2"
                    product={product}
                    selectAttribute={selectAttribute}
                />

                {this.renderProductPrice()}

                {this.renderProductInfoButton()}

                {this.renderProductDescription()}
            </div>
        );
    }
}

export default ProductInfo;
