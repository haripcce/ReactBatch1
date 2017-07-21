import {
     Router,
    Route
} from 'react-router';
import React from 'react';

import AppContainer from 'container/AppContainer';
import LoginScreenContainer from 'container/LoginScreenContainer';
import DashBoardContainerComponent from 'components/DashBoardContainerComponent';

const router = (

  <div>
    <Route exact path="/" component={AppContainer} />
    <Route path="/login" component={LoginScreenContainer} />
    <Route path="/dashboard" component={DashBoardContainerComponent} />

  </div>

);

export default router;
