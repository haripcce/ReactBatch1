import React from 'react';
import propTypes from 'prop-types';

const EmployeeRowContainer = props => (
  <tr>
    <td>
      {props.name}
    </td>
  </tr>);

EmployeeRowContainer.propTypes = {
    name: propTypes.string
};

export default EmployeeRowContainer;
