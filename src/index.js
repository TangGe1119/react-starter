import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index'
import { AppContainer } from 'react-hot-loader'

import App from './containers/App'

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        console.log(123)
        render(App)
    })
}