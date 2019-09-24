import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import Posts from "../../features/Posts/PostsContainer";

const Home = () => (
    <div>
        <PageTitle>Last Posts</PageTitle>
        <Posts isLastPosts={true}/>
    </div>
);

export default Home;
