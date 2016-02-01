import {combineReducers} from 'redux'
import inventoryReducer from './inventoryReducer'
import dashboardMemberReducer from './dashboardMemberReducer'
import logStoreReducer from './wilddogLogReducer'
import userReducer from './userActionReducer'

export default combineReducers({
    inventoryStore: inventoryReducer,
    dashboardStore: dashboardMemberReducer,
    logStore: logStoreReducer,
    userStore:userReducer
});
