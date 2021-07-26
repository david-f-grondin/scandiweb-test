import React from "react";
import { Link, withRouter } from "react-router-dom";
import style from "./styles/plpProductCard.module.scss";
import cartLogo from "../../images/emptyCart.svg";
import { productPriceSelector } from "../../store/selectors";
import { canBeAddedToCart } from "../../util/cartItemUtil";
import Price from "../general/price";

class PlpProductCard extends React.Component {
    cartButtonClicked = () => {
        const { product, history, addItem } = this.props;

        if (canBeAddedToCart(product)) {
            addItem(product);
        } else {
            history.push("/product/" + product.id);
        }
    };

    renderProductPrice() {
        const { product, selectedCurrency } = this.props;
        const price = productPriceSelector(product, selectedCurrency);

        return (
            <Price
                currency={selectedCurrency}
                price={price.amount}
                styleMod="1"
            />
        );
    }

    renderOutOfStockText() {
        return <span className={style.outOfStockText}>OUT OF STOCK</span>;
    }

    renderCartButton() {
        return (
            <button className={style.circle} onClick={this.cartButtonClicked}>
                <img src={cartLogo} alt="" />
            </button>
        );
    }

    renderProductImage() {
        const { id, gallery, inStock } = this.props.product;
        const linkToProduct = "/product/" + id;
        const imageClassName = `
            ${style.productImage} 
            ${!inStock ? style.productImageOutOfStock : ""}
        `;

        return (
            <Link to={linkToProduct}>
                <img className={imageClassName} src={gallery[0]} alt="" />
            </Link>
        );
    }

    renderProductTitle() {
        const { id, brand, name } = this.props.product;
        const linkToProduct = "/product/" + id;
        const productTitle = brand + " " + name;

        return (
            <div className={style.productTitle}>
                <Link to={linkToProduct} className={style.link}>
                    {productTitle}
                </Link>
            </div>
        );
    }

    render() {
        const { inStock } = this.props.product;
        const productCardClassName = `
            ${style.productCard} 
            ${!inStock ? style.productCardOutOfStock : ""}
        `;

        return (
            <div className={productCardClassName}>
                <div className={style.productImageContainer}>
                    {this.renderProductImage()}

                    {inStock
                        ? this.renderCartButton()
                        : this.renderOutOfStockText()}
                </div>

                {this.renderProductTitle()}

                {this.renderProductPrice()}
            </div>
        );
    }
}

export default withRouter(PlpProductCard);
