import React from 'react';
import {Switch, Route} from 'react-router-dom';
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

class App extends React.Component {
    state = {
        isLogin: false
    };

    render() {
        let {isLogin} = this.state;

        if (isLogin) {
            return (
                <MainLayout>
                    <Switch>
                        <Route path="/" exact component={Welcome}/>
                        <Route path="/login" exact component={Login}/>
                        <Route path="/registration" exact component={Registration}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </MainLayout>
            )
        } else {
            return (
                <MainLayout>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/posts/new" exact component={AddPost}/>
                        <Route path="/posts" exact component={PostPage}/>
                        <Route path="/posts/random" exact component={RandomPost}/>
                        <Route path="/posts/:id" exact component={SinglePost}/>
                        <Route path="/contact" exact component={Contact}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </MainLayout>
            );
        }
    }
}

export default App;
