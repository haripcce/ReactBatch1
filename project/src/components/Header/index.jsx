/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

const styles = {
    rightDivUser: {
        float: 'left',
        marginRight: '30px'
    },
    rightDivIcon: {
        float: 'left',
        margin: '10px 20px 0 0',
        cursor: 'pointer'
    }
};

const HeaderComponent = props => {
    let renderElement;
    const logOutIcon = <span className="glyphicon glyphicon-log-out" title="LogOut" />;
    if (props.showLogOut === true) { renderElement = logOutIcon; }
    return (
      <div>
        <AppBar
          title="Synerzip Softech India Pvt Ltd"
          iconElementRight={
            <div>
              <div style={styles.rightDivUser}><h4>{'Welcome '} {props.showUserName}</h4></div>
              <div style={styles.rightDivIcon} >{renderElement}</div>
            </div>}
        />
      </div>
    );
};

HeaderComponent.propTypes = {
    showUserName: PropTypes.string.isRequired
};

HeaderComponent.propTypes = {
    showLogOut: PropTypes.bool.isRequired
};

export default HeaderComponent;

