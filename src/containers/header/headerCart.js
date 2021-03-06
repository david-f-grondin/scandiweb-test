import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HeaderCart from "../../components/header/headerCart";
import {
    minicartStateSelector,
    cartItemsCountSelector,
} from "../../store/selectors";
import { setMinicartState } from "../../slices/states";
import Minicart from "../general/minicart";

const mapStateToProps = (state) => ({
    cartItemsCount: cartItemsCountSelector(state),
    isMinicartOpen: minicartStateSelector(state),
    minicart: Minicart,
});

const mapDispatchToProps = (dispatch) => {
    return {
        setMinicartState: bindActionCreators(setMinicartState, dispatch),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCart);
