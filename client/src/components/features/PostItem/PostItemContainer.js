import {connect} from 'react-redux';
import PostItem from './PostItem';
import {loadPostRequest, randomPostRequest, removePostRequest} from "../../../redux/thunks";
import {getPost, getInitialPaginationPage} from "../../../redux/actions/postsActions";
import {getUser, getAmountUserPosts} from "../../../redux/actions/usersActions";
import {getRequest} from "../../../redux/actions/requestActions";

const mapDispatchToProps = dispatch => ({
    loadPost: id => dispatch(loadPostRequest(id)),
    randomPost: () => dispatch(randomPostRequest()),
    removePost: id => dispatch(removePostRequest(id))
});

const mapStateToProps = store => ({
    singlePost: getPost(store),
    request: getRequest(store),
    presentPage: getInitialPaginationPage(store),
    user: getUser(store),
    amountUserPosts: getAmountUserPosts(store)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);

