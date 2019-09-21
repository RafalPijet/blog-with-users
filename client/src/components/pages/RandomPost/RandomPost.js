import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import PostItem from "../../features/PostItem/PostItemContainer";

const RandomPost = () => (
    <div>
        <PageTitle>Random Post</PageTitle>
        <PostItem isRandom={true}/>
    </div>
);

export default RandomPost;
