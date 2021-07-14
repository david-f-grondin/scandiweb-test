import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Pdp from "../../components/pdp/pdp";
import { addItem } from "../../slices/cart";
import { setAllProducts, selectAttribute } from "../../slices/products";
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
        setAllProducts: bindActionCreators(setAllProducts, dispatch),
        selectAttribute: bindActionCreators(selectAttribute, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Pdp);
