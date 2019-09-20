import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import Button from '../../common/Button/Button';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import {cutText} from '../../../utils/functions';
import {FaThumbsDown, FaThumbsUp} from "react-icons/fa";
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import './PostSummary.scss';

const PostSummary = ({id, title, content, author, votes, votesHandling}) => (
    <article className="post-summary">
        <SmallTitle>{title}</SmallTitle>
        <div>
            <span>author: </span>
            <SectionTitle>{author}</SectionTitle>
        </div>
        <HtmlBox>{cutText(content, 80)}</HtmlBox>
        <Link to={`/posts/${id}`}>
            <Button variant="info">Read More</Button>
        </Link>
        <Button variant="success" onClick={() => votesHandling(id, true)}><FaThumbsUp/></Button>
        <span style={{marginRight: '14px'}}>{votes}</span>
        <Button variant="danger" onClick={() => votesHandling(id, false)}><FaThumbsDown/></Button>
    </article>
);

PostSummary.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,

};

export default PostSummary;

