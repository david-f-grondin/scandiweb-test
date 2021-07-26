import React from "react";
import style from "./styles/currencySwitcher.module.scss";
import convertToSymbol from "../../util/currencyConverter";

class CurrencySwitcher extends React.Component {
    currencyOptionClicked = (currency) => {
        const { selectCurrency, closeCurrencySwitcher } = this.props;

        selectCurrency(currency);
        closeCurrencySwitcher();
    };

    renderCurrencyOption(currency) {
        const currencyOptionContent =
            convertToSymbol(currency) + " " + currency;

        return (
            <button
                key={currency}
                className={style.currencyOption}
                onClick={() => this.currencyOptionClicked(currency)}
            >
                {currencyOptionContent}
            </button>
        );
    }

    renderCurrencyOptions() {
        const { currencies } = this.props;

        return currencies?.map((currency) => {
            return this.renderCurrencyOption(currency);
        });
    }

    render() {
        return (
            <div className={style.currencySwitcher}>
                {this.renderCurrencyOptions()}
            </div>
        );
    }
}

export default CurrencySwitcher;
