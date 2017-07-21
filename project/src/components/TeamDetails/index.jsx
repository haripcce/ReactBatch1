import React from 'react';
import propTypes from 'prop-types';
import {
    TableRow,
    TableRowColumn
} from 'material-ui/Table';
import { hashHistory } from 'react-router';

class TeamDetails extends React.Component {
    constructor() {
        super();
        this.onClickOfProject = this.onClickOfProject.bind(this);
    }
    static get contextTypes() {
        return {
            router: React.PropTypes.object
        };
    }

    onClickOfProject() {
       /* this.props.navHistory(this.props.projectName);
        this.props.selectedProjectId(this.props.projectName,this.props.empId);
        this.props.changeScreen('employeeInfo');*/
        hashHistory.push(`/dashPage/${this.props.projectName}/${this.props.empId}`);
    }

    render() {
        return (
          <TableRow >
            <TableRowColumn>
              <a onClick={this.onClickOfProject}>
                {this.props.projectName}
              </a>
            </TableRowColumn>
            <TableRowColumn>
              {this.props.teamSize}
            </TableRowColumn>
          </TableRow >);
    }
}
TeamDetails.propTypes = {
    projectName: propTypes.string,
    teamSize: propTypes.string
};

export default TeamDetails;
