import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router';
import TextField from '../../common/TextField/TextField';
import Button from "../../common/Button/Button";
import SpinnerRequest from "../../common/SpinnerRequest/SpinnerRequest";
import Alert from "../../common/Alert/Alert";

class UserForm extends React.Component {

    state = {
        email: '',
        password: ''
    };

    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})
    };

    sendLoginData = event => {
        const {loadUser} = this.props;
        event.preventDefault();
        loadUser(this.state);
    };

    render() {
        const {sendLoginData, handleChange} = this;
        const {email, password} = this.state;
        const {request} = this.props;

        if (request.success) {
            return <Redirect to='/'/>

        } else if (request.error !== null) {
            return <Alert variant="error">{request.error}</Alert>
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
