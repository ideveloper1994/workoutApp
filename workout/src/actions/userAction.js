/**
 * Created by Developer49 on 19/07/17.
 */

import axios from 'axios';
import {
    GET_USER_DETAILS
} from '../constants/actionTypes';
import APIConstant from '../services/apiConstant';
import { showAlert } from '../services/helper';

export const getUsers = () => {
        debugger;
    return (dispatch, getState) => {
        debugger;
        return axios.get(APIConstant.baseUrl + APIConstant.getUsers)
            .then(res => {
                debugger;
console.log("/*/*/*/*/*/*/*/*/*/*/",res.data);
                dispatch({
                    type: GET_USER_DETAILS,
                    payload: res.data
                });

            }).catch(err => {
                debugger
                console.log('catch error loginAPI', e);
                if (e.response.data.message){
                    showAlert(e.response.data.message)
                }else {
                    showAlert("Server Error")
                }
                throw new Error(e);
            });
    };

};
