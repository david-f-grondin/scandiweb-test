import { connect } from 'react-redux';
import { productsCurrentCategorySelector } from '../../store/selectors';
import PlpProducts from '../../components/plp/plpProducts';
import PlpProductCard from './plpProductCard';

const mapStateToProps = (state, ownProps) => ({
    products: productsCurrentCategorySelector(state),
    plpProductCard: PlpProductCard
})

export default connect(mapStateToProps)(PlpProducts)