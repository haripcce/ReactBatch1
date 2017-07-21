import React from 'react';
import ProjectComponent from 'components/ProjectComponent';
import EmployeeDetailsComponent from 'components/EmployeeDetailsComponent';
import ProjectAndTeamSizeComponent from 'components/ProjectAndTeamSizeComponent';
import Paper from 'material-ui/Paper';
import propTypes from 'prop-types';
import projectData from 'JsonFiles/projectData';
import employeeData from 'JsonFiles/employeeData';

const DashBoardComponent = props => (
    <div>
        <div className="row summary-block">
            <div className="col-lg-3 ">
                <Paper className="summary-box">
                    <ProjectComponent
                        projectData={projectData}

                    />
                </Paper>
            </div>
            <div className="col-lg-3 ">
                <Paper className="summary-box">
                    <EmployeeDetailsComponent
                        empDetails={employeeData}

                    />
                </Paper>
            </div>
            <div className="col-lg-3 ">
                <Paper className="summary-box">
                    <div style={{height: 100}}/>
                </Paper>
            </div>
            <div className="col-lg-3 ">
                <Paper className="summary-box">
                    <div style={{height: 100}}/>
                </Paper>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-6 ">
                <Paper className="summary-box">
                    <ProjectAndTeamSizeComponent
                        empDetails={employeeData}
                        projectData={projectData}

                    />
                </Paper>
            </div>
            <div className="col-lg-6">
                <Paper className="summary-box">
                    <div style={{height: 280}}/>
                </Paper>
            </div>
        </div>
    </div>
);


export default DashBoardComponent;
