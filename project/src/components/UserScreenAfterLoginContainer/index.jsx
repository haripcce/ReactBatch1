import React from 'react';
import propTypes from 'prop-types';
import UserScreenAfterLoginContainer from '../UserScreenAfterLoginComponent1/index';

const UserScreenAfterLoginComponent = props => (
  <UserScreenAfterLoginContainer Employee={props.Employee} />
    );
UserScreenAfterLoginComponent.propTypes = {
    Employee: propTypes.arrayOf(propTypes.string)
};

export default UserScreenAfterLoginComponent;
