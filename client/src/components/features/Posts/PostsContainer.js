import {connect} from 'react-redux';
import Posts from './Posts';
import {getPosts} from "../../../redux/actions/postsActions";
import {getRequest} from "../../../redux/actions/requestActions";
import {loadPostsRequest, setThumbRequest} from "../../../redux/thunks";

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostsRequest()),
    setThumb: (id, isUp) => dispatch(setThumbRequest(id, isUp))
});

const mapStateToProps = state => ({
    posts: getPosts(state),
    request: getRequest(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
