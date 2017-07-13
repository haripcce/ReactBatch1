/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

const styles = {
    propContainer: {
        width: 500,
        overflow: 'hidden',
        margin: '20px auto 0'
    },
    propToggleHeader: {
        margin: '20px auto 10px'
    },
    display: 'inline-block',
    margin: '16px 32px 16px 0'
};

class BodyComponent extends React.Component {

    constructor(props) {
        super(props);

        this.sendPageName = this.sendPageName.bind(this);
    }
    sendPageName(event) {
        this.props.sendPageDetail(event.target.name);
    }

    render() {
        const textForProj = `Number of Projects =${this.props.projectList.length}`;
        const textForEmployee = `Number of Employees =${this.props.employeeListing.length}`;
        return (<div style={styles.propContainer}>

          <Paper style={styles} zDepth={5} rounded={false} >
            <FlatButton
              name="ProjectListing"
              label={textForProj} onClick={this.sendPageName}
            />
          </Paper>
          <Divider />
          <Paper style={styles} zDepth={5} rounded={false} >
            <FlatButton
              name="EmployeeListing" label={textForEmployee}
              onClick={this.sendPageName}
            />
          </Paper>
        </div>);
    }
}
BodyComponent.propTypes = {
    projectList: PropTypes.arrayOf(PropTypes.string),
    employeeListing: PropTypes.arrayOf(PropTypes.string),
    sendPageDetail: PropTypes.func
};

export default BodyComponent;

