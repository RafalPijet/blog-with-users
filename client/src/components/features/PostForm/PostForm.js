import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../../common/TextField/TextField';
import Editor from 'react-medium-editor';
import 'medium-editor/dist/css/medium-editor.css';
import 'medium-editor/dist/css/themes/default.css';
import Button from "../../common/Button/Button";
import SectionTitle from "../../common/SectionTitle/SectionTitle";
import SpinnerRequest from "../../common/SpinnerRequest/SpinnerRequest";
import Alert from "../../common/Alert/Alert";
import './PostForm.scss';
import '../../common/TextField/TextField.scss';

class PostForm extends React.Component {
    state = {
        post: {
            authorId: '',
            title: '',
            content: '',
            author: `${this.props.user.firstName} ${this.props.user.lastName}`
        }
    };

    componentDidMount() {
        const {isEdit, resetRequest, singlePost} = this.props;
        resetRequest();

        if (isEdit) {
            this.setState({post: singlePost});
        }
    }

    handleChange = event => {
        const {post} = this.state;
        this.setState({post: {...post, [event.target.name]: event.target.value}})
    };

    handleEdit = text => {
        const {post} = this.state;
        this.setState({post: {...post, content: text}})
    };

    sendPost = event => {
        const {addPost, updatePost, isEdit, user} = this.props;
        const {post} = this.state;
        event.preventDefault();
        post.authorId = user.id;
        isEdit ? updatePost(post) : addPost(post);
    };

    render() {
        const {title, content, author} = this.state.post;
        const {handleChange, handleEdit, sendPost} = this;
        const {pending, error, success} = this.props.request;
        const {isEdit, singlePost} = this.props;

        if (success) {
            return <Alert variant="success">{`Post has been ${isEdit ? "updated" : "added"}!`}</Alert>
        } else if (error !== null) {
            return <Alert variant="error">{error}</Alert>
        } else if (Object.entries(singlePost).length === 0 && isEdit) {
            return <Alert variant="error">No Post to edit!</Alert>
        } else if (pending) {
            return <SpinnerRequest/>
        } else {
            return (
                <form onSubmit={sendPost}>
                    <TextField label="Title" onChange={handleChange} value={title} name="title"/>
                    <label className="text-field">
                        <span className="text-field__label">{"Author"}</span>
                        <p className="text-field__input" >{author}</p>
                    </label>
                    <SectionTitle>{`${isEdit ? "Edit" : "Add"} post content`}</SectionTitle>
                    <Editor
                        className="content-editor"
                        onChange={handleEdit}
                        text={content}
                        options={{
                            placeholder: false,
                            toolbar: {buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3']}
                        }}
                    />
                    <Button variant="primary">{`${isEdit ? "Update" : "Add"} Post`}</Button>
                </form>
            )
        }
    }
}

PostForm.propTypes = {
    request: PropTypes.object.isRequired,
    addPost: PropTypes.func.isRequired,
    resetRequest: PropTypes.func.isRequired,
    isEdit: PropTypes.bool.isRequired,
    singlePost: PropTypes.object.isRequired,
    updatePost: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
};

export default PostForm;
