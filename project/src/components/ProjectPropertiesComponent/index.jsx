import React from 'react';
import propTypes from 'prop-types';

const ProjectPropertiesComponent = props => (
  <tr>
    <td>
      {props.projectName}
    </td>
    <td>
      {props.teamSize}
    </td>
  </tr>
);

ProjectPropertiesComponent.propTypes = {
    projectName: propTypes.string,
    teamSize: propTypes.string
};

export default ProjectPropertiesComponent;
