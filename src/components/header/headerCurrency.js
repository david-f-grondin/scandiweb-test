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

    closeCurrencySwitcher() {
        document.removeEventListener("mousedown", this.handleClickOutside);
        this.props.setCurrencySwitcherState(false);
    }

    handleClickOutside(event) {
        if (
            this.currencySwitcherRef &&
            !this.currencySwitcherRef.current.contains(event.target)
        ) {
            this.closeCurrencySwitcher();
        }
    }

    currencyClicked = (e) => {
        if (this.props.isCurencySwitcherOpen) this.closeCurrencySwitcher();
        else this.openCurrencySwitcher();
    };

    currencyOptionClicked = (currency) => {
        this.props.selectCurrency(currency);
        this.closeCurrencySwitcher();
    };

    render() {
        const { currencies, selectedCurrency, isCurencySwitcherOpen } =
            this.props;

        return (
            <div
                ref={this.currencySwitcherRef}
                className={style.currencyContainer}
            >
                <button
                    className={style.currencyButton}
                    onClick={this.currencyClicked}
                >
                    <span className={style.currency}>
                        {convertToSymbol(selectedCurrency)}
                    </span>
                    <CurrencyArrow
                        className={isCurencySwitcherOpen ? style.arrowUp : ""}
                    />
                </button>
                {isCurencySwitcherOpen && (
                    <div className={style.currencySwitcher}>
                        {currencies?.map((currency) => {
                            return (
                                <button
                                    key={currency}
                                    className={style.currencyOption}
                                    onClick={() =>
                                        this.currencyOptionClicked(currency)
                                    }
                                >
                                    {convertToSymbol(currency) + " " + currency}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default HeaderCurrency;
