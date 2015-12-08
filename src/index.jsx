import React from 'react';
import ReactDOM from 'react-dom';
import Router,{Route} from 'react-router';
import ToolboxApp from 'react-toolbox/lib/app'

import App from './components/App';
import Dashboard from './components/Dashboard';
import Member from './components/Member';
import Help from './components/Help';

const routes = <Route component={App}>
	<Route path='/' component={Dashboard} />
	<Route path='/member' component={Member} />
	<Route path='/help' component={Help} />
</Route>;

ReactDOM.render(
	<ToolboxApp>
		<Router>{routes}</Router>
	</ToolboxApp>
	, document.getElementById('app')
);
