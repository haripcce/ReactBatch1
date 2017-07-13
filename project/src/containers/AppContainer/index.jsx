/**
 * Created by synerzip on 04/07/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderContainer from 'containers/Header';
import BodyContainer from 'containers/BodyContainer';
// import fetch from 'isomorphic-fetch';

class AppContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { screenName: 'login', EmpName: null, error: null };
        this.onChangeScreen = this.onChangeScreen.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
       /* fetch('//localhost:3000/tasks')
            .then(response => {
                if (response.status >= 400) {
                    throw new Error('Bad response from server');
                }
                return response.json();
            })
            .then(data => {
                this.setState({ data });
            });*/
    }

    onChangeScreen(newName) {
        this.setState({ screenName: newName });
    }

    onSubmit(username, password) {
        if (username === 'suvarna' && password === 'password') {
            this.setState({ screenName: 'employeeDetail' });
        } else {
            this.setState({ screenName: 'login', error: 'Enter Correct Credantials' });
        }
    }

    render() {
        const loggedInUser = [
            { id: 1, name: 'John', address: 'NY' },
            { id: 2, name: 'Jill', address: 'INC' },
            { id: 3, name: 'Jake', address: 'UK' }
        ];
        const employeeListing = [
            { id: 1, name: 'John', address: 'NY', Projectid: 1, salary: '$10000' },
            { id: 2, name: 'Jill', address: 'INC', Projectid: 1, salary: '$22000' },
            { id: 3, name: 'Aron', address: 'UK', Projectid: 2, salary: '$15000' },
            { id: 4, name: 'Jake', address: 'UK', Projectid: 10, salary: '$15000' }
        ];

        const projectList = [
            { id: 1, projectName: 'Project1', teamSize: 2, projectStartDate: '17-10-2013' },
            { id: 2, projectName: 'Project2', teamSize: 1, projectStartDate: '17-10-2014' },
            { id: 10, projectName: 'Project3', teamSize: 1, projectStartDate: '17-10-2015' }
        ];

        return (
          <MuiThemeProvider>
            <div>
              <HeaderContainer
                changeScreenName={this.onChangeScreen} screenName={this.state.screenName}
              />
              <BodyContainer
                screenName={this.state.screenName}
                data={loggedInUser}
                errorMessage={this.state.error}
                onSubmit={this.onSubmit}
                employeeListing={employeeListing}
                projectList={projectList}
              />
            </div>
          </MuiThemeProvider>);
    }
}

export default AppContainer;
