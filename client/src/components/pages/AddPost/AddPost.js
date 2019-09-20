import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import PostForm from "../../features/PostForm/PostFormatContainer";

const AddPost = () => (
    <div>
        <PageTitle>Add post</PageTitle>
        <PostForm isEdit={false}/>
    </div>
);

export default AddPost;
