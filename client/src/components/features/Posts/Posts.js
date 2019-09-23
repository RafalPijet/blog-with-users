import React from 'react';
import PropTypes from 'prop-types';
import PostsList from '../PostsList/PostsList';
import SpinnerRequest from '../../common/SpinnerRequest/SpinnerRequest';
import Alert from '../../common/Alert/Alert';
import Pagination from "../../common/Pagination/Pagination";

class Posts extends React.Component {

    componentDidMount() {
        const {loadPosts, presentPage, postsPerPage} = this.props;
        loadPosts(presentPage, postsPerPage);
    }

    votesHandling = (id, isUp) => {
        const {setThumb} = this.props;
        setThumb(id, isUp);
    };

    render() {
        const {posts, request, pages, presentPage, loadPosts, postsPerPage} = this.props;
        const {votesHandling} = this;

        if ((!request.pending && request.success && posts.length > 0) || request.votes) {
            return (
                <div>
                    <PostsList posts={posts} votesHandling={votesHandling} request={request}/>
                    <Pagination isActive={true} pages={pages} postsPerPage={postsPerPage}
                                onPageChange={loadPosts} presentPage={presentPage}/>
                </div>

            )
        } else if (request.pending || request.success === null) {
            return <SpinnerRequest/>
        } else if (!request.pending && request.error !== null) {
            return <Alert variant="error">{request.error}</Alert>
        } else if (!request.pending && request.success === true && posts.length === 0) {
            return <Alert variant="info">No posts</Alert>
        }
    }
}

Posts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            votes: PropTypes.number.isRequired
        })
    ),
    request: PropTypes.object.isRequired,
    loadPosts: PropTypes.func.isRequired,
    postsPerPage: PropTypes.number
};

export default Posts;
