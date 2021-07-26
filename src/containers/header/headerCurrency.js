import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HeaderCurrency from "../../components/header/headerCurrency";
import {
    selectedCurrencySelector,
    currencySwitcherStateSelector,
} from "../../store/selectors";
import { setCurrencySwitcherState } from "../../slices/states";
import CurrencySwitcher from "../general/currencySwitcher";

const mapStateToProps = (state) => ({
    currencySwitcher: CurrencySwitcher,
    selectedCurrency: selectedCurrencySelector(state),
    isCurencySwitcherOpen: currencySwitcherStateSelector(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        setCurrencySwitcherState: bindActionCreators(
            setCurrencySwitcherState,
            dispatch
        ),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCurrency);
