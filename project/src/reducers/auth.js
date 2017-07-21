/**
 * Created by synerzip on 21/07/17.
 */
import {createReducer} from 'util';
import Constant from 'constant';

const initialState = {
  loggedInUser:null,
  errorMessage:''
};

export default createReducer(initialState, {
  [Constant.ON_LOGIN_SUCCESS]:(state,payload) => {
    return Object.assign({}, state, {
      loggedInUser:payload
    });
  },
  [Constant.ON_LOGIN_FAILURE]:(state,payload) => {
    return Object.assign({}, state, {
      loggedInUser:null,
      errorMessage:payload.errorMessage
    });
  },
  [Constant.LOGGED_OUT]:(state) => {
    return Object.assign({}, state, {
      loggedInUser:null,
      errorMessage:''
    });
  }
});