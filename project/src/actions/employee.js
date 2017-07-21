/**
 * Created by synerzip on 21/07/17.
 */

import Constant from 'constant';

export const getEmployees = () => dispatch => {
    fetch('https://reqres.in/api/users?page=1&per_page=12', {
        method: 'GET',
        headers: {
            Accept: 'application/json'
        }
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            response.json()
            .then(result => {
                dispatch({
                    type: Constant.EMPLOYEE_RECEVIED,
                    payload: result
                });
            });
        }
    }).catch(error => {
        console.log(error);
    });
};
