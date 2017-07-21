import React from 'react';
import employeeData from 'JsonFiles/employeeData';
import projectData from 'JsonFiles/projectData';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const EmployeeDetailedInfoComponent = props => {
    const employeeDetails = [];
    const projectHash = {};

    // Prepare project hash. {'id' => {project_data}, .... }
    // This will avoid loop for getting project name for each project
    projectData.forEach(p => {
        projectHash[p.projectId] = p;
    });

    employeeData.filter(e => {
        if (props.params.id) {
            return (String.valueOf(e.projectId) === props.params.id);
        }
        return true;
    }).forEach(employee => {
        const projectName = projectHash[employee.projectId].projectName;
        employeeDetails.push(<TableRow >
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
    });

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

export default EmployeeDetailedInfoComponent;
