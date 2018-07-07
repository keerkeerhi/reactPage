import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import Home from '../views/Home'
import GamePage from '../views/GamePage'

const routes = (
    <BrowserRouter >
        <div>
            <Route path="/" component={Home} exact />
            <Route path="/game" component={GamePage} />
        </div>
    </BrowserRouter>
)

export default routes;