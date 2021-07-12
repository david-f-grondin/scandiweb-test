import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles/header.module.scss";
import { ReactComponent as HeaderLogo } from "../../images/a-logo.svg";

class Header extends React.Component {
    render() {
        let {
            headerNavigation: HeaderNavigation,
            headerActions: HeaderActions,
        } = this.props;
        return (
            <div className={styles.header}>
                <HeaderNavigation />
                <Link to="/">
                    <button className={styles.headerLogoButton}>
                        <HeaderLogo />
                    </button>
                </Link>
                <HeaderActions />
            </div>
        );
    }
}

export default Header;
