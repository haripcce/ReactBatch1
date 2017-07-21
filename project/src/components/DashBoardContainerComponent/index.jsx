import React from 'react';
import BreadCrumbAreaContainer from 'container/BreadCrumbAreaContainer';
import MainBodyAreaContainer from 'container/MainBodyAreaContainer';
import Employees from 'JsonFiles/employeeData';
import Project from 'JsonFiles/projectData';
import propTypes from 'prop-types';

class DashBoardContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            empDetails: Employees,
            projectData: Project


        };
        this.onClickOfProject = this.onClickOfProjectPaper.bind(this);
        this.onClickOfBreadcrumb = this.onClickOfBreadcrumb.bind(this);
        this.popBreadcrumbArray = this.popBreadcrumbArray.bind(this);

        this.getProjectId = this.getProjectId.bind(this);
        this.onChangeScreen = this.onChangeScreen.bind(this);
    }



    onClickOfProjectPaper(selection) {
        const selectionIndex = this.state.navHistory.indexOf(selection);
        if (selectionIndex === (-1)) {
            this.setState({
                navHistory: this.state.navHistory.concat([selection]),
                screenName: selection
            });
        }
    }
    getProjectId(Id, projectName) {
        this.setState({
            projectId: Id,
            projectName
        });
    }
    onClickOfBreadcrumb(selection) {
        this.setState({
            screenName: selection
        });
    }
    popBreadcrumbArray(selection) {
        const selectionIndex = this.state.navHistory.indexOf(selection);
        if (selectionIndex !== -1) {
            this.setState({
                navHistory: this.state.navHistory.slice(0, selectionIndex + 1)
            });
        }
    }
    onChangeScreen(screenName) {
        this.setState({
            screenName
        });
    }

    render() {
        return (
          <div className="container">
            <BreadCrumbAreaContainer

            />
            <MainBodyAreaContainer

              childProp={this.props.children}
            />
          </div>
        );
    }
}
DashBoardContainer.propTypes={
    children: propTypes.node
}

export default DashBoardContainer;
