import React from 'react';
import propTypes from 'prop-types';
import SearchAndAddEmpContainer from 'components/SearchAndAddEmpContainer';

const UserScreenAfterLoginComponent = props =>
  <div>
    <SearchAndAddEmpContainer Employee={props.Employee} />
  </div>;

UserScreenAfterLoginComponent.propTypes = {
    Employee: propTypes.arrayOf(propTypes.string)
};

export default UserScreenAfterLoginComponent;
