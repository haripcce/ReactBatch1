/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';

const HeaderComponent = props => {
    const username = props.username;
    const style = {
        margin: 12
    };
    let logoutButton;
    if (username !== '') {
        logoutButton =
          <RaisedButton label="Logout" primary style={style} />;
    }
    return (
      <div>
        <AppBar
          title="My Company"
          iconElementRight={<div>
            Welcome, {username}
            <br />
            {logoutButton}
          </div>}
        />
      </div>
    );
};

HeaderComponent.propTypes = {
    username: PropTypes.string
};

export default HeaderComponent;

