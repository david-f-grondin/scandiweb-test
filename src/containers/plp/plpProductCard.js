import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { selectedCurrencySelector } from "../../store/selectors";
import { addItem } from "../../slices/cart";
import PlpProductCard from "../../components/plp/plpProductCard";

const mapStateToProps = (state, ownProps) => ({
    selectedCurrency: selectedCurrencySelector(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: bindActionCreators(addItem, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlpProductCard);
