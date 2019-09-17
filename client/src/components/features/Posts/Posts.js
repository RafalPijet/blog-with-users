import React from 'react';
import PropTypes from 'prop-types';
import PostsList from '../PostsList/PostsList';

class Posts extends React.Component {

    componentDidMount() {
        const {loadPosts} = this.props;
        loadPosts();
    }

    render() {
        const {posts} = this.props;
        return (
            <PostsList posts={posts}/>
        )
    }
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ),
    loadPosts: PropTypes.func.isRequired
};

export default Posts;
