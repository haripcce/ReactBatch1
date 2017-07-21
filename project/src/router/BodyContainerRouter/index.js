import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import React from 'react';
import LoginScreenContainer from 'container/LoginScreenContainer';
import DashBoardContainerComponent from 'components/DashBoardContainerComponent';

const BodyContainerRouter = (
  <Router>
    <Route path="/login" component={LoginScreenContainer} />
    <Route path="/dashboard" component={DashBoardContainerComponent} />
  </Router>
);

export default BodyContainerRouter;
