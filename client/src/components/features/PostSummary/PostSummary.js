import React from 'react';
import PropTypes from 'prop-types';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import Button from '../../common/Button/Button';
import './PostSummary.scss';

const PostSummary = ({id, title, content}) => (
    <article className="post-summary">
        <SmallTitle>{title}</SmallTitle>
        <p>{content}</p>
        <Button variant="info">Read More</Button>
    </article>
);

PostSummary.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
};

export default PostSummary;

