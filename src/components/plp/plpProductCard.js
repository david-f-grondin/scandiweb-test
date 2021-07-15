import React from "react";
import { Link, withRouter } from "react-router-dom";
import styles from "./styles/plpProductCard.module.scss";
import cartLogo from "../../images/emptyCart.svg";
import convertToSymbol from "../../util/currencyConverter";
import { productPriceSelector } from "../../store/selectors";
import AttributesPicker from "../general/attributesPicker";
import { canBeAddedToCart } from "../../util/cartItemUtil";

class PlpProductCard extends React.Component {
    cartButtonClicked = () => {
        if (canBeAddedToCart(this.props.product)) {
            this.props.addItem(this.props.product);
            this.props.history.push("/cart");
        } else {
            this.props.history.push("/product/" + this.props.product.id);
        }
    };
    render() {
        const price = productPriceSelector(
            this.props.product,
            this.props.selectedCurrency
        );
        return (
            <div className={styles.productsCard}>
                <div className={styles.productImageContainer}>
                    <Link to={"/product/" + this.props.product.id}>
                        <img
                            className={`${styles.productImage} ${
                                !this.props.product.inStock
                                    ? styles.productImageOutOfStock
                                    : ""
                            }`}
                            src={this.props.product.gallery[0]}
                            alt=""
                        />
                    </Link>

                    {!this.props.product.inStock ? (
                        <span className={styles.outOfStockText}>
                            OUT OF STOCK
                        </span>
                    ) : (
                        <button
                            className={styles.circle}
                            onClick={this.cartButtonClicked}
                        >
                            <img src={cartLogo} alt="" />
                        </button>
                    )}
                </div>
                <div className={styles.productTitle}>
                    <Link
                        to={"/product/" + this.props.product.id}
                        className={styles.link}
                    >
                        {this.props.product.brand +
                            " " +
                            this.props.product.name}
                    </Link>
                </div>
                <div className={styles.priceSwatchContainer}>
                    <div className={styles.price}>
                        {convertToSymbol(price.currency) +
                            price.amount.toFixed(2)}
                    </div>
                    <div className={styles.swatchContainer}>
                        <AttributesPicker
                            styleMod="1"
                            product={this.props.product}
                            selectAttribute={this.props.selectAttribute}
                            filterAttributesByType={filterAttributesByType}
                            filterAttributesHeader={filterAttributesHeader}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const filterAttributesByType = ["text"];
const filterAttributesHeader = ["Color"];

export default withRouter(PlpProductCard);
