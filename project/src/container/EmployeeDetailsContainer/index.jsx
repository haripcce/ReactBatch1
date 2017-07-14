import React from 'react';
import employee from 'images/employee.png';
import propTypes from 'prop-types';

const style = {
    project: {
        width: '20%',
        padding: '5%',
        border: '1px solid red',
        backgroundColor: 'yellow',
        marginLeft: '20%',
        textAlign: 'center',
        display: 'block'
    },
    label: {
        fontSize: '22px',
        fontWeight: 'bold',
        marginRight: '3%',
        float: 'right',
        marginTop: '3%',
        marginLeft: '2%'
    },
    image: {
        width: '100%',
        height: '100%',
        display: 'block',
        margin: 'auto',
        borderRadius: '50%'
    },
    employeeLabel: {
        fontSize: '22px',
        fontWeight: 'bold',
        float: 'left',
        marginTop: '2%',
        marginLeft: '2%'
    },

    imageSize: {
        height: '20%',
        width: '20%',
        display: 'block',
        margin: '2%'
    }

};
class EmployeeDetailsContainer extends React.Component {
    constructor() {
        super();
        this.onClickOfEmployee = this.onClickOfEmployee.bind(this);
    }
    onClickOfEmployee() {
        this.props.stepperName('employeeInfo');
    }

    render() {
        const empLength = this.props.empDetails;
        return (
          <div >
            <div>
              <div style={style.imageSize}>
                <img
                  src={employee}
                  style={style.image}
                  onClick={this.onClickOfEmployee}
                  alt="employee"
                />
              </div>
              <div style={style.label}>{empLength.length}</div>
            </div>
            <div style={style.employeeLabel}>Employee</div>
          </div>
        );
    }
}

EmployeeDetailsContainer.propTypes = {
    empDetails: propTypes.arrayOf(propTypes.string),
    stepperName: propTypes.func
};
export default EmployeeDetailsContainer;
