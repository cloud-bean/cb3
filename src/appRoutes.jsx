import React from 'react';
import {Route} from 'react-router'

import Main from './pages/main/Main';
import Borrow from './pages/borrow/Borrow';
import Return from './pages/return/Return';
import Signup from './pages/signup/Signup';

const routes =
    <div>
        <Route path='/' component={Signup} />
        <Route path='borrow' component={Borrow} />
        <Route path='return' component={Return} />
        <Route path='main' component={Main} />
    </div>;

export default routes;
