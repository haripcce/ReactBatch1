import React from 'react';
import BreadCrumbAreaContainer from 'container/BreadCrumbAreaContainer';
import MainBodyAreaContainer from 'container/MainBodyAreaContainer';
import Employees from 'JsonFiles/employeeData';
import Project from 'JsonFiles/projectData';

class DashBoardContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            empDetails: Employees,
            projectData: Project,
            stepperName: ''

        };
        this.onClickOfProject = this.onClickOfProject.bind(this);
    }

    onClickOfProject(selection) {
        this.setState({
            stepperName: selection
        });
    }

    render() {
        return (
          <div>
            <BreadCrumbAreaContainer
              stepperName={this.state.stepperName}

            />
            <MainBodyAreaContainer
              empDetails={this.state.empDetails}
              projectData={this.state.projectData}
              stepperName={this.onClickOfProject}
              screenName={this.state.stepperName}

            />
          </div>
        );
    }
}

export default DashBoardContainer;
