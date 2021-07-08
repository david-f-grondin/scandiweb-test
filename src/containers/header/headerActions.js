import { connect } from 'react-redux';
import HeaderActions from '../../components/header/headerActions';
import HeaderCurrency from './headerCurrency';

const mapStateToProps = (state, ownProps) => ({
    headerCurrency: HeaderCurrency
})

export default connect(mapStateToProps)(HeaderActions)