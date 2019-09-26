import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {connect} from "react-redux";
import {getLogin} from "./redux/actions/usersActions";
import MainLayout from './components/layouts/MainLayout/MainLayout';
import PostPage from './components/pages/Posts/PostPage';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import Login from './components/pages/Login/Login';
import Registration from './components/pages/Registration/Registration';
import Welcome from './components/pages/Welcome/Welcome';
import AddPost from './components/pages/AddPost/AddPost';
import RandomPost from './components/pages/RandomPost/RandomPost';
import SinglePost from './components/pages/SinglePost/SinglePost';
import EditPost from './components/pages/EditPost/EditPost';
import Logout from './components/pages/Logout/Logout';

class App extends React.Component {

    render() {
        let {isLogin} = this.props;

        if (isLogin) {
            return (
                <MainLayout isLogin={isLogin}>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/posts" exact component={PostPage}/>
                        <Route path="/posts/new" exact component={AddPost}/>
                        <Route path="/posts/edit" exact component={EditPost}/>
                        <Route path="/posts/random" exact component={RandomPost}/>
                        <Route path="/posts/:id" exact component={SinglePost}/>
                        <Route path="/contact" exact component={Contact}/>
                        <Route path="/logout" exact component={Logout}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </MainLayout>
            )
        } else {
            return (
                <MainLayout isLogin={isLogin}>
                    <Switch>
                        <Route path="/" exact component={Welcome}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/registration" exact component={Registration}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </MainLayout>
            );
        }
    }
}

const mapStateToProps = state => ({
    isLogin: getLogin(state)
});

export default connect(mapStateToProps)(App);
