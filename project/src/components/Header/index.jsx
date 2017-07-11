/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import propTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import managerIcon from '../../images/managerIcon.png';

const style = {
    image: {
        height: '80%',
        width: '61%'
    }
};
const HeaderComponent = props => (
  <div>
    <AppBar
      title="Synerzip pvt ltd"
      iconElementLeft={<div>
        <img src={managerIcon} style={style.image} alt="company icon" />
      </div>
        }

      iconElementRight={<div>
        <div>Welcome</div>
        <div>{props.loginUser }</div>
      </div>}
    />
  </div>
    );
HeaderComponent.propTypes = {
    loginUser: propTypes.string
};

export default HeaderComponent;

