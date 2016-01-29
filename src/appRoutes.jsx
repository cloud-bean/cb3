import React from 'react';
import {Route} from 'react-router'

import Main from './components/Main';
import Borrow from './components/Borrow';
import Return from './components/Return';
import Signup from './components/Signup';

const routes =
<div>
    <Route path='/' component={Signup} />
    <Route path='borrow' component={Borrow} />
    <Route path='return' component={Return} />
    <Route path='main' component={Main} />
</div>
export default routes;
