import React from "react";
import { Link } from "react-router-dom";
import style from "./styles/header.module.scss";
import { ReactComponent as HeaderLogo } from "../../images/a-logo.svg";

class Header extends React.Component {
    render() {
        const {
            headerNavigation: HeaderNavigation,
            headerActions: HeaderActions,
        } = this.props;

        return (
            <div className={style.header}>
                <HeaderNavigation />
                <Link to="/">
                    <button className={style.headerLogoButton}>
                        <HeaderLogo />
                    </button>
                </Link>
                <HeaderActions />
            </div>
        );
    }
}

export default Header;
