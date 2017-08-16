/**
 * Created by Developer49 on 19/07/17.
 */

import { GET_USER_DETAILS } from '../constants/actionTypes';
const INITIAL_STATE = {
    userList:[],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case GET_USER_DETAILS: {
            return {
                ...state,
                userList: action.payload,
            };
        }
        default:
            return state;
    }

};