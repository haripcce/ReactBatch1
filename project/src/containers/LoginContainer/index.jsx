/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import LoginComponent from 'components/Login';

class LoginContainer extends React.Component {
    constructor() {
        super();
        this.state = { username: '', password: '' };
        this.onHandleChangeUsername = this.handleChangeUsername.bind(this);
        this.onHandleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeUsername(event) {
        this.setState({ username: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleSubmit(event) {
        this.props.onSubmit(this.state.username, this.state.password);

        event.preventDefault();
    }

    render() {
        return (
          <div>
            <LoginComponent
              handleSubmit={this.handleSubmit}
              errorMessage={this.props.errorMessage}
              onHandleChangeUsername={this.onHandleChangeUsername}
              onHandleChangePassword={this.onHandleChangePassword}
              username={this.state.username}
              password={this.state.password}
            />
          </div>
        );
    }

}

LoginContainer.propTypes = {
    onSubmit: PropTypes.func,
    errorMessage: PropTypes.string
};
export default LoginContainer;

