import React from 'react';
import {connect} from 'react-redux';
import {userPostsMode} from "../../../redux/actions/requestActions";
import PageTitle from '../../common/PageTitle/PageTitle';
import PostsCounter from '../../features/PostsCounter/PostsCounterContainer';
import Posts from '../../features/Posts/PostsContainer';

const PostPage = props => {
    const {userPostsMode} = props;
    userPostsMode(false);

    return (
        <div>
            <PageTitle>Posts list</PageTitle>
            <PostsCounter/>
            <Posts isActive={true}/>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    userPostsMode: isSet => dispatch(userPostsMode(isSet))
});

export default connect(null, mapDispatchToProps)(PostPage);
