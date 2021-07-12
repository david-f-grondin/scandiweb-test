import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/plpProductCard.module.scss";
import cartLogo from "../../images/emptyCart.svg";
import convertToSymbol from "../../util/currencyConverter";
import { productPriceSelector } from "../../store/selectors";

class PlpProductCard extends React.Component {
    render() {
        let price = productPriceSelector(
            this.props.product,
            this.props.selectedCurrency
        );
        return (
            <div className={styles.productsCard}>
                <div className={styles.productImageContainer}>
                    <Link to={"/product/" + this.props.product.id}>
                        <img
                            className={styles.productImage}
                            src={this.props.product.gallery[0]}
                            alt=""
                        />
                        <button className={styles.circle}>
                            <img src={cartLogo} alt="" />
                        </button>
                    </Link>
                </div>
                <div className={styles.productTitle}>
                    <Link to={"/product/" + this.props.product.id}>
                        {this.props.product.name}
                    </Link>
                </div>
                <div className={styles.price}>
                    <Link to={"/product/" + this.props.product.id}>
                        {convertToSymbol(price.currency) + price.amount}
                    </Link>
                </div>
            </div>
        );
    }
}

export default PlpProductCard;
