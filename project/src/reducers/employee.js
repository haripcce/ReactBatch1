/**
 * Created by synerzip on 21/07/17.
 */
import { createReducer } from 'util';
import Constant from 'constant';

const initialState = {
    employees: null
};

export default createReducer(initialState, {
    [Constant.EMPLOYEE_RECEVIED]: (state, payload) => Object.assign({}, state, {
        employees: payload
    })
});
