import React from 'react';
import PropTypes from 'prop-types';
import TextField from '../../common/TextField/TextField';
import Button from "../../common/Button/Button";

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
        return (
            <form onSubmit={sendLoginData}>
                <TextField label="email" type="email" name="email"
                           value={email} onChange={handleChange}/>
                <TextField label="password" type="password" name="password"
                           value={password} onChange={handleChange}/>
                <Button variant="primary">Send</Button>
            </form>
        )
    }
}

export default UserForm;
