import {connect} from 'react-redux';
import UserForm from './UserForm';
import {loadUserByLogin} from "../../../redux/thunks";
import {getRequest} from "../../../redux/actions/requestActions";

const mapStateToProps = state => ({
    request: getRequest(state)
});

const mapDispatchToProps = dispatch => ({
    loadUser: login => dispatch(loadUserByLogin(login))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
