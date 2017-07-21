/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActionCreator from 'actions/auth';

class HeaderComponent extends React.Component {
    constructor() {
        super();
        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        this.props.authActions.onLogout();
    }

    render() {
        let anchorValue = '';
        if (this.props.loggedInUser) {
            anchorValue = (<div
              style={{ fontSize: '20',
                  fontWeight: '400',
                  lineHeight: '45px',
                  marginRight: '10' }}
            >
              <span style={{ marginRight: 40 }}>{this.props.loggedInUser.userName}</span>
              <a style={{ color: 'white' }} onClick={this.onLogout}>
              Log Out</a>
            </div>);
        }

        return (
          <div>
            <AppBar
              title="My Company"
              iconElementRight={anchorValue}
            />
          </div>
        );
    }
}

HeaderComponent.propTypes = {
    changeScreenName: PropTypes.func
};

const mapStateToProps = state => ({
    loggedInUser: state.auth.loggedInUser
});

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);

