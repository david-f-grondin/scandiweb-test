import { connect } from "react-redux";
import Main from "../components/main";
import Plp from "./plp/plp";
import Pdp from "./pdp/pdp";
import Cart from "./cart/cart";
import { setMinicartState } from "../slices/states";
import { minicartStateSelector } from "../store/selectors";

const mapStateToProps = (state, ownProps) => ({
    plp: Plp,
    pdp: Pdp,
    cart: Cart,
    isMinicartOpen: minicartStateSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
    setMinicartState: (payload) => {
        dispatch(setMinicartState(payload));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
