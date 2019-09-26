import React from 'react';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layouts/MainMenu/MainMenu';
import LoggedUser from '../../features/LoggedUser/LoggedUser';
import './NavBar.scss';
import logo from '../../../image/blog.jpg';

class NavBar extends React.Component {
    state = {
        mainLinks: [
            {path: "/", title: "Home"},
            {path: "/posts/new", title: "Add post"},
            {path: "/posts", title: "Posts"},
            {path: "/posts/random", title: "Random post"},
            {path: "/contact", title: "Contact"},
            {path: "/logout", title: "logOut"}
        ],
        loginLinks: [
            {path: "/login", title: "LogIn"},
            {path: "/registration", title: "Registration"}
        ]
    };

    render() {
        const {mainLinks, loginLinks} = this.state;
        const {isLogin, loggedUser} = this.props;
        return (
            <div className="navbar">
                <Logo image={logo} name="logo"/>
                <div className="menu-box">
                    <MainMenu links={isLogin ? mainLinks : loginLinks}/>
                    <LoggedUser firstName={isLogin ? loggedUser.firstName : ''} hidden={!isLogin}
                                lastName={isLogin ? loggedUser.lastName : ''}/>
                </div>
            </div>
        )
    }
}

export default NavBar;
