import React from 'react';
import addIcon from '../../images/button-add.svg';

const style = {
    outerContainer: {
        height: '20%',
        width: '50%',
        border: '1px solid red'
    },
    flex: {
        display: 'flex'
    },
    button: {
        marginTop: '5%',
        marginLeft: '50%',
        marginBottom: '5%'
    },
    image: {
        border: '1px solid black'
    },
    addEmp: {
        marginLeft: '11%',
        marginTop: '1%',
        marginBottom: '1%'
    }
};
const SearchComponent = function () {
    return (
      <div >
        <form
          className="navbar-form"
          role="search"
        >
          <div className="input-group add-on">
            <input
              className="form-control"
              placeholder="Search" name="srch-term"
              id="srch-term" type="text"
            />

            <div className="input-group-btn">
              <button className="btn btn-default"type="submit">
                <i className="glyphicon glyphicon-search" />
              </button>
              <button className="btn btn-default" type="submit">
                <i>Cancel</i>
              </button>
            </div>
          </div>
        </form>
        <img src={addIcon} style={style.addEmp} alt="add employee" />
      </div>);
};
export default SearchComponent;
