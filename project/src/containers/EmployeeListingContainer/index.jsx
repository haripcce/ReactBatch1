/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import EmployeeListingComponent from 'components/EmployeeListing';

const EmployeeListingContainer = props => (<div>
  <EmployeeListingComponent
    employeeListing={props.employeeListing}
    projectList={props.projectList}
    sendPageDetail={props.sendPageDetail}
  />
</div>);

EmployeeListingContainer.propTypes = {
    sendPageDetail: PropTypes.func,
    employeeListing: PropTypes.arrayOf(PropTypes.string),
    projectList: PropTypes.arrayOf(PropTypes.string)

};

export default EmployeeListingContainer;

