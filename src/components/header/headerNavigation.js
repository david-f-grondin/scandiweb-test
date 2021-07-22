import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/headerNavigation.module.scss";

class HeaderNavigation extends React.Component {
    render() {
        const {
            categories,
            selectedCategory,
            headerCategory: HeaderCategory,
        } = this.props;

        return (
            <div className={style.headerNavigation}>
                <Link to="/">
                    {categories.map((category) => {
                        return (
                            <HeaderCategory
                                key={category}
                                category={category}
                                selected={
                                    category === selectedCategory ? true : false
                                }
                            />
                        );
                    })}
                </Link>
            </div>
        );
    }
}

export default HeaderNavigation;
