import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
import dashboardMemberReducer from './dashboardMemberReducer'
import logStoreReducer from './wilddogLogReducer'
import userReducer from './userActionReducer'

export default combineReducers({
    inventoryStore: postsReducer,
    dashboardStore: dashboardMemberReducer,
    logStore: logStoreReducer,
    userStore:userReducer
});
