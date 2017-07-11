/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import LoginContainer from 'containers/LoginContainer';
import EmployeeDetailContainer from 'containers/EmployeeDetailContainer';

const BodyContainer = props => {
    let button;
    const onSubmit = props.onSubmit.bind(this);

    if (props.screenName === 'login') {
        button = (<LoginContainer
          onSubmit={onSubmit}
          errorMessage={props.errorMessage}
        />);
    } else {
        button = (<EmployeeDetailContainer
          OnsubmitLogin={props.onSubmitScreen}
          data={props.data}
        />);
    }

    return (<div>
      {button}
    </div>);
};

BodyContainer.propTypes = {
    screenName: PropTypes.string,
    onSubmit: PropTypes.func,
    onSubmitScreen: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.string),
    errorMessage: PropTypes.string
};

export default BodyContainer;

