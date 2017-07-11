/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import LoginScreenComponent from 'components/LoginScreenComponent';
import UserScreenAfterLoginContainer from 'components/UserScreenAfterLoginContainer';
import propTypes from 'prop-types';

const BodyContainerComponent = props => {
    if (props.screenName === 'userScreen') {
        return (<UserScreenAfterLoginContainer Employee={props.Employee} />);
    }
    return (<LoginScreenComponent
      loginCredentials={props.loginCredentials} errorTextForUserName={props.errorTextForUserName}
      errorTextForPassword={props.errorTextForPassword} errorTextForForm={props.errorTextForForm}
    />);
};
BodyContainerComponent.propTypes = {
    loginCredentials: propTypes.func,
    errorTextForUserName: propTypes.string,
    errorTextForPassword: propTypes.string,
    errorTextForForm: propTypes.string,
    screenName: propTypes.string,
    Employee: propTypes.arrayOf(propTypes.string)
};

export default BodyContainerComponent;

