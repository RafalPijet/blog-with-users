import React from 'react';
import PropTypes from 'prop-types';
import PostsList from '../PostsList/PostsList';
import SpinnerRequest from '../../common/SpinnerRequest/SpinnerRequest';
import Alert from '../../common/Alert/Alert';

class Posts extends React.Component {

    componentDidMount() {
        const {loadPosts} = this.props;
        loadPosts();
    }

    render() {
        const {posts, request} = this.props;

        if (!request.pending && request.success && posts.length > 0) {
            return <PostsList posts={posts}/>
        } else if (request.pending || request.success === null) {
            return <SpinnerRequest/>
        } else if (!request.pending && request.error !== null) {
            return <Alert variant="error">{request.error}</Alert>
        } else if (!request.pending && request.success === true && posts.length === 0) {
            return <Alert variant="info">No posts</Alert>
        }
    }
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            votes: PropTypes.number.isRequired
        })
    ),
    request: PropTypes.object.isRequired,
    loadPosts: PropTypes.func.isRequired
};

export default Posts;
