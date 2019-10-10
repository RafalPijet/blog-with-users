import {connect} from 'react-redux';
import PostsCounter from './PostsCounter';
import {getAmount, getPosts} from "../../../redux/actions/postsActions";
import {getRequest} from "../../../redux/actions/requestActions";
import {getAmountUserPosts} from "../../../redux/actions/usersActions";

const mapStateToProps = state => ({
    amount: getAmount(state),
    posts: getPosts(state),
    request: getRequest(state),
    amountUserPosts: getAmountUserPosts(state)
});

export default connect(mapStateToProps)(PostsCounter)
