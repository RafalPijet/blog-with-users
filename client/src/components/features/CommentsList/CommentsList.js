import React from 'react';
import './CommentsList.scss';

class CommentsList extends React.Component {

    countDate = dateAdded => {
        let min = 0;
        let hrs = 0;
        let days = 0;
        let different = (new Date() - new Date(dateAdded)) / 60000;

        if (different >= 60 && different < 1440) {
            hrs = Math.floor(different / 60);
            min = different % (hrs * 60);
        } else if (different >= 1440) {
            days = Math.floor(different / 1440);
            let rest = different % (days * 1440);

            if (rest >= 60) {
                hrs = Math.floor(rest);
                min = rest % 60;
            } else {
                min = rest;
            }
        } else {
            min = different;
        }
        let result = `${days > 0 ? days + " days" : ""} ${hrs > 0 ? hrs + " hours" : ""} 
        ${different.toFixed(0) > 0 ? min.toFixed(0) + " min" : "now"}`;
        return result.trim() !== "now" ? result.trim() + " ago" : result.trim();
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

export default CommentsList;
