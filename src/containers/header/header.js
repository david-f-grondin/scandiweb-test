import { connect } from "react-redux";
import Header from "../../components/header/header";
import HeaderAction from "./headerActions";
import HeaderNavigation from "./headerNavigation";

const mapStateToProps = (state, ownProps) => ({
    headerNavigation: HeaderNavigation,
    headerActions: HeaderAction,
});

export default connect(mapStateToProps)(Header);
