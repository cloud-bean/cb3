import React from 'react';
import {Route} from 'react-router'


import App from './components/App';
import Dashboard from './components/Dashboard';
import Member from './components/Member';
import Inventory from './components/Inventory';
import Help from './components/Help';

export const routes = <Route component={App}>
 <Route path='/' component={Dashboard} />
  <Route path='/member' component={Member} />
 <Route path='/inventory' component={Inventory} />
 <Route path='/help' component={Help} />
</Route>;