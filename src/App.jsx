import React from 'react';
import appRoutes from './appRoutes';
import ToolboxApp from 'react-toolbox/lib/app'
import { Provider } from 'react-redux';
import Router from 'react-router';
import store from './reduxStore';

const APP =
    <Provider store = {store} >
        <ToolboxApp>
            <Router>{appRoutes}</Router>
        </ToolboxApp>
    </Provider>;

export default APP;
