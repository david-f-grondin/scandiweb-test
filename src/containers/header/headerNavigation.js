import { connect } from "react-redux";
import {
    categoriesSelector,
    selectedCategorySelector,
} from "../../store/selectors";
import HeaderNavigation from "../../components/header/headerNavigation";
import HeaderCategory from "./headerCategory";

const mapStateToProps = (state) => ({
    headerCategory: HeaderCategory,
    categories: categoriesSelector(state),
    selectedCategory: selectedCategorySelector(state),
});

export default connect(mapStateToProps)(HeaderNavigation);
