/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import { hashHistory } from 'react-router';

class HeaderComponent extends React.Component {
    constructor() {
        super();
        this.showLogin = this.showLogin.bind(this);
    }
    showLogin() {
        hashHistory.push('/login');
    }

    render() {

        const locationString = window.location.href;
        const result = locationString.search('dashPage');
        let anchorValue = '';
        if (result !== -1) {
            anchorValue = (<div
              style={{ fontSize: '20',
                  fontWeight: '400',
                  lineHeight: '45px',
                  marginRight: '10' }}
            ><a style={{ color: 'white' }} onClick={this.showLogin}>Log Out</a>
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
export default HeaderComponent;

