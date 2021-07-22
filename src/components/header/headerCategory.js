import React from "react";
import style from "./styles/headerCategory.module.scss";
import { getAllProductsAPI, getProductsByCategoryAPI } from "../../util/api";

class HeaderCategory extends React.Component {
    handleClick = (e) => {
        const { category, selectCategory, setAllProducts } = this.props;

        selectCategory(category);
        if (category === "all") {
            getAllProductsAPI().then((product) => {
                setAllProducts(product);
            });
        } else {
            getProductsByCategoryAPI(category).then((product) => {
                setAllProducts(product);
            });
        }
    };

    render() {
        const { category, selected } = this.props;

        return (
            <button
                className={`${style.category} ${
                    selected ? style.selected : ""
                }`}
                onClick={this.handleClick}
            >
                <span>{category.toUpperCase()}</span>
            </button>
        );
    }
}

export default HeaderCategory;
