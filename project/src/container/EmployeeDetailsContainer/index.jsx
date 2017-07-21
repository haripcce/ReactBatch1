import React from 'react';
import propTypes from 'prop-types';
import { hashHistory } from 'react-router';

class EmployeeDetailsContainer extends React.Component {
    constructor() {
        super();
        this.onClickOfEmployee = this.onClickOfEmployee.bind(this);
    }

    onClickOfEmployee() {
       /* this.props.navHistory('employeeInfo');*/
        hashHistory.push('/dashPage/employee');
    }

    render() {
        const empLength = this.props.empDetails;
        return (
          <div onClick={this.onClickOfEmployee}>
            <div className="countLabel">{empLength ? empLength.length : 0}</div>
            <div className="summary-box-label">Employee</div>
          </div>

        );
    }
}

EmployeeDetailsContainer.propTypes = {
    empDetails: propTypes.arrayOf(propTypes.string),
    navHistory: propTypes.func
};
export default EmployeeDetailsContainer;
