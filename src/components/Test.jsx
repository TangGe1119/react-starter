import React, { Component } from 'react'
import LazyRoute from '../containers/LazyRoute'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

const noFound = () => <h1>404</h1>

const Test = () => (
    <Router>
        <div>
            <h1>Welcome!</h1>
            <Link to="/about">about</Link>&nbsp;&nbsp;&nbsp;
            <Link to="/dashboard">dashboard</Link>
            <hr/>
            <Switch>
                <LazyRoute path="/about" component={() => import('./About')} />
                <LazyRoute path="/dashboard" component={() => import('./Dashboard')} />
                <Route path="*" component={noFound} />
            </Switch>
        </div>
    </Router>
)

export default Test