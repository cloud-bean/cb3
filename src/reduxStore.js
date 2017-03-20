import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware ,compose} from 'redux'
import appReducers from './reducer'

const createStoreWithMiddleware = compose(applyMiddleware(
  thunkMiddleware // 允许我们 dispatch() 函数
),
window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

const store = createStoreWithMiddleware(appReducers);

export default store;
