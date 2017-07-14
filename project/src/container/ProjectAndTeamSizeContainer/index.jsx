import React from 'react';
import propTypes from 'prop-types';
import TeamDetails from 'components/TeamDetails';

const style = {
    table: {
        width: '60%',
        height: '133px',
        overflowY: 'scroll',
        marginLeft: '15%'
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
        const count = 0;
        empDetails.forEach(e => {
            if (e.projectId === pId) {
                teamCount = count + 1;
            }
        });
        teamSizeArray.push(<TeamDetails projectName={pName} teamSize={teamCount} />);
    });

    return (
      <table className="table" style={style.table}>
        <thead>
          <tr>
            <th>
                        Project Name
                    </th>
            <th>
                        Team size
                    </th>
          </tr>
        </thead>
        <tbody>
          {teamSizeArray}
        </tbody>
      </table>
    );
};
ProjectAndTeamSizeContainer.propTypes = {
    projectData: propTypes.arrayOf(propTypes.string),
    empDetails: propTypes.arrayOf(propTypes.string)
};

export default ProjectAndTeamSizeContainer;
