import { connect } from "react-redux";
import { cartItemsSelector } from "../../store/selectors";
import CartItem from "./cartItem";
import CartItems from "../../components/cart/cartItems";

const mapStateToProps = (state) => ({
    cartItems: cartItemsSelector(state),
    cartItem: CartItem,
});

export default connect(mapStateToProps)(CartItems);
