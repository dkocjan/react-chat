import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const render = (Component, id) => {
  ReactDOM.render(
    <Component />,
    document.getElementById(id)
  )
}
render(App, 'root')
