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

    render() {
        const { product, selectedCurrency } = this.props;
        const price = productPriceSelector(product, selectedCurrency);

        return (
            <div className={style.productCard}>
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
                    <Price currency={selectedCurrency} price={price.amount} />
                </div>
            </div>
        );
    }
}

export default withRouter(PlpProductCard);
