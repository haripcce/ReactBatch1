/**
 * Created by synerzip on 05/07/17.
 */
import React from 'react';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

const styles = {
    errorDiv: {
        color: 'red',
        margin: '10px'
    },
    mainDiv: {
        margin: 'auto',
        width: '50%',
        border: '3px solid rgb(0, 188, 212)',
        padding: '10px',
        marginTop: '20px'
    },
    btnSubmit: {
        marginTop: '10px'
    }
};

class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            errors: {}
        };
        this.contactSubmit = this.contactSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const fields = this.state.fields;
        fields[event.target.name] = event.target.value;
        this.setState({ fields });
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            this.props.checkLogin(this.state.fields.name, this.state.fields.pass);
        }
    }

    handleValidation() {
        const fields = this.state.fields;
        const errors = {};
        let formIsValid = true;

        // Username
        if (!fields.name) {
            formIsValid = false;
            errors.name = 'User name cannot be empty';
        }

        // pass
        if (!fields.pass) {
            formIsValid = false;
            errors.pass = 'Password cannot be empty';
        }

        this.setState({ errors });
        return formIsValid;
    }

    render() {
        return (
          <form
            name="contactform" className="contactform"
            onSubmit={this.contactSubmit}
          >
            <div style={styles.mainDiv}>
              <h4>LogIn Details</h4>
              <TextField
                name="name"
                hintText="User Name"
                fullWidth
                onChange={this.handleChange}
                value={this.state.fields.name}
              /><br />
              <div style={{ color: 'red' }}>{this.state.errors.name}</div>

              <TextField
                name="pass"
                hintText="Password"
                type="password"
                fullWidth
                onChange={this.handleChange}
                value={this.state.fields.pass}
              /><br />

              <div style={{ color: 'red' }}>{this.state.errors.pass}</div>

              <div>
                <button value="Submit" style={styles.btnSubmit}>Submit</button></div>
            </div>
            <div style={{ color: 'red' }} />
          </form>
        );
    }
}

LoginContainer.propTypes = {
    checkLogin: PropTypes.func
};

export default LoginContainer;

