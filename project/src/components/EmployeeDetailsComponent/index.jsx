import React from 'react';
import propTypes from 'prop-types';
import EmployeeDetailsContainer from 'container/EmployeeDetailsContainer';

const EmployeeDetailsComponent = props =>
    (<EmployeeDetailsContainer
      empDetails={props.empDetails}
      navHistory={props.navHistory}
      childProps={props.children}

    />);

EmployeeDetailsComponent.propTypes = {
    empDetails: propTypes.arrayOf(propTypes.string),
    navHistory: propTypes.func
};

export default EmployeeDetailsComponent;
