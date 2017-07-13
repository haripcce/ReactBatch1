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

class EmployeeListingComponent extends React.Component {
    constructor(props) {
        super(props);
        this.openProjectDetailPage = this.openProjectDetailPage.bind(this);
        this.openProjectDetailPage = this.openProjectDetailPage.bind(this);
    }
    openEmployeePage(selectedRows) {
        this.setState({
            selected: selectedRows
        });
        const selectedEmployeeId = selectedRows[0];
        this.props.sendPageDetail('EmployeeDetail', selectedEmployeeId);
        this.openEmployeePage = this.openEmployeePage.bind(this);
        this.openProjectDetailPage = this.openProjectDetailPage.bind(this);
    }
    openProjectDetailPage(row, column, event) {
        if (column === 2) {
            const selectedEmployeeId = row;
            const projectId = this.props.employeeListing[selectedEmployeeId].Projectid;
            const index = this.props.projectList.map(o => o.id).indexOf(parseInt(projectId, 10));
            this.props.sendPageDetail('ProjectDetail', index);
            event.stopPropagation();
            event.preventDefault();
        } else {
            const selectedEmployeeId = row;
            this.props.sendPageDetail('EmployeeDetail', selectedEmployeeId);
        }
    }
    render() {
        const people = this.props.employeeListing;
        const projects = this.props.projectList;
        const countOfPeople = this.props.employeeListing.length;
        const countOfProject = this.props.projectList.length;

        for (let i = 0; i < countOfPeople; i += 1) {
            for (let j = 0; j < countOfProject; j += 1) {
                if (people[i].Projectid === projects[j].id) {
                    people[i].ProjectName = projects[j].projectName;
                }
            }
        }
        return (
          <div style={styles.propContainer}>
            <Table
              onRowSelection={this.openEmployeePage}
              onCellClick={this.openProjectDetailPage}
            >
              <TableHeader >
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Address</TableHeaderColumn>
                  <TableHeaderColumn>Project</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {people.map(row => (
                  <TableRow key={row.id}>
                    <TableRowColumn>{row.name}</TableRowColumn>
                    <TableRowColumn>{row.address}</TableRowColumn>
                    <TableRowColumn
                      className={row.ProjectName}
                      value="SUVARNA"
                    >{row.ProjectName}</TableRowColumn>

                  </TableRow>
                        ))}
              </TableBody>
            </Table>

          </div>
        );
    }
}

EmployeeListingComponent.propTypes = {
    employeeListing: PropTypes.arrayOf(PropTypes.string),
    projectList: PropTypes.arrayOf(PropTypes.string),
    sendPageDetail: PropTypes.func
};

export default EmployeeListingComponent;

