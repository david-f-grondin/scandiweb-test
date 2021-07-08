import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import HeaderCategory from '../../components/header/headerCategory';
import { selectCategory } from '../../slices/categories';

const mapDispatchToProps = dispatch => {
    return {
        selectCategory: bindActionCreators(selectCategory, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(HeaderCategory)