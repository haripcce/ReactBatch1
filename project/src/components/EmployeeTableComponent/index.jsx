import React from 'react';
import PropTypes from 'prop-types';
import EmployeeRowContainer from 'components/EmployeeRowContainer';

const style = {
    tbody: {
        textAlign: 'center'
    },
    tableSize: {
        width: '23%',
        height: '100%',
        margin: '1%'
    }
};
const EmployeeTableComponent = props => {
    const empArray = [];
    props.Employee.forEach(option => {
        const empName = option.fisrtName;
        empArray.push(<EmployeeRowContainer name={empName} />);
    });
    return (
      <div style={style.tableSize}>
        <table className="table table-inverse table-bordered">
          <thead />
          <tbody style={style.tbody}>
            {empArray}
          </tbody>
        </table>

      </div>);
};
EmployeeTableComponent.propTypes = {
    Employee: PropTypes.arrayOf(PropTypes.string)
};

export default EmployeeTableComponent;
