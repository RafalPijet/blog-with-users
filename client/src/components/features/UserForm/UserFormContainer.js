import {connect} from 'react-redux';
import UserForm from './UserForm';
import {loadUserByLogin} from "../../../redux/thunks";
import {getRequest, errorRequest, resetRequest} from "../../../redux/actions/requestActions";

const mapStateToProps = state => ({
    request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
    loadUser: login => dispatch(loadUserByLogin(login)),
    errorRequest: error => dispatch(errorRequest(error)),
    resetRequest: () => dispatch(resetRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
