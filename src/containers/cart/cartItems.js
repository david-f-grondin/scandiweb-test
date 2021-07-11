import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addItem, removeItem } from "../../slices/cart";
import {
    cartItemsSelector,
    selectedCurrencySelector,
} from "../../store/selectors";
import CartItems from "../../components/cart/cartItems";

const mapStateToProps = (state, ownProps) => ({
    cartItems: cartItemsSelector(state),
    selectedCurrency: selectedCurrencySelector(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: bindActionCreators(addItem, dispatch),
        removeItem: bindActionCreators(removeItem, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItems);
