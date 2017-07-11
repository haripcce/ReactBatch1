/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginComponent = props => {
    const handleSubmit = props.handleSubmit.bind(this);
    return (
      <div><h1>Login </h1>
        <div>{props.errorMessage}</div>
        <div>
          <TextField
            hintText="Enter your Username"
            floatingLabelText="username"
            type="text" value={props.username} onChange={props.onHandleChangeUsername}
          />
          <br />
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            value={props.password} onChange={props.onHandleChangePassword}
          />
          <br />
          <RaisedButton label="Submit" onClick={handleSubmit} />
        </div>
      </div>
    );
};

LoginComponent.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    errorMessage: PropTypes.string,
    handleSubmit: PropTypes.func,
    onHandleChangeUsername: PropTypes.func,
    onHandleChangePassword: PropTypes.func

};

export default LoginComponent;

