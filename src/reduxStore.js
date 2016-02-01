import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware } from 'redux'
import appReducers from './reducer'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // 允许我们 dispatch() 函数
)(createStore);

const store = createStoreWithMiddleware(appReducers);

export default store;
