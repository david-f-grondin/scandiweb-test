import { connect } from "react-redux";
import Pdp from "../../components/plp/plp";
import { cartItemSelector } from "../../store/selectors";

const mapStateToProps = (state, ownProps) => ({
    cartItem: cartItemSelector(state, ownProps.match.params.productId),
});

export default connect(mapStateToProps)(Pdp);
