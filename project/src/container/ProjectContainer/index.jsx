import React from 'react';
import propTypes from 'prop-types';
import { hashHistory } from 'react-router';

class ProjectContainer extends React.Component {
    constructor() {
        super();
        this.onClickOfProject = this.onClickOfProject.bind(this);
    }

    onClickOfProject() {
       /* this.props.navHistory('projects');*/
        hashHistory.push('/dashPage/projects');
    }

    render() {
        const length = this.props.projectData.length;
        return (
          <div onClick={this.onClickOfProject}>
            <div className="countLabel">{length}</div>
            <div className="summary-box-label">Projects</div>
          </div>
        );
    }
}

ProjectContainer.propTypes = {
    projectData: propTypes.arrayOf(propTypes.string),
    navHistory: propTypes.func
};
export default ProjectContainer;
