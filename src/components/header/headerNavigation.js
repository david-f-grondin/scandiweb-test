import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/headerNavigation.module.scss";

class HeaderNavigation extends React.Component {
    render() {
        let { headerCategory: HeaderCategory } = this.props;
        return (
            <div className={styles.headerNavigation}>
                <Link to="/">
                    {this.props.categories.map((category) => {
                        return (
                            <HeaderCategory
                                key={category}
                                category={category}
                                selected={
                                    category === this.props.selectedCategory
                                        ? true
                                        : false
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
