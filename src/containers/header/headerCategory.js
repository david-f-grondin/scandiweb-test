import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import HeaderCategory from "../../components/header/headerCategory";
import { selectCategory } from "../../slices/categories";
import { setAllProducts } from "../../slices/products";

const mapDispatchToProps = (dispatch) => {
    return {
        selectCategory: bindActionCreators(selectCategory, dispatch),
        setAllProducts: bindActionCreators(setAllProducts, dispatch),
    };
};

export default connect(null, mapDispatchToProps)(HeaderCategory);
