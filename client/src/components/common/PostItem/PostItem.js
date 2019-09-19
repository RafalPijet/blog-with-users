import React from 'react';
import PropTypes from 'prop-types';
import SmallTitle from '../SmallTitle/SmallTitle';
import SectionTitle from "../SectionTitle/SectionTitle";
import HtmlBox from "../HtmlBox/HtmlBox";
import Button from "../Button/Button";
import SpinnerRequest from '../SpinnerRequest/SpinnerRequest';
import Alert from '../Alert/Alert';
import './PostItem.scss';

class PostItem extends React.Component {
    state = {
        singlePost: ""
    };

    componentDidMount() {
        const {singleHandling} = this;
        singleHandling();
    }

    singleHandling = async () => {
        const {loadPost, id} = this.props;
        await loadPost(id);
        await this.setState({singlePost: this.props.singlePost});
    };

    render() {
        const {singlePost} = this.state;
        const {request} = this.props;

        if (!request.pending && request.success) {
            return (
                <div>
                    <SmallTitle>{singlePost.title}</SmallTitle>
                    <div className="author-row">
                        <span>author: </span>
                        <SectionTitle>{singlePost.author}</SectionTitle>
                    </div>
                    <HtmlBox>{singlePost.content}</HtmlBox>
                    <Button variant="primary">Edit post</Button>
                </div>
            )
        } else if (request.pending && request.success === null) {
            return <SpinnerRequest/>
        } else if (!request.pending && !request.success && request.error !== null) {
            console.log(request);
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
    loadPost: PropTypes.func.isRequired
};

export default PostItem;
