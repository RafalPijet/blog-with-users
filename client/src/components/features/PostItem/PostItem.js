import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Redirect} from "react-router";
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import HtmlBox from "../../common/HtmlBox/HtmlBox";
import Button from "../../common/Button/Button";
import SpinnerRequest from '../../common/SpinnerRequest/SpinnerRequest';
import Alert from '../../common/Alert/Alert';
import Modal from '../../common/Modal/Modal';
import Comments from '../Comments/CommentsContainer';
import './PostItem.scss';

class PostItem extends React.Component {
    state = {
        singlePost: "",
        modal: false
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

    removeHandling = () => {
        this.setState({modal: true})
    };

    confirmHandling = () => {
        const {removePost, user} = this.props;
        const {id} = this.state.singlePost;
        this.setState({modal: false});
        removePost(id, user.id);
    };

    render() {
        const {singlePost, modal} = this.state;
        const {request, user, isRandom} = this.props;
        const {randomHandling, removeHandling, confirmHandling} = this;

        if (request.remove) {
            return <Redirect to='/user'/>
        } else if ((!request.pending && request.success) || (request.votes)) {
            return (
                <div>
                    <SmallTitle>{singlePost.title}</SmallTitle>
                    <div className="author-row">
                        <span>author: </span>
                        <SectionTitle>{singlePost.author}</SectionTitle>
                    </div>
                    <HtmlBox>{singlePost.content}</HtmlBox>
                    <Link hidden={isRandom || singlePost.author !== `${user.firstName} ${user.lastName}`}
                          to="/posts/edit">
                        <Button variant="primary">Edit Post</Button>
                    </Link>
                    <Button hidden={!request.userPosts}
                            variant="danger"
                            onClick={() => removeHandling()}>Remove post
                    </Button>
                    <Button hidden={!isRandom}
                            onClick={() => randomHandling()}
                            variant="primary">Random Post
                    </Button>
                    <Link hidden={isRandom} to={`${request.userPosts ? "/user" : "/posts"}`}>
                        <Button variant="info">{`Back to ${request.userPosts ? "user posts" : "posts"}`}</Button>
                    </Link>
                    <Modal setModal={modal} headerContent="Are you sure?" confirmButton="Confirm remove"
                           bodyContent="Confirmation will permanently delete the selected post ..."
                           confirmHandling={confirmHandling}/>
                    {singlePost !== '' ? <Comments/> : ''}
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
        votes: PropTypes.number,
        comments: PropTypes.array
    }),
    request: PropTypes.object.isRequired,
    loadPost: PropTypes.func.isRequired,
    removePost: PropTypes.func.isRequired,
    id: PropTypes.string,
    isRandom: PropTypes.bool.isRequired,
    presentPage: PropTypes.number.isRequired,
    user: PropTypes.object.isRequired
};

export default PostItem;
