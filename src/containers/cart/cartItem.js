import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addItem, removeItem, selectAttribute } from "../../slices/cart";
import { selectedCurrencySelector } from "../../store/selectors";
import CartItem from "../../components/cart/cartItem";

const mapStateToProps = (state) => ({
    selectedCurrency: selectedCurrencySelector(state),
});

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: bindActionCreators(addItem, dispatch),
        removeItem: bindActionCreators(removeItem, dispatch),
        selectAttribute: bindActionCreators(selectAttribute, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
