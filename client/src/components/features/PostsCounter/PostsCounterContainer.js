import {connect} from 'react-redux';
import PostsCounter from './PostsCounter';
import {getAmount} from "../../../redux/actions/postsActions";

const mapStateToProps = state => ({
    amount: getAmount(state)
});

export default connect(mapStateToProps)(PostsCounter)
