import React from 'react';
import Paper from 'material-ui/Paper';
import propTypes from 'prop-types';
import ProjectPropertiesComponent from 'components/ProjectPropertiesComponent';

const style = {
    paper: {
        margin: 'auto',
        width: '300px',
        height: '300px',
        marginTop: '5%'
    },
    title: {
        fontWeight: 'bold'
    }
};
const AllProjectInfoComponent = props => {
    const projectPropArray = [];

    props.projectData.forEach(project => {
        const projectName = project.projectName;
        const teamSize = project.teamSize;
        projectPropArray.push(<ProjectPropertiesComponent
          projectName={projectName}
          teamSize={teamSize}
        />);
    });
    return (
      <Paper style={style.paper} zDepth={4}>
        <table className="table">
          <thead>
            <tr style={style.title}>Project Information</tr>
          </thead>
          <tbody>
            {projectPropArray}
          </tbody>
        </table>
      </Paper>
    );
};
AllProjectInfoComponent.propTypes = {
    projectData: propTypes.arrayOf(propTypes.string)
};
export default AllProjectInfoComponent;
