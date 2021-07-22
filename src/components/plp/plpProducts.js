import React from "react";
import style from "./styles/plpProducts.module.scss";

class PlpProducts extends React.Component {
    render() {
        const { products, plpProductCard: PlpProductCard } = this.props;

        return (
            <div className={style.productsContainer}>
                {products.map((product) => {
                    return (
                        <PlpProductCard key={product.id} product={product} />
                    );
                })}
            </div>
        );
    }
}

export default PlpProducts;
