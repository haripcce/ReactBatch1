/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import DashBoardComponent from 'components/DashBoard';

const DashBoardContainer = props => (
  <div>
    <DashBoardComponent
      bodyScreenName={props.bodyScreenName}
      changeNavigation={props.changeNavigation}
      currentProject={props.currentProject}
      currentEmployee={props.currentEmployee}
    />
  </div>
        );

DashBoardContainer.propTypes = {
    changeNavigation: PropTypes.func,
    bodyScreenName: PropTypes.string,
    currentProject: PropTypes.string,
    currentEmployee: PropTypes.string
};
export default DashBoardContainer;

