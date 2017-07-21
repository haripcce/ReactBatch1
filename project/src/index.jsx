/**
 * Created by vivekp on 07-05-2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import './css/dashboard.css';
import AppContainer from 'container/AppContainer';
import LoginScreenContainer from 'container/LoginScreenContainer';
import DashBoardContainerComponent from 'components/DashBoardContainerComponent';
import EmployeeDetailedInfoComponent from 'components/EmployeeDetailedInfoComponent';
import AllProjectInfoComponent from 'components/AllProjectInfoComponent';
import DashBoardComponent from 'components/DashBoardComponent';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from 'store';

ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
          <Route path="/login" component={LoginScreenContainer}/>
          <IndexRoute component={LoginScreenContainer}/>
          <Route path="/dashPage" component={DashBoardContainerComponent}>
            <Route path="/dashPage/dashboard" component={DashBoardComponent}/>
            <Route path="/dashPage/employee" component={EmployeeDetailedInfoComponent}/>
            <Route path="/dashPage/projects" component={AllProjectInfoComponent}/>
            <Route path="/dashPage/:projectName/:id" component={EmployeeDetailedInfoComponent}/>
          </Route>
        </Route>
      </Router>
    </Provider>
    ,
    document.getElementById('root'));
