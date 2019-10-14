import React from 'react';
import {connect} from 'react-redux';
import {getRequest, userPostsMode} from "../../../redux/actions/requestActions";
import {getInitialPaginationPage, setInitialPage} from "../../../redux/actions/postsActions";
import {getAmountUserPosts, getUser} from "../../../redux/actions/usersActions";
import {loadUserByLogin} from "../../../redux/thunks";
import PageTitle from "../../common/PageTitle/PageTitle";
import SpinnerRequest from "../../common/SpinnerRequest/SpinnerRequest";
import Posts from "../../features/Posts/PostsContainer";
import PostsCounter from "../../features/PostsCounter/PostsCounterContainer";
import Alert from '../../common/Alert/Alert';

class UserPosts extends React.Component {

    state = {
        isVisible: false
    };

    componentDidMount() {
        const {userPostsMode, setInitialPage, initialPage, userPostsAmount, request, loadUserByLogin, user} = this.props;
        userPostsMode(true);
        loadUserByLogin(user);

        if (Math.ceil(userPostsAmount / 3) < initialPage) {
            setInitialPage(1);
        }

        if (request.remove) {
            this.setState({isVisible: true});
            setTimeout(() => this.setState({isVisible: false}), 3000);
        }
    }

    render() {
        const {remove, pending} = this.props.request;
        const {isVisible} = this.state;

        if (pending) {
            return <SpinnerRequest/>
        } else {
            return (
                <div>
                    <PageTitle>User Posts</PageTitle>
                    <PostsCounter/>
                    {remove ? <Alert isVisible={isVisible} variant="success">Post has removed</Alert> :
                        <Posts isActive={true} isUserPosts={true} postsPerPage={3}/>}
                </div>
            )
        }
    }
}

const mapDispatchToProps = dispatch => ({
    userPostsMode: isSet => dispatch(userPostsMode(isSet)),
    setInitialPage: value => dispatch(setInitialPage(value)),
    loadUserByLogin: login => dispatch(loadUserByLogin(login))
});

const mapStateToProps = state => ({
    initialPage: getInitialPaginationPage(state),
    userPostsAmount: getAmountUserPosts(state),
    request: getRequest(state),
    user: getUser(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
