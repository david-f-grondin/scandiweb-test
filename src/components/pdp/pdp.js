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
        this.state = { imageDisplayedIndex: 0 };
    }

    componentDidMount() {
        const { product, match, setAllProducts } = this.props;
        const { productId } = match.params;

        // In case the app start directly on the pdp page
        if (typeof product === "undefined") {
            getProductByIdAPI(productId).then((product) => {
                if (product) setAllProducts([product]);
            });
        }
    }

    imagePicked = (index) => {
        this.setState({ imageDisplayedIndex: index });
    };

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

    renderProductInfo() {
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

    renderMainImage() {
        const { gallery } = this.props.product;
        const { imageDisplayedIndex } = this.state;
        const imageDisplayed = gallery[imageDisplayedIndex];

        return (
            <div className={style.mainImageContainer}>
                <img src={imageDisplayed} alt="" />
            </div>
        );
    }

    renderImagePickerButton(image, index) {
        return (
            <button key={index} onClick={() => this.imagePicked(index)}>
                <img src={image} alt="" />
            </button>
        );
    }

    renderImagePicker() {
        const { gallery } = this.props.product;

        return (
            <div className={style.imagePicker}>
                {gallery.map((image, index) => {
                    return this.renderImagePickerButton(image, index);
                })}
            </div>
        );
    }

    renderProductUnavailable() {
        return (
            <div>
                <h1>Sorry, this product is not available.</h1>
            </div>
        );
    }

    renderPdp() {
        return (
            <div className={style.pdpContainer}>
                {this.renderImagePicker()}

                {this.renderMainImage()}

                {this.renderProductInfo()}
            </div>
        );
    }

    renderPdpIfProductDefined() {
        const { product } = this.props;

        return typeof product !== "undefined"
            ? this.renderPdp()
            : this.renderProductUnavailable();
    }

    render() {
        return this.renderPdpIfProductDefined();
    }
}

export default Pdp;
