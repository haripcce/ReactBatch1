import React from 'react';
import propTypes from 'prop-types';
import project from 'images/project.jpg';

const style = {
    project: {
        width: '20%',
        padding: '5%',
        border: '1px solid red',
        backgroundColor: 'red',
        marginLeft: '15%',
        textAlign: 'center',
        display: 'block'
    },
    label: {
        fontSize: '22px',
        fontWeight: 'bold',
        float: 'right',
        marginRight: '3%',
        marginTop: '3%',
        marginLeft: '2%'
    },
    image: {
        width: '100%',
        height: '100%',
        margin: 'auto',
        borderRadius: '50%',
        display: 'inline-block'
    },
    projectLabel: {
        fontSize: '22px',
        fontWeight: 'bold',
        float: 'left',
        marginTop: '2%',
        marginLeft: '2%'

    },

    imageSize: {
        height: '20%',
        width: '20%',
        display: 'inline-block',
        margin: '2%'
    }
};

class ProjectContainer extends React.Component {
    constructor() {
        super();
        this.onClickOfProject = this.onClickOfProject.bind(this);
    }

    onClickOfProject() {
        this.props.stepperName('projects');
    }

    render() {
        const length = this.props.projectData.length;
        return (
          <div >
            <div >
              <div style={style.imageSize}>
                <img
                  src={project}
                  style={style.image}
                  onClick={this.onClickOfProject}
                  alt="project"
                />
              </div>
              <div style={style.label}>{length}</div>
            </div>
            <div style={style.projectLabel}>Project</div>
            <br />
          </div>
        );
    }
}

ProjectContainer.propTypes = {
    projectData: propTypes.arrayOf(propTypes.string),
    stepperName: propTypes.func
};
export default ProjectContainer;
