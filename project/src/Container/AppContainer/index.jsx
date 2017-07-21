/**
 * Created by synerzip on 04/07/17.
 */
import React from 'react';

import HeaderComponent from 'components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {
    mainPage: {
        backgroundColor: 'whiteSmoke'
    }
};

const AppContainer = props => (
  <MuiThemeProvider>
    <div style={style.mainPage} >
      <HeaderComponent />
      <div id="childaId">
        {props.children}
      </div>
      {/* <BodyContainer/>*/}
      {/* <DashBoardContainerComponent />*/}
    </div>
  </MuiThemeProvider>);

export default AppContainer;
