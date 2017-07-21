/**
 * Created by synerzip on 21/07/17.
 */
import Constant from 'constant';
import { hashHistory } from 'react-router';

export const onLogin = (userId, password) => {
  return (dispatch) => {
    if(userId === 'Yogesh' && password === 'Yogesh'){
      dispatch({
        type:Constant.ON_LOGIN_SUCCESS,
        payload:{
          userId:userId,
          userName:'Yogesh Patel'
        }
      });
      hashHistory.push('/dashPage/dashboard');
      return;
    }
    dispatch({
      type:Constant.ON_LOGIN_FAILURE,
      payload:{
        errorMessage:"Invalid Credential"
      }
    });

  }

}

export const onLogout = () => {
  return dispatch => {
    dispatch({
      type:Constant.LOGGED_OUT
    });
    hashHistory.push('/login');
  }
}

