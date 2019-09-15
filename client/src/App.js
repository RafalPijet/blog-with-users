import React from 'react';
import {Switch, Route} from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import Posts from './components/pages/Posts/Posts';
import Home from './components/pages/Home/Home';
import Contact from './components/pages/Contact/Contact';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import Login from './components/pages/Login/Login';
import Registration from './components/pages/Registration/Registration';
import Welcome from './components/pages/Welcome/Welcome';

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
                        <Route path="/posts" exact component={Posts}/>
                        <Route path="/contact" exact component={Contact}/>
                        <Route component={PageNotFound}/>
                    </Switch>
                </MainLayout>
            );
        }
    }
}

export default App;
