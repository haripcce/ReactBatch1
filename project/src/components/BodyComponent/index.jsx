/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import LoginContainer from 'containers/LoginContainer';
import EmployeeContainer from 'containers/EmployeeContainer';

const BodyComponent = props => {
    const checkLogin = props.checkLogin;
    const loggedInUser = props.loggedInUser;
    const openErrorMessage = props.openErrorMessage;
    const handleTouchTap = props.handleTouchTap;
    const handleRequestClose = props.handleRequestClose;
    const employeeList = props.employeeList;
    const screenName = props.screenName;
    const loginScreen = (<div>
      <LoginContainer
        loggedInUser={loggedInUser}
        checkLogin={checkLogin}
        openErrorMessage={openErrorMessage}
        handleTouchTap={handleTouchTap}
        handleRequestClose={handleRequestClose}
      />
    </div>);
    const employeeScreen = (<div>
      <EmployeeContainer employeeList={employeeList} />
    </div>);

    if (screenName === 'Login') {
        return (loginScreen);
    } else if (screenName === 'Employee') {
        return (employeeScreen);
    }
    return (loginScreen);
};

BodyComponent.propTypes = {
    loggedInUser: PropTypes.bool,
    openErrorMessage: PropTypes.bool,
    handleTouchTap: PropTypes.func,
    handleRequestClose: PropTypes.func,
    screenName: PropTypes.string,
    employeeList: PropTypes.arrayOf(PropTypes.object),
    checkLogin: PropTypes.func
};

export default BodyComponent;

