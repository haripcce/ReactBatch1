import React from 'react';
import propTypes from 'prop-types';
import SearchComponent from 'components/SearchComponent';
import EmployeeTableComponent from 'components/EmployeeTableComponent';

const SearchAndAddEmpContainer = props => (
  <div >
    <SearchComponent />
    <EmployeeTableComponent Employee={props.Employee} />
  </div>);

SearchAndAddEmpContainer.propTypes = {
    Employee: propTypes.arrayOf(propTypes.string)
};
export default SearchAndAddEmpContainer;
