/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import FlatButton from 'material-ui/FlatButton';
import HeaderComponent from 'components/Header';

const HeaderContainer = props => {
    let rightSideContent;
    if (props.screenName === 'employeeDetail') {
        rightSideContent = (<FlatButton
          label="Logout" onClick={
                () => props.changeScreenName('login')
                }
        />);
    } else {
        rightSideContent = (<FlatButton
          onClick={
                () => props.changeScreenName('employeeDetail')
                }
          label="Home" disabled
        />);
    }

    return (
      <div>
        <HeaderComponent
          changeScreenName={props.changeScreenName} rightSideContent={rightSideContent}
        />
      </div>
    );
};
HeaderContainer.propTypes = {
    changeScreenName: PropTypes.func,
    screenName: PropTypes.string
};

export default HeaderContainer;

