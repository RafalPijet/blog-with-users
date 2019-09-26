import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router';
import TextField from '../../common/TextField/TextField';
import Button from "../../common/Button/Button";
import SpinnerRequest from "../../common/SpinnerRequest/SpinnerRequest";
import Alert from "../../common/Alert/Alert";

class UserForm extends React.Component {

    state = {
        login: {
            email: '',
            password: ''
        },
        isVisible: true
    };

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.request.error === null) {
            this.setState({isVisible: true});
        }
        // setTimeout(() => console.log(this.state.isVisible), 500);
        // console.log(nextProps.request.error);
    }

    handleChange = event => {
        const {login} = this.state;
        this.setState({login: {...login, [event.target.name]: event.target.value}})
    };

    sendLoginData = event => {
        const {loadUser, errorRequest, resetRequest} = this.props;
        const {login} = this.state;
        event.preventDefault();

        if (login.email.includes("@")) {
            loadUser(login);
        } else {
            this.setState({isVisible: true});
            errorRequest("You must enter an email adress");
            setTimeout(() => resetRequest(), 4000);
        }
    };

    countVisible = error => {
        const {email} = this.state.login;

        if (error === "Wrong password!!!") {
            setTimeout(() => this.setState({
                isVisible: false, login: {email: email, password: ''}
            }), 3000);
        } else {
            setTimeout(() => this.setState({
                isVisible: false, login: {email: '', password: ''}
            }), 3000);
        }
    };

    render() {
        const {sendLoginData, handleChange, countVisible} = this;
        const {email, password} = this.state.login;
        const {isVisible} = this.state;
        const {request} = this.props;

        if (request.success) {
            return <Redirect to='/'/>
        } else if (request.error !== null) {
            countVisible(request.error);
            return <Alert variant="error" isVisible={isVisible}>{request.error}</Alert>
        } else if (request.pending) {
            return <SpinnerRequest/>
        } else {
            return (
                <form>
                    <TextField label="email" type="email" name="email"
                               value={email} onChange={handleChange}/>
                    <TextField label="password" type="password" name="password"
                               value={password} onChange={handleChange}/>
                    <Button onClick={event => sendLoginData(event)} variant="primary">Send</Button>
                </form>
            )
        }
    }
}

export default UserForm;
