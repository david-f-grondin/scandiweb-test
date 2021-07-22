import { connect } from "react-redux";
import Plp from "../../components/plp/plp";
import PlpCategory from "./plpCategory";
import PlpProducts from "./plpProducts";
import { minicartStateSelector } from "../../store/selectors";

const mapStateToProps = (state) => ({
    plpCategory: PlpCategory,
    plpProducts: PlpProducts,
    isMinicartOpen: minicartStateSelector(state),
});

export default connect(mapStateToProps)(Plp);
