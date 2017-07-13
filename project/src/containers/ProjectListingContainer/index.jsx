/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import ProjectListing from 'components/ProjectListing';

const ProjectListingContainer = props => (<div>
  <ProjectListing
    projectList={props.projectList}
    sendPageDetail={props.sendPageDetail}
  />
</div>);

ProjectListingContainer.propTypes = {
    projectList: PropTypes.arrayOf(PropTypes.string),
    sendPageDetail: PropTypes.func

};

export default ProjectListingContainer;

