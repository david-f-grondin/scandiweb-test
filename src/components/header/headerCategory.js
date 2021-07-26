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
        const categoryUpperCase = category.toUpperCase();
        const categoryButtonClassName = `
            ${style.category} 
            ${selected ? style.selected : ""}
        `;

        return (
            <button
                className={categoryButtonClassName}
                onClick={this.handleClick}
            >
                <span>{categoryUpperCase}</span>
            </button>
        );
    }
}

export default HeaderCategory;
