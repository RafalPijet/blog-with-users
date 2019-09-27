import {connect} from 'react-redux';
import PostForm from './PostForm';
import {addPostRequest, updatePostRequest} from "../../../redux/thunks";
import {getRequest, resetRequest} from "../../../redux/actions/requestActions";
import {getPost} from "../../../redux/actions/postsActions";
import {getUser} from "../../../redux/actions/usersActions";

const mapStateToProps = store => ({
    request: getRequest(store),
    singlePost: getPost(store),
    user: getUser(store)
});

const mapDispatchToProps = dispatch => ({
    addPost: post => dispatch(addPostRequest(post)),
    resetRequest: () => dispatch(resetRequest()),
    updatePost: post => dispatch(updatePostRequest(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
