/**
 * Created by synerzip on 04/07/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderComponent from 'components/Header';
import BodyComponent from 'components/BodyComponent';

const employees = [
  { name: 'A', id: 1 },
  { name: 'B', id: 2 },
  { name: 'C', id: 3 },
  { name: 'D', id: 4 },
  { name: 'E', id: 5 },
  { name: 'F', id: 6 }

];

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            screenName: 'Login',
            loggedInUser: false,
            username: '',
            open: false
        };
        this.checkLogin = this.checkLogin.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);
    }

    handleTouchTap() {
        this.setState({
            open: true
        });
    }

    handleRequestClose() {
        this.setState({
            open: false
        });
    }

    checkLogin(username, password) {
        if (username === 'Ankit' && password === 'ankit') {
            this.setState({ loggedInUser: true,
                screenName: 'Employee',
                username });
        } else {
            this.setState({ loggedInUser: false,
                screenName: 'Login' });
            this.handleTouchTap();
        }
    }

    render() {
        return (
          <MuiThemeProvider>
            <div>
              <HeaderComponent
                changeScreenName={this.onChangeScreen}
                username={this.state.username}
              />
              <BodyComponent
                screenName={this.state.screenName}
                checkLogin={this.checkLogin}
                loggedInUser={this.state.loggedInUser}
                openErrorMessage={this.state.open}
                handleTouchTap={this.handleTouchTap}
                handleRequestClose={this.handleRequestClose}
                employeeList={employees}
              />
            </div>
          </MuiThemeProvider>);
    }
}

export default AppContainer;
