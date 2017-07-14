import React from 'react';
import propTypes from 'prop-types';
import DashBoardComponent from 'components/DashBoardComponent';
import AllProjectInfoComponent from 'components/AllProjectInfoComponent';
import EmployeeDetailedInfoComponent from 'components/EmployeeDetailedInfoComponent';

const MainBodyAreaContainer = props => {
    if (props.screenName === 'projects') {
        return (
          <AllProjectInfoComponent projectData={props.projectData} />
        );
    } else if (props.screenName === 'employeeInfo') {
        return (
          <EmployeeDetailedInfoComponent
            empDetails={props.empDetails}
            projectData={props.projectData}
          />
        );
    }

    return (
      <div>
        <DashBoardComponent
          empDetails={props.empDetails}
          projectData={props.projectData}
          stepperName={props.stepperName}
        />
      </div>
    );
};

MainBodyAreaContainer.propTypes = {
    empDetails: propTypes.arrayOf(propTypes.string),
    projectData: propTypes.arrayOf(propTypes.string),
    stepperName: propTypes.func,
    screenName: propTypes.string
};

export default MainBodyAreaContainer;
