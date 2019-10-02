import React from 'react';
import PropTypes from 'prop-types';
import './CommentsList.scss';

class CommentsList extends React.Component {

    state = {
        comments: [],
        sortValue: this.props.sortValue
    };

    componentDidMount() {
        const {comments} = this.props;
        this.setState({comments});
    }

    componentWillReceiveProps(nextProps) {
        const {sortValue} = nextProps;
        const {handlingSort} = this;

        if (sortValue) {
            handlingSort(sortValue);
        }
    }

    handlingSort = async sortValue => {
        const {comments} = this.props;
        const {compareDatesFromOldest, compareDatesFromNewest, compareUsersAz, compareUsersZa} = this;
        await this.setState({sortValue});
        let unsorted = [];
        let sorted = [];

        if (this.state.sortValue === "oldest" || this.state.sortValue === "newest") {
            let temp = [];
            comments.forEach(comment => {
                let value = Date.parse(comment.dateAdded);
                let item = {
                    value: value,
                    comment: comment
                };
                unsorted.push(item);
            });
            this.state.sortValue === "oldest" ? temp = unsorted.sort(compareDatesFromOldest) :
                temp = unsorted.sort(compareDatesFromNewest);
            temp.forEach(item => {
                sorted.push(item.comment);
            });
        } else {
            unsorted = comments;
            this.state.sortValue === "a-z" ? sorted = unsorted.sort(compareUsersAz) :
                sorted = unsorted.sort(compareUsersZa);
        }
        this.setState({comments: sorted});
    };

    compareDatesFromOldest = (a, b) => {
        let comparision = 0;

        if (a.value > b.value) {
            comparision = 1;
        } else if (a.value < b.value) {
            comparision = -1;
        }
        return comparision;
    };

    compareDatesFromNewest = (a, b) => {
        let comparision = 0;

        if (a.value < b.value) {
            comparision = 1;
        } else if (a.value > b.value) {
            comparision = -1;
        }
        return comparision;
    };

    compareUsersAz = (a, b) => {
        let comparision = 0;

        if (a.author > b.author) {
            comparision = 1;
        } else if (a.author < b.author) {
            comparision = -1;
        }
        return comparision
    };

    compareUsersZa = (a, b) => {
        let comparision = 0;

        if (a.author < b.author) {
            comparision = 1;
        } else if (a.author > b.author) {
            comparision = -1;
        }
        return comparision
    };

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
        const {comments} = this.state;
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
