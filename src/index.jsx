import React from 'react';
import Router,{ Route } from 'react-router';
import ToolboxApp from 'react-toolbox/lib/app'

import routes from './appRoutes';
import Inventory from './components/Inventory';

import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './reduxStore';
import {fetchPosts} from './actions/inventoryAction'

const getTop25InventoryUrl = 'http://120.25.227.156:8000/inventories/page/1/10';

const reduxApp = 
	<Provider store = {store} >
		<ToolboxApp>
				{/*<Router>{routes}</Router>*/}
				<Inventory></Inventory>
		</ToolboxApp>
	</Provider>;

store.dispatch(fetchPosts(getTop25InventoryUrl)).then(()=>{
	console.log(store.getState());
});

render(reduxApp, document.getElementById('app'));
