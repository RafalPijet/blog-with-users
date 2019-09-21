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

class PostSummary extends React.Component {
    state = {
        isWorking: false,
        isBusy: false
    };

    componentWillReceiveProps(nextProps) {
        const {isWorking} = this.state;
        (nextProps.request.votes && isWorking) ? this.setState({isBusy: true}) :
            this.setState({isBusy: false, isWorking: false})
    }

    thumbHandling = async (id, isUp) => {
        const {votesHandling} = this.props;
        await this.setState({isWorking: true});
        votesHandling(id, isUp);
    };

    render() {
        const {id, title, content, author, votes} = this.props;
        const {thumbHandling} = this;
        const {isBusy} = this.state;
        return (
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
                <Button disabled={isBusy} variant={`success ${(isBusy) ? "progress-votes" : []}`}
                        onClick={() => thumbHandling(id, true)}>
                    <FaThumbsUp/>
                </Button>
                <span style={{marginRight: '14px'}}>{votes}</span>
                <Button disabled={isBusy} variant={`danger ${isBusy ? "progress-votes" : []}`}
                        onClick={() => votes > 0 ? thumbHandling(id, false) : []}>
                    <FaThumbsDown/>
                </Button>
            </article>
        )
    }
}

PostSummary.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    votesHandling: PropTypes.func.isRequired,
    request: PropTypes.object.isRequired
};

export default PostSummary;

