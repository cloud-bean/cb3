import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import CloudbeanApp from './reducer/postsReducer.js'

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // 允许我们 dispatch() 函数
)(createStore);

const store = createStoreWithMiddleware(CloudbeanApp);

export default store;
