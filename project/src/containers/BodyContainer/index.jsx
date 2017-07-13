/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import LoginContainer from 'containers/LoginContainer';
import EmployeeDetailContainer from 'containers/EmployeeDetailContainer';
import EmployeeListingContainer from 'containers/EmployeeListingContainer';
import DashBoardContainer from 'containers/DashBoardContainer';
import ProjectListingContainer from 'containers/ProjectListingContainer';
import ProjectDetailContainer from 'containers/ProjectDetailContainer';
import BodyComponent from 'components/Body';

class BodyContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { bodyScreenName: 'null', currentProjectId: '', currentEmployeeId: '' };
        this.sendPageDetail = this.sendPageDetail.bind(this);
        this.changeNavigation = this.changeNavigation.bind(this);
        this.onSubmit = this.props.onSubmit.bind(this);
    }

    sendPageDetail(name, id = null) {
        if (name === 'ProjectDetail') { this.setState({ bodyScreenName: name, currentProjectId: id }); } else if (name === 'EmployeeDetail') { this.setState({ bodyScreenName: name, currentEmployeeId: id }); } else { this.setState({ bodyScreenName: name }); }
        event.stopPropagation();
        event.preventDefault();
    }

    changeNavigation(event) {
        if (event.target.value === 'Home') { this.setState({ bodyScreenName: 'null' }); } else { this.setState({ bodyScreenName: event.target.name }); }
    }

    render() {
        let button;
        const projectId = this.state.currentProjectId;
        const employeeId = this.state.currentEmployeeId;
        if (this.props.screenName === 'login') {
            button = (<LoginContainer
              onSubmit={this.onSubmit}
              errorMessage={this.props.errorMessage}
            />);
        } else if (this.state.bodyScreenName === 'EmployeeListing') {
            button = (<EmployeeListingContainer
              employeeListing={this.props.employeeListing}
              projectList={this.props.projectList}
              sendPageDetail={this.sendPageDetail}
            />);
        } else if (this.state.bodyScreenName === 'EmployeeDetail') {
                // const employeeId = this.state.currentEmployeeId;

            button = (<EmployeeDetailContainer
              employee={this.props.employeeListing[employeeId]}
            />);
        } else if (this.state.bodyScreenName === 'ProjectDetail') {
                //  const projectId = this.state.currentProjectId;
            button = (<ProjectDetailContainer
              project={this.props.projectList[projectId]}
            />);
        } else if (this.state.bodyScreenName === 'ProjectListing') {
            button = (<ProjectListingContainer
              projectList={this.props.projectList}
              sendPageDetail={this.sendPageDetail}
            />);
        } else {
            button = (<BodyComponent
              employeeListing={this.props.employeeListing}
              projectList={this.props.projectList}
              sendPageDetail={this.sendPageDetail}
            />);
        }

        return (<div>
          <DashBoardContainer
            bodyScreenName={this.state.bodyScreenName}
            currentProject={this.props.projectList[projectId]}
            currentEmployee={this.props.employeeListing[employeeId]}
            changeNavigation={this.changeNavigation}
          />
          {button}

        </div>);
    }
}

BodyContainer.propTypes = {
    screenName: PropTypes.string,
    onSubmit: PropTypes.func,
    errorMessage: PropTypes.string,
    employeeListing: PropTypes.arrayOf(PropTypes.string),
    projectList: PropTypes.arrayOf(PropTypes.string)
};

export default BodyContainer;

