/**
 * Created by synerzip on 04/07/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderComponent from 'components/Header';
import BodyContainer from 'components/BodyContainerComponent';

class AppContainerComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            screenName: 'loginScreen',
            errorTextForUserName: '',
            errorTextForPassword: '',
            errorTextForForm: ''

        };
        this.changeLoginCredentials = this.changeLoginCredentials.bind(this);
    }
    changeLoginCredentials(userName, password) {
        if (userName === 'Pradnya' && password === 'Pradnya') {
            this.setState({
                userName,
                password,
                screenName: 'userScreen'
            });
        } else if (userName === '' && password === '') {
            this.setState({
                errorTextForForm: 'Please fill all the mandatory fields.',
                errorTextForUserName: '',
                errorTextForPassword: ''
            });
        } else if (password === '') {
            this.setState({
                errorTextForPassword: 'Please fill Password field',
                errorTextForForm: '',
                errorTextForUserName: ''
            });
        } else if (userName === '') {
            this.setState({
                errorTextForUserName: 'Please fill User Name field',
                errorTextForForm: '',
                errorTextForPassword: ''
            });
        } else {
            this.setState({
                errorTextForForm: 'Invalid Credentials.',
                errorTextForUserName: '',
                errorTextForPassword: ''
            });
        }
    }

    render() {
        const Employee = [
            {
                fisrtName: 'Pradnya',
                id: '1'
            },
            {
                fisrtName: 'ira',
                id: '2'
            },
            {
                fisrtName: 'Esha',
                id: '3'
            }
        ];
        return (
          <MuiThemeProvider>
            <div>
              <HeaderComponent loginUser={this.state.userName} />
              <BodyContainer
                loginCredentials={this.changeLoginCredentials} screenName={this.state.screenName}
                errorTextForUserName={this.state.errorTextForUserName}
                errorTextForPassword={this.state.errorTextForPassword}
                errorTextForForm={this.state.errorTextForForm}
                Employee={Employee}
              />
            </div>
          </MuiThemeProvider>);
    }
}

export default AppContainerComponent;
