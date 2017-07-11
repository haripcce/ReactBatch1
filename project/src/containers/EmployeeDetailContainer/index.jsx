/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import EmployeeDetailComponent from 'components/EmployeeDetail';

const EmployeeDetailContainer = props => (<div>
  <EmployeeDetailComponent
    screenName={props.screenName}
    data={props.data}
  />
</div>);
EmployeeDetailContainer.propTypes = {
    screenName: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.string)

};

export default EmployeeDetailContainer;

