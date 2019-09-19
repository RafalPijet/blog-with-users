import React from 'react';
import {connect} from 'react-redux';
import {getPosts} from "../../../redux/actions/postsActions";

class PostsCounter extends React.Component {

    render() {
        const {amount} = this.props;
        return (
            <p>{amount ? `Posts amount: ${amount}` : `- no posts -`}</p>
        )
    }
}

const mapStateToProps = state => ({
    posts: getPosts(state)
});

export default connect(mapStateToProps)(PostsCounter)
