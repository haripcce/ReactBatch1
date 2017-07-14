/**
 * Created by synerzip on 04/07/17.
 */
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HeaderComponent from 'components/Header';
import DashBoardContainerComponent from 'components/DashBoardContainerComponent';

const style = {
    mainPage: {
        backgroundColor: 'whiteSmoke'
    }
};
const AppContainer = function () {
    return (
      <MuiThemeProvider>
        <div style={style.mainPage} >
          <HeaderComponent />
          <DashBoardContainerComponent />
        </div>
      </MuiThemeProvider>);
};

export default AppContainer;
