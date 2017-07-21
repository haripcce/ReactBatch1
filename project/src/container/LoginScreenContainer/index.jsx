import React from 'react';
import propTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { hashHistory } from 'react-router';

const style = {
    centerContent: {
        width: '30%',
        margin: 'auto',
        marginTop: '7%',
        border: '3px solid lightBlue'
    },
    errorStyle: {
        marginTop: '1%',
        color: 'red'
    }
};

class LoginScreenContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '',
            password: ''

        };
        this.nameChange = this.onChangeOfNameField.bind(this);
        this.passwordChange = this.onChangeOfPasswordField.bind(this);
        this.handleSubmit = this.onSubmitClick.bind(this);
    }

    onChangeOfNameField(e) {
        this.setState({
            userName: e.target.value
        });
    }

    onChangeOfPasswordField(e) {
        this.setState({
            password: e.target.value

        });
    }

    onSubmitClick() {
        if (this.state.userName === 'Pradnya' && this.state.password === 'Pradnya') {
            hashHistory.push('/dashPage/dashboard');
        }
    }

    render() {
        return (
          <div style={style.centerContent}>
            <div style={{ margin: 20 }}>
              <div>
                <TextField
                  floatingLabelText="User Name :"
                  floatingLabelFixed
                  type="text"
                  hintText="User Name"
                  value={this.state.userName}
                  onChange={this.nameChange}
                  errorText={this.props.errorTextForUserName}
                />
              </div>
              <div>
                <TextField
                  floatingLabelText="Password:"
                  floatingLabelFixed
                  type="password"
                  hintText="password"
                  value={this.state.password}
                  onChange={this.passwordChange}
                  errorText={this.props.errorTextForPassword}
                />
              </div>
              <RaisedButton
                label="Submit"
                labelPosition="before"
                primary
                onClick={this.handleSubmit}
              />
              <p style={style.errorStyle}>{this.props.errorTextForForm}</p>
            </div>
          </div>

        );
    }
}

LoginScreenContainer.propTypes = {
    loginCredentials: propTypes.func,
    errorTextForForm: propTypes.func
};
export default LoginScreenContainer;
