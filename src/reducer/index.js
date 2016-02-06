import {combineReducers} from 'redux';
import inventoryReducer from './inventoryReducer';
import dashboardMemberReducer from './dashboardMemberReducer';
import logStoreReducer from './wilddogLogReducer';
import userReducer from './userActionReducer';
import promptReducer from './promptActionReducer'

export default combineReducers({
    inventoryStore: inventoryReducer,
    logStore: logStoreReducer,
    userStore:userReducer,
    prompt:promptReducer
});
