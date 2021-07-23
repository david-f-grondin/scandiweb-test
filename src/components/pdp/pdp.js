import React from "react";
import parse from "html-react-parser";
import style from "./styles/pdp.module.scss";
import { productPriceSelector } from "../../store/selectors";
import { getProductByIdAPI } from "../../util/api";
import AttributesPicker from "../general/attributesPicker";
import { canBeAddedToCart } from "../../util/cartItemUtil";
import Price from "../general/price";

class Pdp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imageDisplayed: 0 };
    }

    componentDidMount() {
        const { product, match, setAllProducts } = this.props;
        const { productId } = match.params;

        // In case the app start directly on the pdp page
        if (typeof product === "undefined") {
            getProductByIdAPI(productId).then((product) => {
                setAllProducts([product]);
            });
        }
    }

    imagePicked = (index) => {
        this.setState({ imageDisplayed: index });
    };

    addToCartClicked = () => {
        const { product, addItem } = this.props;

        if (canBeAddedToCart(product)) {
            addItem(product);
        }
    };

    render() {
        const { product, selectedCurrency, selectAttribute } = this.props;

        if (typeof product === "undefined") {
            return (
                <div>
                    <h1>Sorry, this product is not available.</h1>
                </div>
            );
        }

        const price = productPriceSelector(product, selectedCurrency);

        return (
            <div className={style.pdpContainer}>
                <div className={style.imagePicker}>
                    {product.gallery.map((image, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => this.imagePicked(index)}
                            >
                                <img src={image} alt=""></img>
                            </button>
                        );
                    })}
                </div>
                <div className={style.mainImageContainer}>
                    <img
                        src={product.gallery[this.state.imageDisplayed]}
                        alt=""
                    ></img>
                </div>
                <div className={style.productInfoContainer}>
                    <div className={style.productTitle}>
                        <div className={style.productTitleBrand}>
                            {product.brand}
                        </div>
                        <div className={style.productTitleName}>
                            {product.name}
                        </div>
                    </div>
                    <AttributesPicker
                        styleMod="2"
                        product={product}
                        selectAttribute={selectAttribute}
                    />
                    <div className={style.priceHeader}>PRICE:</div>
                    <div className={style.price}>
                        <Price
                            currency={selectedCurrency}
                            price={price.amount}
                        />
                    </div>
                    {canBeAddedToCart(product) ? (
                        <button
                            className={style.addToCartButton}
                            onClick={this.addToCartClicked}
                        >
                            ADD TO CART
                        </button>
                    ) : (
                        <button className={style.outOfStockButton}>
                            {product.inStock
                                ? "CHOOSE FEATURES"
                                : "OUT OF STOCK"}
                        </button>
                    )}
                    <div className={style.productDescription}>
                        {parse(product.description)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Pdp;
