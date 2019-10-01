import {connect} from "react-redux";
import Comments from './Comments';
import {getPost, getAmountOfComments} from "../../../redux/actions/postsActions";
import {getRequest} from "../../../redux/actions/requestActions";
import {getUser} from "../../../redux/actions/usersActions";
import {addCommentToPost} from "../../../redux/thunks";

const mapStateToProps = store => ({
    singlePost: getPost(store),
    request: getRequest(store),
    user: getUser(store),
    amount: getAmountOfComments(store)
});

const mapDispatchToProps = dispatch => ({
    addComment: payload => dispatch(addCommentToPost(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
