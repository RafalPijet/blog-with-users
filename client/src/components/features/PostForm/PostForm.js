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

class PostForm extends React.Component {
    state = {
        post: {
            title: '',
            content: '',
            author: ''
        }
    };

    handleChange = event => {
        const {post} = this.state;
        this.setState({post: {...post, [event.target.name]: event.target.value}})
    };

    handleEdit = text => {
        const {post} = this.state;
        this.setState({post: {...post, content: text}})
    };

    addPost = event => {
        const {addPost} = this.props;
        const {post} = this.state;
        event.preventDefault();
        addPost(post);
    };

    render() {
        const {title, content, author} = this.state.post;
        const {handleChange, handleEdit, addPost} = this;
        const {pending, error, success} = this.props.request;

        if (success) {
            return <Alert variant="success">Post has been added</Alert>
        } else if (error !== null) {
            return <Alert variant="error">{error}</Alert>
        } else if (pending) {
            return <SpinnerRequest/>
        } else {
            return (
                <form onSubmit={addPost}>
                    <TextField label="Title" onChange={handleChange} value={title} name="title"/>
                    <TextField label="Author" onChange={handleChange} value={author} name="author"/>
                    <SectionTitle>Add post content</SectionTitle>
                    <Editor
                        className="content-editor"
                        onChange={handleEdit}
                        text={content}
                        options={{
                            placeholder: false,
                            toolbar: {buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3']}
                        }}
                    />
                    <Button variant="primary">Add post</Button>
                </form>
            )
        }
    }
}

PostForm.propTypes = {
  request: PropTypes.object.isRequired,
  addPost: PropTypes.func.isRequired
};

export default PostForm;
