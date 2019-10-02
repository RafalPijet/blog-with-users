import React from 'react';
import PropTypes from 'prop-types';
import './Comments.scss';
import Button from "../../common/Button/Button";
import CommentsList from '../CommentsList/CommentsList';

class Comments extends React.Component {
    state = {
        isAddVisible: false,
        comment: '',
        comments: [],
        sortValue: "newest"
    };

    componentDidMount() {
        const {comments} = this.props.singlePost;
        this.setState({comments})
    }

    componentWillReceiveProps(nextProps) {

        if (!nextProps.request.votes) {
            this.setState({
                isAddVisible: false,
                comment: ''
            })
        }
    }

    handleSortType = event => {
        this.setState({sortValue: event.target.value});
    };

    handleComment = event => {
        this.setState({comment: event.target.value});
    };

    handleAddComment = () => {
        const {id} = this.props.singlePost;
        const {addComment, user} = this.props;
        const {comment} = this.state;
        let payload = {
            postId: id,
            content: comment,
            author: `${user.firstName} ${user.lastName}`
        };

        if (comment.length !== 0) {
            addComment(payload);
        }
    };

    render() {
        const {isAddVisible, comment, sortValue} = this.state;
        const {handleComment, handleAddComment, handleSortType} = this;
        const {amount, request, singlePost} = this.props;

        return (
            <div className="comments-main">
                <div className="comments-info">
                    <p>{amount} {amount === 1 ? "comment" : "comments"}</p>
                    <div>
                        <label htmlFor="selectSort">Sort by: </label>
                        <select id="selectSort" value={sortValue} onChange={handleSortType}>
                            <optgroup label="Sort Type">
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                                <option value="a-z">User A-Z</option>
                                <option value="z-a">User Z-A</option>
                            </optgroup>
                        </select>
                    </div>
                </div>
                <div className="comments-edit">
                    <input
                        placeholder="Add comment..."
                        onClick={() => this.setState({isAddVisible: true})}
                        onChange={handleComment}
                        value={comment}
                    />
                    <Button
                        variant={`${request.votes ? " comments-progress" : "success"} add-button`}
                        disabled={request.votes}
                        hidden={!isAddVisible}
                        onClick={handleAddComment}
                    >Add</Button>
                </div>
                <CommentsList sortValue={sortValue} comments={singlePost.comments}/>
            </div>
        )
    }
}

Comments.propTypes = {
    singlePost: PropTypes.object.isRequired,
    request: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    addComment: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired
};

export default Comments;
