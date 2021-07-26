import React from "react";
import style from "./styles/headerCurrency.module.scss";
import { ReactComponent as CurrencyArrow } from "../../images/currencyArrow.svg";
import convertToSymbol from "../../util/currencyConverter";

class HeaderCurrency extends React.Component {
    constructor(props) {
        super(props);

        this.currencySwitcherRef = React.createRef();
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    openCurrencySwitcher() {
        document.addEventListener("mousedown", this.handleClickOutside);
        this.props.setCurrencySwitcherState(true);
    }

    closeCurrencySwitcher = () => {
        document.removeEventListener("mousedown", this.handleClickOutside);
        this.props.setCurrencySwitcherState(false);
    };

    handleClickOutside(event) {
        const { currencySwitcherRef } = this;
        const isClickOutside =
            currencySwitcherRef &&
            !currencySwitcherRef.current.contains(event.target);

        if (isClickOutside) {
            this.closeCurrencySwitcher();
        }
    }

    currencyClicked = (e) => {
        const { isCurencySwitcherOpen } = this.props;

        if (isCurencySwitcherOpen) this.closeCurrencySwitcher();
        else this.openCurrencySwitcher();
    };

    renderCurrencySwitcher() {
        const { currencySwitcher: CurrencySwitcher } = this.props;

        return (
            <CurrencySwitcher
                closeCurrencySwitcher={this.closeCurrencySwitcher}
            />
        );
    }

    renderIfCurrencySwitcherOpen(content) {
        const { isCurencySwitcherOpen } = this.props;

        return isCurencySwitcherOpen && content;
    }

    renderHeaderCurrencyButton() {
        const { selectedCurrency, isCurencySwitcherOpen } = this.props;
        const selectedCurrencySymbol = convertToSymbol(selectedCurrency);
        const currencyArrowClassName = isCurencySwitcherOpen
            ? style.arrowUp
            : "";

        return (
            <button
                className={style.currencyButton}
                onClick={this.currencyClicked}
            >
                <span className={style.currency}>{selectedCurrencySymbol}</span>

                <CurrencyArrow className={currencyArrowClassName} />
            </button>
        );
    }

    render() {
        return (
            <div
                ref={this.currencySwitcherRef}
                className={style.currencyContainer}
            >
                {this.renderHeaderCurrencyButton()}

                {this.renderIfCurrencySwitcherOpen(
                    this.renderCurrencySwitcher()
                )}
            </div>
        );
    }
}

export default HeaderCurrency;
