import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Minicart from "../../components/general/minicart";
import {
    cartItemsSelector,
    selectedCurrencySelector,
} from "../../store/selectors";
import { setMinicartState } from "../../slices/states";
import CartItems from "../cart/cartItems";

const mapStateToProps = (state) => ({
    cart: cartItemsSelector(state),
    selectedCurrency: selectedCurrencySelector(state),
    cartItems: CartItems,
});

const mapDispatchToProps = (dispatch) => {
    return {
        setMinicartState: bindActionCreators(setMinicartState, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Minicart);
