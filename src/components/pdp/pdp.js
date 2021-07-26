import React from "react";
import style from "./styles/pdp.module.scss";
import { getProductByIdAPI } from "../../util/api";
import ProductInfo from "./productInfo";

class Pdp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { imageDisplayedIndex: 0 };
    }

    componentDidMount() {
        this.fetchProductIfUndefined();
    }

    componentDidUpdate() {
        this.fetchProductIfUndefined();
    }

    fetchProductIfUndefined() {
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

    renderProductInfo() {
        const { product, selectedCurrency, addItem, selectAttribute } =
            this.props;

        return (
            <ProductInfo
                product={product}
                selectedCurrency={selectedCurrency}
                addItem={addItem}
                selectAttribute={selectAttribute}
            />
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
