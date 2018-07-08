import React from 'react';
import { render } from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './routes/Root'
import configureStore from './redux/configureStore'

const store = configureStore()
// import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
        <Root store={store}/>
    </Router>,
    document.getElementById('root'));
// registerServiceWorker();
