import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import routes from './routes/';

// import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
