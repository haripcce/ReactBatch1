/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const HeaderComponent = props => {
    const onChangeScreen = props.changeScreenName;
    return (
      <div>
        <AppBar
          title="My Company"
          iconElementRight={<div>
            <FlatButton
              label="Screen 1"
              onClick={
                () => onChangeScreen('Screen 1')
                }
            />
            <FlatButton
              onClick={
                () => onChangeScreen('Screen 2')
                }
              label="Screen 2" value="Screen2"
            />
          </div>}
        />
      </div>
    );
};

HeaderComponent.propTypes = {
    changeScreenName: PropTypes.func
};
export default HeaderComponent;

