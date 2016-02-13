import React from 'react';
import appRoutes from './appRoutes';
import { Provider } from 'react-redux';
import {Router,browserHistory} from 'react-router';
import store from './reduxStore';

const APP =
    <Provider store = {store} >
        <Router history={browserHistory}>{appRoutes}</Router>
    </Provider>;

export default APP;
