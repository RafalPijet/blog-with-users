import {connect} from 'react-redux';
import PostItem from './PostItem';
import {loadPostRequest, randomPostRequest} from "../../../redux/thunks";
import {getPost} from "../../../redux/actions/postsActions";
import {getRequest} from "../../../redux/actions/requestActions";

const mapDispatchToProps = dispatch => ({
    loadPost: id => dispatch(loadPostRequest(id)),
    randomPost: () => dispatch(randomPostRequest())
});

const mapStateToProps = store => ({
    singlePost: getPost(store),
    request: getRequest(store)
});

export default connect(mapStateToProps, mapDispatchToProps)(PostItem);

