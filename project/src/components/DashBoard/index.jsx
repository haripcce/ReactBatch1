/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';

class DashBoardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.changeNavigation = this.props.changeNavigation.bind(this);
    }
    render() {
        let addArrow = '';
        let navigationLink; let navigationLink1; let navigationLink2;
        if (this.props.bodyScreenName === 'ProjectDetail') {
            addArrow = '>>';
            navigationLink = (<RaisedButton
              name="ProjectListing" label="ProjectListing>>"
              onClick={this.changeNavigation}
            />);
            navigationLink1 = (<RaisedButton
              name="ProjectDetail" label={this.props.bodyScreenName}
              onClick={this.changeNavigation}
            />);
            navigationLink2 = (<RaisedButton
              name="ProjectName" label={this.props.currentProject.projectName}
            />);
        } else if (this.props.bodyScreenName === 'EmployeeDetail') {
            addArrow = '>>';
            navigationLink = (<RaisedButton
              name="EmployeeListing"
              label="EmployeeListing>>" onClick={this.changeNavigation}
            />);
            navigationLink1 = (<RaisedButton
              name="EmployeeDetail"
              label={this.props.bodyScreenName} onClick={this.changeNavigation}
            />);
            navigationLink2 = (<RaisedButton
              name="EmployeeName"
              label={this.props.currentEmployee.name}
            />);
        } else if (this.props.bodyScreenName !== 'null') {
            addArrow = ' >> ';
            navigationLink = <RaisedButton name="Employee" label={this.props.bodyScreenName} />;
        } else { navigationLink = ''; }
        const labelForBreadcrumb = `Home    ${addArrow}`;
        return (
          <div>
            <RaisedButton
              name="Home"
              label={labelForBreadcrumb} value="Home" onClick={this.changeNavigation}
            />
            {navigationLink}{navigationLink1}{navigationLink2}

          </div>);
    }
}

DashBoardComponent.propTypes = {
    bodyScreenName: PropTypes.string,
    currentEmployee: PropTypes.arrayOf(PropTypes.string),
    currentProject: PropTypes.arrayOf(PropTypes.string),
    changeNavigation: PropTypes.func

};

export default DashBoardComponent;

