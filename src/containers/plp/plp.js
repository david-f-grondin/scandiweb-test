import { connect } from 'react-redux';
import Plp from '../../components/plp/plp';
import PlpCategory from './plpCategory';
import PlpProducts from './plpProducts';

const mapStateToProps = (state, ownProps) => ({
    plpCategory: PlpCategory,
    plpProducts: PlpProducts
})

export default connect(mapStateToProps)(Plp)