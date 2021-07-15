import React from "react";
import styles from "./styles/headerCategory.module.scss";
import { getAllProductsAPI, getProductsByCategoryAPI } from "../../util/api";

class HeaderCategory extends React.Component {
    handleClick = (e) => {
        this.props.selectCategory(this.props.category);

        if (this.props.category === "all") {
            getAllProductsAPI().then((product) => {
                this.props.setAllProducts(product);
            });
        } else {
            getProductsByCategoryAPI(this.props.category).then((product) => {
                this.props.setAllProducts(product);
            });
        }
    };
    render() {
        return (
            <button
                className={`${styles.category} ${
                    this.props.selected ? styles.selected : ""
                }`}
                onClick={this.handleClick}
            >
                <span>{this.props.category.toUpperCase()}</span>
            </button>
        );
    }
}

export default HeaderCategory;
