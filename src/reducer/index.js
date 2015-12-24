import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
import dashboardMemberReducer from './dashboardMemberReducer'

export default combineReducers({
    inventoryStore: postsReducer,
    dashboardStore: dashboardMemberReducer
});
