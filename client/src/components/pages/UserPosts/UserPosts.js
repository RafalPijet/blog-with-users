import React from 'react';
import {connect} from 'react-redux';
import {userPostsMode} from "../../../redux/actions/requestActions";
import {getInitialPaginationPage, setInitialPage} from "../../../redux/actions/postsActions";
import {getAmountUserPosts} from "../../../redux/actions/usersActions";
import PageTitle from "../../common/PageTitle/PageTitle";
import Posts from "../../features/Posts/PostsContainer";
import PostsCounter from "../../features/PostsCounter/PostsCounter";

const UserPosts = props => {
    const {userPostsMode, setInitialPage, initialPage, userPostsAmount} = props;
    userPostsMode(true);

    if (Math.ceil(userPostsAmount / 3) < initialPage) {
        setInitialPage(1);
    }

    return (
        <div>
            <PageTitle>User Posts</PageTitle>
            <PostsCounter/>
            <Posts isActive={true} isUserPosts={true} postsPerPage={3}/>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    userPostsMode: isSet => dispatch(userPostsMode(isSet)),
    setInitialPage: value => dispatch(setInitialPage(value))
});

const mapStateToProps = state => ({
    initialPage: getInitialPaginationPage(state),
    userPostsAmount: getAmountUserPosts(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
