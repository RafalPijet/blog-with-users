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
        const {isLogin} = this.props;
        return (
            <div className="navbar">
                <Logo image={logo} name="logo"/>
                <MainMenu links={isLogin ? mainLinks : loginLinks}/>
            </div>
        )
    }
}

export default NavBar;
