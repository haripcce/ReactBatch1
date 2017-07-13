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

class ProjectListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: [1],
            project: []
        };
        this.openProjectPage = this.openProjectPage.bind(this);
    }

    isSelected(index) {
        return this.state.selected.indexOf(index) !== -1;
    }
    openProjectPage(selectedRows) {
        const selectedProjectId = selectedRows[0];
        this.props.sendPageDetail('ProjectDetail', selectedProjectId);
    }
    render() {
        const availableProjects = this.props.projectList.map(projects => (
          <TableRow key={projects.id} >
            <TableRowColumn>{projects.projectName}</TableRowColumn>
            <TableRowColumn>{projects.teamSize}</TableRowColumn>
          </TableRow>
            ));

        return (
          <div style={styles.propContainer}>
            <Table onRowSelection={this.openProjectPage}>
              <TableHeader>
                <TableRow>
                  <TableHeaderColumn>Project Name</TableHeaderColumn>
                  <TableHeaderColumn>Team Size</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody>
                {availableProjects}
              </TableBody>
            </Table>

          </div>
        );
    }
}

ProjectListing.propTypes = {
    projectList: PropTypes.arrayOf(PropTypes.string),
    sendPageDetail: PropTypes.func

};

export default ProjectListing;

