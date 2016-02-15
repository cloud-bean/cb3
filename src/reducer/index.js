import {combineReducers} from 'redux';
import inventoryReducer from './inventoryReducer';
import userReducer from './userActionReducer';
import promptReducer from './promptActionReducer'

export default combineReducers({
    inventoryStore: inventoryReducer,
    userStore:userReducer,
    prompt:promptReducer
});
