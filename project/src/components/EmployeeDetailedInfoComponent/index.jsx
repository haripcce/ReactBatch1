import React from 'react';
import propTypes from 'prop-types';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const EmployeeDetailedInfoComponent = props => {
    let projectName = '';
    const employeeDetails = props.empDetails.map(
        employee => (
            props.projectData.map(
                project => {
                    if (employee.projectId === project.projectId) {
                        projectName = project.projectName;
                    }

                    return (<TableRow >
                      <TableRowColumn>{employee.id}</TableRowColumn>
                      <TableRowColumn>{employee.fname} {employee.lname}</TableRowColumn>
                      <TableRowColumn>{employee.salary}</TableRowColumn>
                      <TableRowColumn>{projectName}</TableRowColumn>
                      <TableRowColumn>
                        {employee.address.address_line1}
                        <br />
                        {employee.address.address_line2}
                        <br />
                        {employee.address.street}
                        <br />
                        {employee.address.zip}
                        <br />
                        {employee.address.country}
                      </TableRowColumn>
                    </TableRow>
                    );
                }
            )
        )
    );

    return (<Table
      fixedHeader
      fixedFooter
      selectable
      displaySelectAll={false}
    >
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn>EmployeeId</TableHeaderColumn>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Salary</TableHeaderColumn>
          <TableHeaderColumn>Project</TableHeaderColumn>
          <TableHeaderColumn>Address</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {employeeDetails}
      </TableBody>
    </Table>);
};
EmployeeDetailedInfoComponent.propTypes = {
    empDetails: propTypes.arrayOf(propTypes.string),
    projectData: propTypes.arrayOf(propTypes.string)

};

export default EmployeeDetailedInfoComponent;
