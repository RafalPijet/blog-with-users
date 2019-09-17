import {connect} from 'react-redux';
import Posts from './Posts';
import {loadPostsRequest, getPosts} from "../../../redux/actions/postsActions";

const mapDispatchToProps = dispatch => ({
    loadPosts: () => dispatch(loadPostsRequest())
});

const mapStateToProps = state => ({
    posts: getPosts(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
