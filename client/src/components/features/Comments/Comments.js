import React from 'react';
import PropTypes from 'prop-types';
import './Comments.scss';
import Button from "../../common/Button/Button";
import CommentsList from '../CommentsList/CommentsList';
import Pagination from '../../common/Pagination/Pagination';

class Comments extends React.Component {
    state = {
        isAddVisible: false,
        comment: '',
        sortValue: "newest",
        comments: this.props.singlePost.comments,
        commentsForPage: [],
        page: 1
    };

    componentDidMount() {
        const {handleChange} = this;
        const {page} = this.state;
        handleChange(page);
    }

    componentWillReceiveProps(nextProps) {
        const {comments} = nextProps.singlePost;
        const {handlingSort} = this;

        if (!nextProps.request.votes) {
            const updateState = () => new Promise(resolve => resolve(
                this.setState({
                    isAddVisible: false,
                    comment: '',
                    comments: comments
                })
            ));
            updateState()
                .then(() => handlingSort());
        }
    }

    handlingSort = async () => {
        const {comments, sortValue, page} = this.state;
        const {compareDatesFromOldest, compareDatesFromNewest, compareUsersAz, compareUsersZa, handleChange} = this;
        let unsorted = [];
        let sorted = [];

        if (sortValue === "oldest" || sortValue === "newest") {
            let temp = [];
            comments.forEach(comment => {
                let value = Date.parse(comment.dateAdded);
                let item = {
                    value: value,
                    comment: comment
                };
                unsorted.push(item);
            });
            sortValue === "oldest" ? temp = unsorted.sort(compareDatesFromOldest) :
                temp = unsorted.sort(compareDatesFromNewest);
            temp.forEach(item => {
                sorted.push(item.comment);
            });
        } else {
            unsorted = comments;
            sortValue === "a-z" ? sorted = unsorted.sort(compareUsersAz) :
                sorted = unsorted.sort(compareUsersZa);
        }
        await this.setState({comments: sorted});
        handleChange(page);
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

    handleSortType = async event => {
        const {handlingSort} = this;
        await this.setState({sortValue: event.target.value});
        handlingSort();
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

    handleChange = async page => {
        const {comments} = this.state;
        let begin = (page - 1) * 10;
        await this.setState({
            commentsForPage: comments.slice(begin, begin + 10),
            page: page
        });
    };

    render() {
        const {isAddVisible, comment, sortValue, comments, commentsForPage, page} = this.state;
        const {handleComment, handleAddComment, handleSortType} = this;
        const {amount, request} = this.props;

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
                <CommentsList comments={commentsForPage}/>
                <Pagination isActive={true} pages={Math.ceil(comments.length / 10)}
                            onPageChange={this.handleChange} presentPage={page}/>
            </div>
        )
    }
}

Comments.propTypes = {
    singlePost: PropTypes.object.isRequired,
    request: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    addComment: PropTypes.func.isRequired,
    amount: PropTypes.number.isRequired,
};

export default Comments;
