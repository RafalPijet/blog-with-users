import React from 'react';
import {connect} from 'react-redux';
import {getPosts} from "../../../redux/actions/postsActions";

class PostsCounter extends React.Component {

    render() {
        const {amount} = this.props;
        return (
            <div>{amount ? `Posts amount: ${amount}` : `- no posts -`}</div>
        )
    }
}

const mapStateToProps = state => ({
    posts: getPosts(state)
});

export default connect(mapStateToProps)(PostsCounter)
