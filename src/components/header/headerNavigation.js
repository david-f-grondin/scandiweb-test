import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/headerNavigation.module.scss";

class HeaderNavigation extends React.Component {
    renderCategory(category) {
        const { selectedCategory, headerCategory: HeaderCategory } = this.props;
        const isSelectedCategory = category === selectedCategory;

        return (
            <HeaderCategory
                key={category}
                category={category}
                selected={isSelectedCategory}
            />
        );
    }

    renderCategories() {
        const { categories } = this.props;

        return categories.map((category) => {
            return this.renderCategory(category);
        });
    }

    render() {
        return (
            <div className={style.headerNavigation}>
                <Link to="/">{this.renderCategories()}</Link>
            </div>
        );
    }
}

export default HeaderNavigation;
