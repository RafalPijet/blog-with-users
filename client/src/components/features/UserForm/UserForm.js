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
        register: {
            firstName: '',
            lastName: '',
            emailRegister: '',
            passwordRegister: '',
            confirmPassword: ''
        },
        isVisible: true,
        isLogin: this.props.isLogin
    };

    componentDidMount() {
        this.props.resetRequest();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.request.error === null) {
            this.setState({isVisible: true});
        }
    }

    handleChange = event => {
        const {login, register, isLogin} = this.state;
        isLogin ? this.setState({login: {...login, [event.target.name]: event.target.value}}) :
            this.setState({register: {...register, [event.target.name]: event.target.value}})
    };

    sendLoginData = event => {
        const {loadUser, errorRequest, resetRequest, addUser} = this.props;
        const {login, register, isLogin} = this.state;
        event.preventDefault();
        this.setState({isVisible: true});

        if (isLogin) {

            if (login.email.includes("@")) {
                loadUser(login);
            } else {
                errorRequest("You must enter an email adress");
                setTimeout(() => resetRequest(), 4000);
            }
        } else {
            if (register.firstName.length && register.lastName) {

                if (register.emailRegister.includes("@")) {

                    if (register.passwordRegister === register.confirmPassword && register.passwordRegister.length !== 0) {
                        let user = {
                            firstName: register.firstName,
                            lastName: register.lastName,
                            email: register.emailRegister,
                            password: register.passwordRegister
                        };
                        addUser(user);
                    } else {
                        errorRequest("Check password");
                        setTimeout(() => resetRequest(), 4000);
                    }
                } else {
                    errorRequest("You must enter an email adress");
                    setTimeout(() => resetRequest(), 4000);
                }
            }
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
        const {firstName, lastName, emailRegister, passwordRegister, confirmPassword} = this.state.register;
        const {isVisible, isLogin} = this.state;
        const {request} = this.props;

        if (request.success) {

            if (!isLogin) {
                return <Alert isVisible={isVisible} variant="success">The user has been registered</Alert>
            } else {
                return <Redirect to="/"/>
            }
        } else if (request.error !== null) {
            countVisible(request.error);
            return <Alert variant="error" isVisible={isVisible}>{request.error}</Alert>
        } else if (request.pending) {
            return <SpinnerRequest/>
        } else {
            return (
                <form>
                    <TextField hidden={isLogin} label="first name" onChange={handleChange}
                               value={firstName} name="firstName"/>
                    <TextField hidden={isLogin} label="last name" onChange={handleChange}
                               value={lastName} name="lastName"/>
                    <TextField label="email" type="email" name={isLogin ? "email" : "emailRegister"}
                               value={isLogin ? email : emailRegister} onChange={handleChange}/>
                    <TextField label="password" type="password" name={isLogin ? "password" : "passwordRegister"}
                               value={isLogin ? password : passwordRegister} onChange={handleChange}/>
                    <TextField hidden={isLogin} label="confirm password" onChange={handleChange} type="password"
                               value={confirmPassword} name="confirmPassword"/>
                    <Button onClick={event => sendLoginData(event)} variant="primary">Send</Button>
                </form>
            )
        }
    }
}

UserForm.propTypes = {
    request: PropTypes.object.isRequired,
    loadUser: PropTypes.func.isRequired,
    errorRequest: PropTypes.func.isRequired,
    resetRequest: PropTypes.func.isRequired,
    isLogin: PropTypes.bool.isRequired,
    addUser: PropTypes.func.isRequired
};

export default UserForm;
