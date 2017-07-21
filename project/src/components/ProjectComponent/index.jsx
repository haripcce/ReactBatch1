import React from 'react';
import propTypes from 'prop-types';
import ProjectContainer from 'container/ProjectContainer';

const ProjectComponent = props => (
  <div>
    <ProjectContainer
      projectData={props.projectData}
      navHistory={props.navHistory}
    />
  </div>
);

ProjectComponent.propTypes = {
    projectData: propTypes.arrayOf(propTypes.string),
    navHistory: propTypes.func
};

export default ProjectContainer;
