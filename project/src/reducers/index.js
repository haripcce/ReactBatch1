/**
 * Created by synerzip on 21/07/17.
 */
import { combineReducers } from 'redux';
import employees from 'reducers/employee';
import projects from 'reducers/project';
import auth from 'reducers/auth';

export default combineReducers({
    auth,
    employees,
    projects
});
