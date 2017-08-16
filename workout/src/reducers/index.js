import { combineReducers } from 'redux'
import user from './userReducer';
import { NavigationReducer } from '@expo/ex-navigation';

export default combineReducers({
    navigation: NavigationReducer,
    user,
});