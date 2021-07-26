import React from "react";
import style from "./styles/headerCart.module.scss";
import { ReactComponent as HeaderCartLogo } from "../../images/emptyCart.svg";

class HeaderCart extends React.Component {
    minicartClicked = () => {
        const { isMinicartOpen, setMinicartState } = this.props;
        setMinicartState(!isMinicartOpen);
    };

    renderIfMinicartOpen(content) {
        const { isMinicartOpen } = this.props;
        return isMinicartOpen && content;
    }

    renderCartCountCircle() {
        const { cartItemsCount } = this.props;
        const isEmpty = cartItemsCount <= 0;

        return (
            !isEmpty && (
                <div className={style.cartCountCircle}>{cartItemsCount}</div>
            )
        );
    }

    renderHeaderCartButton() {
        return (
            <button className={style.cartButton} onClick={this.minicartClicked}>
                <div className={style.cartLogoContainer}>
                    <HeaderCartLogo className={style.cartLogo} />

                    {this.renderCartCountCircle()}
                </div>
            </button>
        );
    }

    render() {
        const { minicart: Minicart } = this.props;

        return (
            <div className={style.cartContainer}>
                {this.renderHeaderCartButton()}

                {this.renderIfMinicartOpen(<Minicart />)}
            </div>
        );
    }
}

export default HeaderCart;
