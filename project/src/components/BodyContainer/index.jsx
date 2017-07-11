/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import LoginContainer from 'components/LoginContainer';
import EmployeeComp from 'components/EmployeeDetails';

const BodyContainer = props => {
    let button;
    button = (<LoginContainer
      checkLogin={props.checkLogin}
    />);
    if (props.screenName === 'EmployeeDetails') { button = <EmployeeComp emp={props.emp} />; }
    return (
      <div>{button}</div>
    );
};

BodyContainer.propTypes = {
    checkLogin: PropTypes.func
};

BodyContainer.propTypes = {
    screenName: PropTypes.string
};

BodyContainer.propTypes = {
    emp: PropTypes.arrayOf(PropTypes.object)
};

export default BodyContainer;

