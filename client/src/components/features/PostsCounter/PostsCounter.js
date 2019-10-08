import React from 'react';
import {connect} from 'react-redux';
import {getPosts} from "../../../redux/actions/postsActions";
import {getRequest} from "../../../redux/actions/requestActions";
import {getAmountUserPosts} from "../../../redux/actions/usersActions";

class PostsCounter extends React.Component {

    state = {
        content: '- no posts -'
    };

    componentDidMount() {
        this.contentHandling(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.contentHandling(nextProps);
    }

    contentHandling = props => {
        const {amount, request, amountUserPosts} = props;

        if (request.pending) {
            this.setState({content: '- no posts -'})
        } else if (!request.userPosts && amount !== 0) {
            this.setState({content: amount})
        } else if (request.userPosts && amountUserPosts !== 0) {
            this.setState({content: amountUserPosts})
        }
    };

    render() {
        const {content} = this.state;
        return (
            <p>{`Posts amount: ${content}`}</p>
        )
    }
}

const mapStateToProps = state => ({
    posts: getPosts(state),
    request: getRequest(state),
    amountUserPosts: getAmountUserPosts(state)
});

export default connect(mapStateToProps)(PostsCounter)
