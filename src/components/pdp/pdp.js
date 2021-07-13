import React from "react";
import parse from "html-react-parser";
import styles from "./styles/pdp.module.scss";
import convertToSymbol from "../../util/currencyConverter";
import { productPriceSelector } from "../../store/selectors";
import { initAPI, getAllProductsAPI } from "../../util/api";

class Pdp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imageDisplayed: this.props.product.gallery[0] };
    }

    componentDidMount() {
        if (typeof this.props.product === "undefined") {
            initAPI();
            getAllProductsAPI(this.props.match.params.productId).then(
                (product) => {
                    this.props.setAllProducts(product);
                }
            );
        }
    }

    imagePicked = (image) => {
        this.setState({ imageDisplayed: image });
    };
    addToCartClicked = (product) => {
        this.props.addItem(product);
    };
    render() {
        if (typeof this.props.product === "undefined") {
            return (
                <div>
                    <h1>Sorry, this product is not available.</h1>
                </div>
            );
        }
        const price = productPriceSelector(
            this.props.product,
            this.props.selectedCurrency
        );
        return (
            <div className={styles.pdpContainer}>
                <div className={styles.imagePicker}>
                    {this.props.product.gallery.map((image, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => this.imagePicked(image)}
                            >
                                <img src={image} alt=""></img>
                            </button>
                        );
                    })}
                </div>
                <div className={styles.mainImageContainer}>
                    <img src={this.state.imageDisplayed} alt=""></img>
                </div>
                <div className={styles.productInfoContainer}>
                    <div className={styles.productTitle}>
                        <div className={styles.productTitleBrand}>Appolo</div>
                        <div className={styles.productTitleName}>
                            {this.props.product.name}
                        </div>
                    </div>
                    <div className={styles.priceHeader}>PRICE:</div>
                    <div className={styles.price}>
                        {convertToSymbol(price.currency) + price.amount}
                    </div>
                    <button
                        className={styles.addToCartButton}
                        onClick={() =>
                            this.addToCartClicked(this.props.product)
                        }
                    >
                        ADD TO CART
                    </button>
                    <div className={styles.productDescription}>
                        {parse(this.props.product.description)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pdp;
