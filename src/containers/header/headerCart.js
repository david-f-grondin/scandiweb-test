import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeaderCart from '../../components/header/headerCart';
import { minicartStateSelector } from '../../store/selectors';
import { setMinicartState } from '../../slices/states';
import CartItems from '../cart/cartItems';

const mapStateToProps = (state, ownProps) => ({
    cart: {},
    isMinicartOpen: minicartStateSelector(state),
    cartItems: CartItems
})

const mapDispatchToProps = dispatch => {
    return {
        setMinicartState: bindActionCreators(setMinicartState, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderCart);