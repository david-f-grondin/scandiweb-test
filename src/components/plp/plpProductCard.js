import React from "react";
import { Link, withRouter } from "react-router-dom";
import style from "./styles/plpProductCard.module.scss";
import cartLogo from "../../images/emptyCart.svg";
import convertToSymbol from "../../util/currencyConverter";
import { productPriceSelector } from "../../store/selectors";
import { canBeAddedToCart } from "../../util/cartItemUtil";

class PlpProductCard extends React.Component {
    cartButtonClicked = () => {
        const { product, history, addItem } = this.props;

        if (canBeAddedToCart(product)) {
            addItem(product);
        } else {
            history.push("/product/" + product.id);
        }
    };

    render() {
        const { product, selectedCurrency } = this.props;
        const price = productPriceSelector(product, selectedCurrency);

        return (
            <div className={style.productsCard}>
                <div className={style.productImageContainer}>
                    <Link to={"/product/" + product.id}>
                        <img
                            className={`${style.productImage} ${
                                !product.inStock
                                    ? style.productImageOutOfStock
                                    : ""
                            }`}
                            src={product.gallery[0]}
                            alt=""
                        />
                    </Link>

                    {!product.inStock ? (
                        <span className={style.outOfStockText}>
                            OUT OF STOCK
                        </span>
                    ) : (
                        <button
                            className={style.circle}
                            onClick={this.cartButtonClicked}
                        >
                            <img src={cartLogo} alt="" />
                        </button>
                    )}
                </div>
                <div className={style.productTitle}>
                    <Link to={"/product/" + product.id} className={style.link}>
                        {product.brand + " " + product.name}
                    </Link>
                </div>
                <div className={style.price}>
                    {convertToSymbol(price.currency) + price.amount.toFixed(2)}
                </div>
            </div>
        );
    }
}

export default withRouter(PlpProductCard);
