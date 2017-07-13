/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import EmployeeDetailComponent from 'components/EmployeeDetail';

const EmployeeDetailContainer = props => (<div>
  <EmployeeDetailComponent
    employee={props.employee}
  />
</div>);

EmployeeDetailContainer.propTypes = {
    employee: PropTypes.arrayOf(PropTypes.string)

};

export default EmployeeDetailContainer;

