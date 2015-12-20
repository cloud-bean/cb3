import React from 'react';
import Router from 'react-router';
import ToolboxApp from 'react-toolbox/lib/app'

import appRoutes from './appRoutes';
import Inventory from './components/Inventory';

import { render } from 'react-dom';
import { Provider } from 'react-redux'
import store from './reduxStore';
import {fetchPosts} from './actions/inventoryAction'

const getTop25InventoryUrl = 'http://120.25.227.156:8000/inventories/page/1/10';

const reactApp =
	<ToolboxApp>
			<Router>{appRoutes}</Router>
	</ToolboxApp>;


const reduxApp =
	<Provider store = {store} >
		{reactApp}
	</Provider>;


//store.dispatch(fetchPosts(getTop25InventoryUrl)).then(()=>{
	//console.log(store.getState());
//});

render(reactApp, document.getElementById('app'));
