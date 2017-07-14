/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

const BodyContainer = props =>
  <div>{props.screenName}</div>;

BodyContainer.propTypes = {
    screenName: PropTypes.string
};

export default BodyContainer;

