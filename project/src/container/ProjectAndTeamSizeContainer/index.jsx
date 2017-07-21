import React from 'react';
import propTypes from 'prop-types';
import TeamDetails from 'components/TeamDetails';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn
} from 'material-ui/Table';

const style = {
    table: {
        width: '60%',
        height: '133px',
        overflowY: 'scroll',
        marginLeft: '15%'
    },
    tableHeaderStyle: {
        textAlign: 'right'
    }
};
const ProjectAndTeamSizeContainer = props => {
    const empDetails = props.empDetails;
    const projectData = props.projectData;
    const teamSizeArray = [];
    let teamCount = 0;
    projectData.forEach(p => {
        const pId = p.projectId;
        const pName = p.projectName;
        let count = 0;
        empDetails.forEach(e => {
            if (e.projectId === pId) {
                count++;
                teamCount = count;
            }
        });
        teamSizeArray.push(<TeamDetails
          projectName={pName}
          teamSize={teamCount}
          empId={pId}
          navHistory={props.navHistory}
          selectedProjectId={props.projectName}
          changeScreen={props.changeScreen}
        />);
    });

    return (
      <div>
        <div className="textStyle">Project Information</div>
        <Table
          className="table-text"
          fixedHeader
          fixedFooter
          selectable
          displaySelectAll={false}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            style={style.tableHeaderStyle}
          >
            <TableRow >
              <TableHeaderColumn>
                        Project Name
                    </TableHeaderColumn>
              <TableHeaderColumn>
                        Team size
                    </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {teamSizeArray}
          </TableBody>
        </Table></div>
    );
};
ProjectAndTeamSizeContainer.propTypes = {
    projectData: propTypes.arrayOf(propTypes.string),
    empDetails: propTypes.arrayOf(propTypes.string)
};

export default ProjectAndTeamSizeContainer;
