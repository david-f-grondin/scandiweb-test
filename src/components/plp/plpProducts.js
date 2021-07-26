import React from "react";
import style from "./styles/plpProducts.module.scss";

class PlpProducts extends React.Component {
    renderProductCards() {
        const { products, plpProductCard: PlpProductCard } = this.props;

        return products.map((product) => {
            return <PlpProductCard key={product.id} product={product} />;
        });
    }

    render() {
        return (
            <div className={style.productsContainer}>
                {this.renderProductCards()}
            </div>
        );
    }
}

export default PlpProducts;
