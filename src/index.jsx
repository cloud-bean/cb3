import React from 'react';
import Router,{Route} from 'react-router';
import ToolboxApp from 'react-toolbox/lib/app'

import App from './components/App';
import Dashboard from './components/Dashboard';
import Member from './components/Member';
import Inventory from './components/Inventory';
import Help from './components/Help';

import { render } from 'react-dom'
import { Provider } from 'react-redux'

import invApp from './reducer/reducer.js'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import {
  requestPosts, receivePosts,fetchPosts
} from './actions/inventoryAction';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware // 允许我们 dispatch() 函数
)(createStore);

const store = createStoreWithMiddleware(invApp);

store.dispatch(fetchPosts()).then(()=>{
	console.log(store.getState());
});

// const routes = <Route component={App}>
// 	<Route path='/' component={Dashboard} />
//   <Route path='/member' component={Member} />
// 	<Route path='/inventory' component={Inventory} />
// 	<Route path='/help' component={Help} />
// </Route>;

render(
	<Provider store = {store} >
		<ToolboxApp>
				{/*<Router>{routes}</Router>*/}
				<Inventory></Inventory>
		</ToolboxApp>
	</Provider>
	, document.getElementById('app')
);
