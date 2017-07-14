import React from 'react';
import propTypes from 'prop-types';
import ProjectContainer from 'container/ProjectContainer';

const ProjectComponent = props => (
  <div>
    <ProjectContainer
      projectData={props.projectData}
      stepperName={props.stepperName}
    />
  </div>
);

ProjectComponent.propTypes = {
    projectData: propTypes.arrayOf(propTypes.string),
    stepperName: propTypes.func
};

export default ProjectContainer;
