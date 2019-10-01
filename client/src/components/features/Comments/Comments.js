import React from 'react';
import PropTypes from 'prop-types';
import './Comments.scss';
import Button from "../../common/Button/Button";

class Comments extends React.Component {
    state = {
        isAddVisible: false,
        comment: '',
        comments: []
    };

    componentDidMount() {
        const {comments} = this.props.singlePost;
        this.setState({comments})
    }

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
        addComment(payload)
    };

    render() {
        const {isAddVisible, comment} = this.state;
        const {handleComment, handleAddComment} = this;
        const {amount} = this.props;

        return (
            <div className="comments-main">
                <div className="comments-info">
                    <p>{amount} {amount === 1 ? "comment" : "comments"}</p>
                    <p>Sort by</p>
                </div>
                <div className="comments-edit">
                    <input
                        placeholder="Add comment..."
                        onClick={() => this.setState({isAddVisible: true})}
                        onChange={handleComment}
                        value={comment}
                    />
                    <Button
                        variant="success"
                        hidden={!isAddVisible}
                        onClick={handleAddComment}
                    >Add</Button>
                </div>
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
