import React from 'react';
import './CommentsList.scss';

const CommentsList = props => (
    <div>
        {props.comments.map(comment => {
            return (
                <div key={comment._id}>
                    <div className="comment-info">
                        <p>{comment.author}</p>
                        <p>{comment.dateAdded}</p>
                    </div>
                    <p>{comment.content}</p>
                </div>
            )
        })}
    </div>
);

export default CommentsList;
