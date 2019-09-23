import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import PostsCounter from '../../features/PostsCounter/PostsCounterContainer';
import Posts from '../../features/Posts/PostsContainer';

const PostPage = () => (
    <div>
        <PageTitle>Posts list</PageTitle>
        <PostsCounter/>
        <Posts postsPerPage={10}/>
    </div>
);

export default PostPage;
