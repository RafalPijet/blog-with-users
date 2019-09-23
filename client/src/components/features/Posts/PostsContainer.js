import {connect} from 'react-redux';
import Posts from './Posts';
import {getPosts, getInitialPaginationPage, getPaginationPages} from "../../../redux/actions/postsActions";
import {getRequest} from "../../../redux/actions/requestActions";
import {loadPostsRequest, setThumbRequest, loadPostsByRangeRequest} from "../../../redux/thunks";

const mapDispatchToProps = dispatch => ({
    loadPosts: (page, postsPerPage) => dispatch(loadPostsByRangeRequest(page, postsPerPage)),
    setThumb: (id, isUp) => dispatch(setThumbRequest(id, isUp))
});

const mapStateToProps = state => ({
    posts: getPosts(state),
    request: getRequest(state),
    pages: getPaginationPages(state),
    presentPage: getInitialPaginationPage(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
