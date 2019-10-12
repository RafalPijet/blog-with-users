import React from 'react';
import {connect} from 'react-redux';
import {userPostsMode} from "../../../redux/actions/requestActions";
import PageTitle from '../../common/PageTitle/PageTitle';
import PostItem from "../../features/PostItem/PostItemContainer";

const RandomPost = props => {
    const {userPostsMode} = props;
    userPostsMode(false);

    return (
        <div>
            <PageTitle>Random Post</PageTitle>
            <PostItem isRandom={true}/>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    userPostsMode: isSet => dispatch(userPostsMode(isSet))
});

export default connect(null, mapDispatchToProps)(RandomPost);
