import React from 'react';
import Logo from '../../common/Logo/Logo';
import MainMenu from '../../layouts/MainMenu/MainMenu';
import './NavBar.scss';
import logo from '../../../image/blog.jpg';

class NavBar extends React.Component {
    state = {
        mainLinks: [
            {path: "/", title: "Home"},
            {path: "/posts/new", title: "Add post"},
            {path: "/posts", title: "Posts"},
            {path: "/posts/random", title: "Random post"},
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
                <Logo image={logo} name="logo"/>
                <MainMenu links={isLogin ? loginLinks : mainLinks}/>
            </div>
        )
    }
}

export default NavBar;
