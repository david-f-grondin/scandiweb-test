import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pdp from "../../components/pdp/pdp";
import { addItem } from "../../slices/cart";
import {
    cartItemSelector,
    selectedCurrencySelector,
} from "../../store/selectors";

const mapStateToProps = (state, ownProps) => ({
    product: cartItemSelector(state, ownProps.match.params.productId),
    selectedCurrency: selectedCurrencySelector(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: bindActionCreators(addItem, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pdp);
