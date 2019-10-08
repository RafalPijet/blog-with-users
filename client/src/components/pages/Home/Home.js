import React from 'react';
import {connect} from 'react-redux';
import {userPostsMode} from "../../../redux/actions/requestActions";
import PageTitle from '../../common/PageTitle/PageTitle';
import Posts from "../../features/Posts/PostsContainer";

const Home = props => {
    const {userPostsMode} = props;
    userPostsMode(false);

    return (
        <div>
            <PageTitle>Last Posts</PageTitle>
            <Posts isLastPosts={true}/>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    userPostsMode: isSet => dispatch(userPostsMode(isSet))
});

export default connect(null, mapDispatchToProps)(Home);
