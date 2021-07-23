import React from "react";
import convertToSymbol from "../../util/currencyConverter";

class Price extends React.Component {
    getPriceWithSymbol() {
        const { currency, price } = this.props;
        return convertToSymbol(currency) + price.toFixed(2);
    }

    render() {
        return <>{this.getPriceWithSymbol()}</>;
    }
}

export default Price;
