import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import { Route } from 'react-router-dom'

import GamePage from "../views/GamePage";
import Home from "../views/Home";

const Root = ({ store }) => (
  <Provider store={store}>
    <div>
        <Route path="/" component={Home} exact />
        <Route path="/game" component={GamePage} />
      <DevTools />
    </div>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
