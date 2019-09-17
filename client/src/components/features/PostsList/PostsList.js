import React from 'react';
import PropTypes from 'prop-types';
import PostSummary from '../PostSummary/PostSummary';

const PostsList = ({posts}) => (
    <div>
        {posts.map(post => <PostSummary key={post.id} {...post}/>)}
    </div>
);

PostsList.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    )
};

export default PostsList
