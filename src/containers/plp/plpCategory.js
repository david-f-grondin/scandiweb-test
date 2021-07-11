import { connect } from "react-redux";
import { selectedCategorySelector } from "../../store/selectors";
import PlpCategory from "../../components/plp/plpCategory";

const mapStateToProps = (state, ownProps) => ({
    category: selectedCategorySelector(state),
});

export default connect(mapStateToProps)(PlpCategory);
