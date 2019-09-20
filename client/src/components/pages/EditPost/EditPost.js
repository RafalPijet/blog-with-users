import React from 'react';
import PageTitle from "../../common/PageTitle/PageTitle";
import PostForm from "../../features/PostForm/PostFormatContainer";

const EditPost = () => (
    <div>
        <PageTitle>Edit Post</PageTitle>
        <PostForm isEdit={true}/>
    </div>
);

export default EditPost
