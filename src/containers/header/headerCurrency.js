import { connect } from 'react-redux';
import HeaderCurrency from '../../components/header/headerCurrency';

const mapStateToProps = (state, ownProps) => ({
    selectedCurrency: "$"
})

export default connect(mapStateToProps)(HeaderCurrency)