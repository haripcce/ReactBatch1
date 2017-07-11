/**
 * Created by synerzip on 7/7/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import EmployeeComponent from 'components/EmployeeComponent';

const EmployeeContainer = props => {
    const employeeList = props.employeeList;

    return (<div>
      <EmployeeComponent employeeList={employeeList} />
    </div>);
};

EmployeeContainer.propTypes = {
    employeeList: PropTypes.arrayOf(PropTypes.object)
};

export default EmployeeContainer;
