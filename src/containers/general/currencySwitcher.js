import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { currenciesSelector } from "../../store/selectors";
import { selectCurrency } from "../../slices/currencies";
import CurrencySwitcher from "../../components/general/currencySwitcher";

const mapStateToProps = (state) => ({
    currencies: currenciesSelector(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        selectCurrency: bindActionCreators(selectCurrency, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);
