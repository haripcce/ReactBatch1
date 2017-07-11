import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    leftContent: {
        width: '100%',
        margin: '0 auto'
    },
    inputGroup: {
        display: 'inlineTable',
        verticalAlign: 'middle',
        width: '100%'
    },
    navbar: {
        marginBottom: '0px !important'
    }

};

class SearchScreen extends React.Component {
    doSearch() {
        const query = this.searchInput;
        const queryResult = [];
        this.props.emps.forEach(employee => {
            if (employee.name.toLowerCase().indexOf(query) !== -1) { queryResult.push(employee); }
        });
    }
    render() {
        return (
          <div style={styles.leftContent}>
            <form
              className="navbar-form"
            >
              <div className="input-group add-on">
                <input
                  className="form-control"
                  placeholder="Search" name="srch-term"
                  type="text"
                  ref={searchInput => { this.searchInput = searchInput; }}
                />
                {/* onChange={this.doSearch}*/}
                <div className="input-group-btn">
                  <button
                    className="btn btn-default"
                    type="submit"
                  >
                    <i className="glyphicon glyphicon-search" />
                  </button>
                  <button className="btn btn-default" type="submit">
                Cancel
              </button>
                </div>
              </div>
            </form>
          </div>
        );
    }
}

SearchScreen.propTypes = {
    emps: PropTypes.arrayOf(PropTypes.object)
};

export default SearchScreen;
