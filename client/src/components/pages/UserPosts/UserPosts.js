import React from 'react';
import {connect} from 'react-redux';
import {userPostsMode} from "../../../redux/actions/requestActions";
import PageTitle from "../../common/PageTitle/PageTitle";
import Posts from "../../features/Posts/PostsContainer";
import PostsCounter from "../../features/PostsCounter/PostsCounter";

const UserPosts = props => {
    const {userPostsMode} = props;
    userPostsMode(true);

    return (
        <div>
            <PageTitle>User Posts</PageTitle>
            <PostsCounter/>
            <Posts isActive={true} isUserPosts={true} postsPerPage={3}/>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    userPostsMode: isSet => dispatch(userPostsMode(isSet))
});

export default connect(null, mapDispatchToProps)(UserPosts);
