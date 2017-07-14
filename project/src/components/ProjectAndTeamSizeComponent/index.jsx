import React from 'react';
import propTypes from 'prop-types';
import ProjectAndTeamSizeContainer from 'container/ProjectAndTeamSizeContainer';

const ProjectAndTeamSizeComponent = props => (
  <div>
    <ProjectAndTeamSizeContainer
      empDetails={props.empDetails}
      projectData={props.projectData}
    />
  </div>
);

ProjectAndTeamSizeComponent.propTypes = {
    empDetails: propTypes.arrayOf(propTypes.string),
    projectData: propTypes.arrayOf(propTypes.string)
};

export default ProjectAndTeamSizeComponent;
