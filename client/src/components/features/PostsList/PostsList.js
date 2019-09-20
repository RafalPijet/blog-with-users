import React from 'react';
import PropTypes from 'prop-types';
import PostSummary from '../PostSummary/PostSummary';

const PostsList = ({posts, votesHandling}) => (
    <div>
        {posts.map(post => <PostSummary key={post.id} {...post} votesHandling={votesHandling}/>)}
    </div>
);

PostsList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            votes: PropTypes.number.isRequired,
            votesHandling: PropTypes.func
        })
    ),
    votesHandling: PropTypes.func.isRequired
};

export default PostsList
