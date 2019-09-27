import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import Button from "../../common/Button/Button";
import SpinnerRequest from '../../common/SpinnerRequest/SpinnerRequest';
import Alert from '../../common/Alert/Alert';
import './PostItem.scss';

class PostItem extends React.Component {
    state = {
        singlePost: ""
    };

    componentDidMount() {
        const {singleHandling, randomHandling} = this;
        const {isRandom} = this.props;
        isRandom ? randomHandling() : singleHandling();
    }

    singleHandling = async () => {
        const {loadPost, id} = this.props;
        await loadPost(id);
        await this.setState({singlePost: this.props.singlePost});
    };

    randomHandling = async () => {
        const {randomPost} = this.props;
        await randomPost();
        await this.setState({singlePost: this.props.singlePost});
    };

    render() {
        const {singlePost} = this.state;
        const {request, presentPage, user} = this.props;
        const {randomHandling} = this;

        if (!request.pending && request.success) {
            return (
                <div>
                    <SmallTitle>{singlePost.title}</SmallTitle>
                    <div className="author-row">
                        <span>author: </span>
                        <SectionTitle>{singlePost.author}</SectionTitle>
                    </div>
                    <HtmlBox>{singlePost.content}</HtmlBox>
                    <Link hidden={this.props.isRandom || singlePost.author !== `${user.firstName} ${user.lastName}`}
                          to="/posts/edit">
                        <Button variant="primary">Edit Post</Button>
                    </Link>
                    <Button hidden={!this.props.isRandom}
                            onClick={() => randomHandling()}
                            variant="primary">Random Post</Button>
                    <Link hidden={this.props.isRandom} to={`${presentPage === 1 ? "/" : "/posts"}`}>
                        <Button variant="info">{`Back to ${presentPage === 1 ? "last posts" : "posts"}`}</Button>
                    </Link>
                </div>
            )
        } else if (request.pending && request.success === null) {
            return <SpinnerRequest/>
        } else if (!request.pending && !request.success && request.error !== null) {
            return <Alert variant={request.error.includes("don't exist") ? "warning" : "error"}>
                {request.error}</Alert>
        } else {
            return <SpinnerRequest/>
        }
    }

}

PostItem.propTypes = {
    singlePost: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        content: PropTypes.string,
        author: PropTypes.string,
        votes: PropTypes.number
    }),
    request: PropTypes.object.isRequired,
    loadPost: PropTypes.func.isRequired,
    id: PropTypes.string,
    isRandom: PropTypes.bool.isRequired,
    presentPage: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired
};

export default PostItem;
