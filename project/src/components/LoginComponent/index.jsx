/**
 * Created by synerzip on 7/7/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Snackbar from 'material-ui/Snackbar';

const style = {
    margin: 12
};

const LoginComponent = props => {
    const handleUsernameChange = props.handleUsernameChange;
    const handlePasswordChange = props.handlePasswordChange;
    const onSubmit = props.onSubmit;
    const userErrorMsg = props.userErrorMsg;
    const passwordErrorMsg = props.passwordErrorMsg;
    const openErrorMessage = props.openErrorMessage;
    const handleRequestClose = props.handleRequestClose;

    return (
      <MuiThemeProvider>
        <div
        style={
          {
            flex: 1,
            position: 'absolute',
            justifyContent: 'center',
            top:'30%',
            left:'40%',
            padding: '8px',
            border: '5px solid deepskyblue'}
        }>
          <TextField
            hintText="Username Field"
            floatingLabelText="Username"
            errorText={userErrorMsg}
            onChange={handleUsernameChange}
          />
          <br />
          <TextField
            hintText="Password Field"
            floatingLabelText="Password"
            type="password"
            errorText={passwordErrorMsg}
            onChange={handlePasswordChange}
          />
          <br />
          <RaisedButton
            label="Submit"
            primary
            style={style}
            onClick={onSubmit}
          />
          <Snackbar
            open={openErrorMessage}
            message="Wrong Credentials"
            autoHideDuration={4000}
            onRequestClose={handleRequestClose}
          />
        </div>
      </MuiThemeProvider>
    );
};

LoginComponent.propTypes = {
    handleUsernameChange: PropTypes.func,
    handlePasswordChange: PropTypes.func,
    onSubmit: PropTypes.func,
    userErrorMsg: PropTypes.string,
    passwordErrorMsg: PropTypes.string,
    openErrorMessage: PropTypes.bool,
    handleRequestClose: PropTypes.func
};

export default LoginComponent;
