import {connect} from 'react-redux';
import PostForm from './PostForm';
import {addPostRequest} from "../../../redux/thunks";
import {getRequest} from "../../../redux/actions/requestActions";

const mapStateToProps = store => ({
    request: getRequest(store)
});

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(addPostRequest(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
