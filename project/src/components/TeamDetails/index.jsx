import React from 'react';
import propTypes from 'prop-types';

const TeamDetails = props => (
  <tr>
    <td>
      <a>
        {props.projectName}
      </a>
    </td>
    <td>
      {props.teamSize}
    </td>
  </tr>
);
TeamDetails.propTypes = {
    projectName: propTypes.string,
    teamSize: propTypes.string
};

export default TeamDetails;
