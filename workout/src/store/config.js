import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
import { createNavigationEnabledStore } from '@expo/ex-navigation';

const middleware = [ thunk ];

const createStoreWithNavigation = createNavigationEnabledStore({
    createStore,
    navigationStateKey: 'navigation',
});

const Store = createStoreWithNavigation(
    reducer,
    applyMiddleware(...middleware)
);

export default Store;