import React from 'react';
import PropTypes from 'prop-types';
import './Comments.scss';
import Button from "../../common/Button/Button";

class Comments extends React.Component {
    state = {
        isAddVisible: false,
        content: ''
    };

    handleComment = event => {
        this.setState({content: event.target.value});
    };

    handleAddComment = () => {
        const {postId, postAuthor} = this.props;
    };

    render() {
        const {isAddVisible, comment} = this.state;
        const {handleComment, handleAddComment} = this;

        return (
            <div className="comments-main">
                <div className="comments-info">
                    <p>Amount of comments</p>
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
    postId: PropTypes.string,
    postAuthor: PropTypes.string
};

export default Comments;
