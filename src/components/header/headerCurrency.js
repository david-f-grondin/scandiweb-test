import React from 'react';
import styles from './styles/headerCurrency.module.scss';
import { ReactComponent as CurrencyArrow } from '../../images/currencyArrow.svg';
import convertToSymbol from '../../util/currencyConverter';

class HeaderCurrency extends React.Component {
    currencyClicked = e => {
        this.props.setCurrencySwitcherState(!this.props.isCurencySwitcherOpen);
    };
    currencyOptionClicked = (currency) => {
        this.props.selectCurrency(currency);
    };
    render() {
        return (
            <div className={styles.currencyContainer}>
                <button className={styles.currencyButton}
                    onClick={this.currencyClicked}
                >
                    <span className={styles.currency}>
                        {convertToSymbol(this.props.selectedCurrency)}
                    </span>
                    <CurrencyArrow className=
                        {
                            this.props.isCurencySwitcherOpen ?
                                styles.arrowUp
                                : ''
                        }
                    />

                </button>
                {
                    (this.props.isCurencySwitcherOpen) ? (
                        <div className={styles.currencySwitcher}>
                            {
                                this.props.currencies.map((currency) => {
                                    return (
                                        <button key={currency} className={styles.currencyOption}
                                            onClick={() => this.currencyOptionClicked(currency)}
                                        >
                                            {convertToSymbol(currency) + ' ' + currency}
                                        </button>
                                    )
                                })
                            }
                        </div>
                    ) : null
                }
            </div>
        );
    }
}

export default HeaderCurrency;