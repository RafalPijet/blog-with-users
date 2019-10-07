import React from 'react';
import PageTitle from "../../common/PageTitle/PageTitle";
import Posts from "../../features/Posts/PostsContainer";

const UserPosts = () => (
    <div>
        <PageTitle>User Posts</PageTitle>
        <Posts isActive={true} isUserPosts={true} postsPerPage={3}/>
    </div>
);
export default UserPosts;
