import React from 'react';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layouts/MainMenu/MainMenu';
import './NavBar.scss';

class NavBar extends React.Component {
    state = {
        mainLinks: [
            {path: "/", title: "Home"},
            {path: "/posts", title: "Posts"},
            {path: "/contact", title: "Contact"}
        ],
        loginLinks: [
            {path: "/login", title: "LogIn"},
            {path: "/registration", title: "Registration"}
        ],
        isLogin: false
    };

    render() {
        const {mainLinks, loginLinks, isLogin} = this.state;
        return (
            <div className="navbar">
                <Logo/>
                <MainMenu links={isLogin ? loginLinks : mainLinks}/>
            </div>
        )
    }
}

export default NavBar;
