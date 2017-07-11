import React from 'react';
import propTypes from 'prop-types';
import LoginScreen from '../LoginScreen/index';

const LoginScreenComponent = props => (
  <LoginScreen
    loginCredentials={props.loginCredentials} errorTextForUserName={props.errorTextForUserName}
    errorTextForPassword={props.errorTextForPassword} errorTextForForm={props.errorTextForForm}
  />);

LoginScreenComponent.propTypes = {
    loginCredentials: propTypes.string,
    errorTextForUserName: propTypes.string,
    errorTextForPassword: propTypes.string,
    errorTextForForm: propTypes.string
};

export default LoginScreenComponent;
