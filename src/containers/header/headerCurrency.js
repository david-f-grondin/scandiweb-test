import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeaderCurrency from '../../components/header/headerCurrency';
import { currenciesSelector, selectedCurrencySelector, currencySwitcherStateSelector } from '../../store/selectors';
import { setCurrencySwitcherState } from '../../slices/states';
import { selectCurrency } from '../../slices/currencies';

const mapStateToProps = (state, ownProps) => ({
    currencies: currenciesSelector(state),
    selectedCurrency: selectedCurrencySelector(state),
    isCurencySwitcherOpen: currencySwitcherStateSelector(state)
})

const mapDispatchToProps = dispatch => {
    return {
        setCurrencySwitcherState: bindActionCreators(setCurrencySwitcherState, dispatch),
        selectCurrency: bindActionCreators(selectCurrency, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCurrency)