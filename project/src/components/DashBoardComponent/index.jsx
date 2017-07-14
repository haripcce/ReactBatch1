import React from 'react';
import ProjectComponent from 'components/ProjectComponent';
import EmployeeDetailsComponent from 'components/EmployeeDetailsComponent';
import ProjectAndTeamSizeComponent from 'components/ProjectAndTeamSizeComponent';
import Paper from 'material-ui/Paper';
import propTypes from 'prop-types';

const style = {
    divSize: {
        width: '50%',
        marginTop: '5%',
        marginRight: '2%',
        height: '80%'
    },
    flex: {
        display: 'flex'
    },
    style: {
        height: '400px'
    }

};
const DashBoardComponent = props => (
  <div style={style.flex}>
    <div style={style.divSize}>
      <Paper style={style} zDepth={4}>
        <ProjectAndTeamSizeComponent
          empDetails={props.empDetails}
          projectData={props.projectData}
          stepperName={props.stepperName}
        />
      </Paper>
    </div>
    <div style={style.divSize}>
      <Paper style={style.style} zDepth={4}>
        <ProjectComponent
          projectData={props.projectData}
          stepperName={props.stepperName}
        />
        <EmployeeDetailsComponent
          empDetails={props.empDetails}
          stepperName={props.stepperName}
        />
      </Paper>
    </div>
  </div>);
DashBoardComponent.propTypes = {
    empDetails: propTypes.arrayOf(propTypes.string),
    stepperName: propTypes.func,
    projectData: propTypes.arrayOf(propTypes.string)
};

export default DashBoardComponent;
