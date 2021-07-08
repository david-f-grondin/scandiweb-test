import { connect } from 'react-redux';
import { categoriesSelector, selectedCategoriesSelector } from '../../store/selectors';
import HeaderNavigation from '../../components/header/headerNavigation';
import HeaderCategory from './headerCategory';

const mapStateToProps = (state, ownProps) => ({
    headerCategory: HeaderCategory,
    categories: categoriesSelector(state),
    selectedCategory: selectedCategoriesSelector(state)
})

export default connect(mapStateToProps)(HeaderNavigation)