import React from 'react';
import {Route} from 'react-router'

import Main from './components/Main';
import Borrow from './components/Borrow';
import Return from './components/Return';

const routes =
<div>
    <Route path='/' component={Main} />
    <Route path='borrow' component={Borrow} />
    <Route path='return' component={Return} />
</div>
export default routes;
