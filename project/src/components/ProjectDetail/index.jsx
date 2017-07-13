/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

const styles = {
    propContainer: {
        width: 500,
        overflow: 'hidden',
        margin: '20px auto 0'
    },
    propToggleHeader: {
        margin: '20px auto 10px'
    }
};

const ProjectDetailComponent = props => (
  <div style={styles.propContainer}>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>TeamSize</TableHeaderColumn>
          <TableHeaderColumn>StartDate</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow key={props.project.id}>
          <TableRowColumn>{props.project.projectName}</TableRowColumn>
          <TableRowColumn>{props.project.teamSize}</TableRowColumn>
          <TableRowColumn>{props.project.projectStartDate}</TableRowColumn>

        </TableRow>

      </TableBody>

    </Table>

  </div>
    );
ProjectDetailComponent.propTypes = {
    project: PropTypes.arrayOf(PropTypes.string)
};

export default ProjectDetailComponent;

