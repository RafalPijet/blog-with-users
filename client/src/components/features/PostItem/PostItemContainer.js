import {connect} from 'react-redux';
import PostItem from './PostItem';
import {loadPostRequest, randomPostRequest, removePostRequest} from "../../../redux/thunks";
import {getPost, getInitialPaginationPage} from "../../../redux/actions/postsActions";
import {getUser} from "../../../redux/actions/usersActions";
import {getRequest} from "../../../redux/actions/requestActions";

const mapDispatchToProps = dispatch => ({
    loadPost: id => dispatch(loadPostRequest(id)),
    randomPost: () => dispatch(randomPostRequest()),
    removePost: (id, userId) => dispatch(removePostRequest(id, userId))
});

const mapStateToProps = store => ({
    singlePost: getPost(store),
    request: getRequest(store),
    presentPage: getInitialPaginationPage(store),
    user: getUser(store)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);

