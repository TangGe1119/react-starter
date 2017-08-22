import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Bundle from './Bundle'

const LazyRoute = ({path, component, ...rest}) => {

    let module = () => (
        <Bundle load={component}>
            {Component => <Component {...rest}/>}
        </Bundle>
    )

    return <Route path={path} component={module} />
}

export default LazyRoute