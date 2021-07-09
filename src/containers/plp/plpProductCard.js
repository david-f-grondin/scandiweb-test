import { connect } from 'react-redux';
import { selectedCurrencySelector } from '../../store/selectors';
import PlpProductCard from '../../components/plp/plpProductCard';

const mapStateToProps = (state, ownProps) => ({
    selectedCurrency: selectedCurrencySelector(state)
})

const mapDispatchToProps = dispatch => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlpProductCard)