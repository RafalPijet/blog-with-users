import React from 'react';
import PropTypes from 'prop-types';
import './CommentsList.scss';

class CommentsList extends React.Component {

    countDate = dateAdded => {
        let min = 0;
        let hrs = 0;
        let days = 0;
        let different = (new Date() - new Date(dateAdded)) / 60000;

        if (different >= 60 && different < 1440) {
            hrs = Math.floor(different / 60);
            min = (different % (hrs * 60)).toFixed(0);
        } else if (different >= 1440) {
            days = Math.floor(different / 1440);
            let rest = different % (days * 1440);

            if (rest >= 60) {
                hrs = Math.floor(rest);
                min = (rest % 60).toFixed(0);
            } else {
                min = rest.toFixed(0);
            }
        } else {
            min = different.toFixed(0);
        }

        if (different.toFixed(0) > 0) {

            if (days > 0) {
                return `${days > 1 ? days + ' days' : days + ' day'} ago`;
            } else if (hrs > 0 && days === 0) {
                return `${hrs > 1 ? hrs + ' hours' : hrs + ' hour'} ago`
            } else {
                return `${min > 1 ? min + ' minutes' : min + ' minute'} ago`
            }
        } else {
            return "now"
        }
    };

    render() {
        const {comments} = this.props;
        const {countDate} = this;
        return (
            <div>
                {comments.map((comment, i) => {
                    return (
                        <div className={`comment-item ${(i % 2 === 0) ? "even-comment" : ""}`} key={comment._id}>
                            <div className="comment-info">
                                <p>{comment.author}</p>
                                <p>{countDate(comment.dateAdded)}</p>
                            </div>
                            <p>{comment.content}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

CommentsList.propsTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string,
            postId: PropTypes.string,
            content: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired,
            dateAdded: PropTypes.string.isRequired
        })
    )
};

export default CommentsList;
