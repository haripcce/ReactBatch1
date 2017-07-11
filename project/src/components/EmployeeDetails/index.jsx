/**
 * Created by synerzip on 5/7/17.
 */

import React from 'react';
import PropTypes from 'prop-types';
import AddNewComponent from 'components/AddNewContainer';
import SearchScreen from 'components/SearchContainer';

const styles = {
    listDiv: {
        border: '1px solid #ccc',
        width: '81%',
        padding: '5px',
        textAlign: 'center',
        marginLeft: '16px'
    },
    mainListDiv: {
        width: '100%',
        margin: '10px 0 20px 0'
    },

    leftContentDiv: {
        width: '40%',
        height: 'auto',
        borderRight: '1px solid #ccc',
        borderBottom: '1px solid #ccc',
        float: 'left'
    }
};

const EmployeeComp = props => {
    const empComponents = props.emp.map(
        emp => (
          <div
            style={styles.listDiv}
            key={emp.id}
          >
            {emp.name}
          </div>));
    return (<div style={styles.leftContentDiv}>
      <AddNewComponent />
      <SearchScreen />
      <div style={styles.mainListDiv}>
        {empComponents}
      </div>
    </div>);
};

EmployeeComp.propTypes = {
    emp: PropTypes.arrayOf(PropTypes.object)
};

export default EmployeeComp;

