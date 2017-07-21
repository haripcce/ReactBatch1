/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import LoginScreenContainer from 'container/LoginScreenContainer';
import DashBoardContainerComponent from 'components/DashBoardContainerComponent';
import { Link, BrowserRouter as Router } from 'react-router';

class BodyContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedInUser: '',
            screenName: 'loginScreen',
            errorTextForForm: '',
            errorTextForUserName: '',
            errorTextForPassword: ''

        };
        this.hideError = this.hideError.bind(this);
        this.changeLoginCredentials = this.changeLoginCredentials.bind(this);
        this.changeToLoginScreen = this.changeToLoginScreen.bind(this);
    }
    hideError(errorText) {
        this.setState({ errorTextForForm: errorText });
    }
    changeToLoginScreen(userScreen) {
        this.setState({ screenName: userScreen });
    }
    changeLoginCredentials(userName, password) {
        if (userName === 'Pradnya' && password === 'Pradnya') {
            this.setState({
                loggedInUser: userName,
                screenName: 'userScreen'
            });
        } else if (userName === '' && password === '') {
            this.setState({
                errorTextForForm: 'Please enter all mandatory fields',
                errorTextForUserName: '',
                errorTextForPassword: ''
            });
        } else if (userName === '') {
            this.setState({
                errorTextForForm: '',
                errorTextForUserName: 'Enter User Name',
                errorTextForPassword: ''
            });
        } else if (password === '') {
            this.setState({
                errorTextForForm: '',
                errorTextForUserName: '',
                errorTextForPassword: 'Enter Password'
            });
        } else {
            this.setState({
                errorTextForUserName: '',
                errorTextForPassword: '',
                errorTextForForm: 'Invalid Credentials.'
            });
        }
    }
    render() {
        return (
          <div>
                   body container
               </div>
        );
    }

}
BodyContainer.propTypes = {
    screenName: PropTypes.string
};

export default BodyContainer;

