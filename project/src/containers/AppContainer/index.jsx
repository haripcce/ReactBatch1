/**
 * Created by synerzip on 04/07/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderContainer from 'containers/Header';
import BodyContainer from 'containers/BodyContainer';
import fetch from 'isomorphic-fetch';

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { screenName: 'login', EmpName: null, error: null, data: null };
        this.onChangeScreen = this.onChangeScreen.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        fetch('//localhost:3000/tasks')
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ data });
            });
    }

    onChangeScreen(newName) {
        this.setState({ screenName: newName });
    }

    onSubmit(username, password) {
       /* fetch('//localhost:3000/tasks', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'suvarna',
                password: 'demo'
            })
        }).then(response => {
            if (response.status >= 400) {
                throw new Error('Bad response from server');
            }
            return response.json();
        })
            .then(data1 => {
                this.setState({ data1 });
            });*/

        if (username === 'suvarna' && password === 'password') {
            /* fetch('//localhost:3000/tasks')
                .then(response => {
                    if (response.status >= 400) {
                        throw new Error('Bad response from server');
                    }
                    return response.json();
                })
                .then(data => {
                    this.setState({ data });
                });

        */
            this.setState({ screenName: 'employeeDetail' });
        } else {
            this.setState({ screenName: 'login', error: 'Enter Correct Credantials' });
        }
    }

    render() {
      /*  const loggedInUser = [
            { id: 1, name: 'John', address: 'NY' },
            { id: 2, name: 'Jill', address: 'INC' },
            { id: 3, name: 'Jake', address: 'UK' }
        ];
      */
        return (
          <MuiThemeProvider>
            <div>
              <HeaderContainer
                changeScreenName={this.onChangeScreen} screenName={this.state.screenName}
              />
              <BodyContainer
                screenName={this.state.screenName}
                data={this.state.data}
                errorMessage={this.state.error}
                onSubmit={this.onSubmit}
              />
            </div>
          </MuiThemeProvider>);
    }
}

export default AppContainer;
