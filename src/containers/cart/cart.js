import { connect } from "react-redux";
import Cart from "../../components/cart/cart";
import CartItems from "../../containers/cart/cartItems";

const mapStateToProps = (state, ownProps) => ({
    cartItems: CartItems,
});

export default connect(mapStateToProps)(Cart);
