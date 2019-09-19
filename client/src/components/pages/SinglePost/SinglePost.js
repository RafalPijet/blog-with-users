import React from 'react';
import PropTypes from 'prop-types';
import PageTitle from '../../common/PageTitle/PageTitle';
import PostItem from '../../common/PostItem/PostItemContainer';

const SinglePost = props => {

    return (
        <div>
            <PageTitle>Single Post</PageTitle>
            <PostItem id={props.match.params.id}/>
        </div>
    )
};

SinglePost.propTypes = {
    id: PropTypes.string
};

export default SinglePost;
