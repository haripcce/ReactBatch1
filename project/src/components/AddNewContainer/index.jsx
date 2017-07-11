/**
 * Created by synerzip on 04/07/17.
 */
import React from 'react';

const styles = {
    addNewDiv: {
        width: '40%',
        margin: '0 auto',
        marginTop: '10px'
    },
    addNewImg: {
        width: '10px !important',
        marginLeft: '10px !important'
    },
    spanImg: {
        marginLeft: '10px',
        cursor: 'pointer'
    }

};

const AddNewComponent = () => (
  <div>
    <div style={styles.addNewDiv}><b>ADDNEW</b>
      <span style={styles.spanImg}>
       +
      </span>
    </div>
  </div>
);

export default AddNewComponent;
