import React from 'react';

import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import projectData from 'JsonFiles/projectData';

const AllProjectInfoComponent = () => {
    const projects = projectData;

    const projectDetails = projects.map(
        project => (<TableRow >
          <TableRowColumn>{project.projectId}</TableRowColumn>
          <TableRowColumn>{project.projectName}</TableRowColumn>
          <TableRowColumn>{project.teamSize}</TableRowColumn>
        </TableRow>
        )
    );

    return (
      <Table >
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ProjectId</TableHeaderColumn>
            <TableHeaderColumn>ProjectName</TableHeaderColumn>
            <TableHeaderColumn>TeamSize</TableHeaderColumn>

          </TableRow>
        </TableHeader>
        <TableBody>
          {projectDetails}
        </TableBody>
      </Table>);
};

export default AllProjectInfoComponent;
