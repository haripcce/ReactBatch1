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

const EmployeeDetailComponent = props => (
  <div style={styles.propContainer}>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Address</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody>
        {props.data.map(row => (
          <TableRow key={row.id}>
            <TableRowColumn>{row.name}</TableRowColumn>
            <TableRowColumn>{row.address}</TableRowColumn>
          </TableRow>
              ))}
      </TableBody>
    </Table>

  </div>
    );
EmployeeDetailComponent.propTypes = {
    data: PropTypes.arrayOf(PropTypes.string)
};

export default EmployeeDetailComponent;

