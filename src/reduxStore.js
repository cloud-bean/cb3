import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import invApp from './reducer/postsReducer.js'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // 允许我们 dispatch() 函数
)(createStore);

const store = createStoreWithMiddleware(invApp);

export default store;