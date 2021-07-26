import React from "react";
import style1 from "./styles/price/price1.module.scss";
import style2 from "./styles/price/price2.module.scss";
import style3 from "./styles/price/price3.module.scss";
import convertToSymbol from "../../util/currencyConverter";

class Price extends React.Component {
    getPriceWithSymbol() {
        const { currency, price } = this.props;
        return convertToSymbol(currency) + price.toFixed(2);
    }

    getStyleMod() {
        const { styleMod } = this.props;
        switch (styleMod) {
            case "1":
                return style1;
            case "2":
                return style2;
            case "3":
                return style3;
            default:
                return style1;
        }
    }

    render() {
        const style = this.getStyleMod();

        return <div className={style.price}>{this.getPriceWithSymbol()}</div>;
    }
}

export default Price;
