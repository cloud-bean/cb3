import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
import dashboardMemberReducer from './dashboardMemberReducer'
import logStoreReducer from './wilddogLogReducer'

export default combineReducers({
    inventoryStore: postsReducer,
    dashboardStore: dashboardMemberReducer,
    logStore: logStoreReducer
});
