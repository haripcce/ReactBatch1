import React from 'react';
import propTypes from 'prop-types';
import EmployeeDetailsContainer from 'container/EmployeeDetailsContainer';

const EmployeeDetailsComponent = props =>
    (<EmployeeDetailsContainer
      empDetails={props.empDetails}
      stepperName={props.stepperName}
    />);

EmployeeDetailsComponent.propTypes = {
    empDetails: propTypes.arrayOf(propTypes.string),
    stepperName: propTypes.func
};

export default EmployeeDetailsComponent;
