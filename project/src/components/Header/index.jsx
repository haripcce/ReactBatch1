/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';

const HeaderComponent = props => (
  <div>
    <AppBar
      title="Synerzip React Batch1 Employee Management System"
      iconElementRight={<div>
        {props.rightSideContent}
      </div>}
    />
  </div>
    );

HeaderComponent.propTypes = {
    rightSideContent: PropTypes.func
};

export default HeaderComponent;

