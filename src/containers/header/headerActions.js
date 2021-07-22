import { connect } from "react-redux";
import HeaderActions from "../../components/header/headerActions";
import HeaderCurrency from "./headerCurrency";
import HeaderCart from "./headerCart";

const mapStateToProps = () => ({
    headerCurrency: HeaderCurrency,
    headerCart: HeaderCart,
});

export default connect(mapStateToProps)(HeaderActions);
