/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ProjectDetailComponent from 'components/ProjectDetail';

const ProjectDetailContainer = props => (<div>
  <ProjectDetailComponent
    project={props.project}

  />
</div>);

ProjectDetailContainer.propTypes = {
    project: PropTypes.arrayOf(PropTypes.string)

};

export default ProjectDetailContainer;

