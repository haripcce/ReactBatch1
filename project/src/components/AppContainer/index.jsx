/**
 * Created by synerzip on 04/07/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderComponent from 'components/Header';
import BodyContainer from 'components/BodyContainer';

const employes = [
    { name: 'Rajshree', id: 1 },
    { name: 'Swati', id: 2 },
    { name: 'Priti', id: 3 },
    { name: 'Varsha', id: 4 },
    { name: 'Anchal', id: 5 },
    { name: 'Snehu', id: 6 }

];

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            screenName: null,
            showLogOut: false,
            username: null,
            errormsg: null
        };
        this.onLogin = this.onLogin.bind(this);
        this.checkLogin = this.checkLogin.bind(this);
    }

    onLogin(username) {
        this.setState({
            screenName: 'EmployeeDetails', username, showLogOut: true
        });
    }

    checkLogin(username, password) {
        if (username === 'Raj' && password === 'raj') {
            this.onLogin(username);
        } else {
            // logic do for another message
            // this.showError();
        }
    }

    showError() {
        this.setState({ errormsg: 'invalid input' });
    }

    render() {
        return (
          <MuiThemeProvider>
            <div>
              <HeaderComponent
                showUserName={this.state.username}
                showLogOut={this.state.showLogOut}
              />

              <BodyContainer
                screenName={this.state.screenName}
                onLogin={this.onLogin}
                emp={employes} checkLogin={this.checkLogin}
              />

            </div>
          </MuiThemeProvider>);
    }
}

export default AppContainer;
