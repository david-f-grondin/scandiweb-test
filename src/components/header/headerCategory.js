import React from "react";
import styles from "./styles/headerCategory.module.scss";

class HeaderCategory extends React.Component {
    handleClick = (e) => {
        this.props.selectCategory(this.props.category);
    };
    render() {
        const classes = `${styles.category} ${
            this.props.selected ? styles.selected : ""
        }`;
        return (
            <button className={classes} onClick={this.handleClick}>
                <span>{this.props.category}</span>
            </button>
        );
    }
}

export default HeaderCategory;
