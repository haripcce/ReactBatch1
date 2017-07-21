import React from 'react';
import propTypes from 'prop-types';
import DashBoardComponent from 'components/DashBoardComponent';
import AllProjectInfoComponent from 'components/AllProjectInfoComponent';
import EmployeeDetailedInfoComponent from 'components/EmployeeDetailedInfoComponent';

const MainBodyAreaContainer = props =>
    /* if (props.screenName === 'projects') {
        return (
          <AllProjectInfoComponent
              projectData={props.projectData}
              navHistory={props.navHistory}/>
        );
    } else if (props.screenName === 'employeeInfo') {
        return (
          <EmployeeDetailedInfoComponent
            empDetails={props.empDetails}
            projectData={props.projectData}
            projectName={props.projectName}
            projectIdForEmpList={props.projectIdForEmpList}
            navHistory={props.navHistory}
            childProps={props.children}
          />
        );
    }

    return (
      <div>
        <DashBoardComponent
          empDetails={props.empDetails}
          projectData={props.projectData}
          navHistory={props.navHistory}
          projectName={props.projectName}
          changeScreen={props.changeScreen}
          childProps={props.children}

        />
      </div>*/
    (<div id="mainReplacibleBody">
      {props.childProp}</div>
    );

MainBodyAreaContainer.propTypes = {
    empDetails: propTypes.arrayOf(propTypes.object),
    projectData: propTypes.arrayOf(propTypes.object),
    stepperName: propTypes.func,
    screenName: propTypes.string
};

export default MainBodyAreaContainer;
