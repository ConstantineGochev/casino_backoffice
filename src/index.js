import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {Router, browserHistory} from 'react-router'

import reducers from './reducers'
import routes from './routes'
import App from './components/App';

const storeWithMiddleware = applyMiddleware(thunk)(createStore)

ReactDOM.render(
    <Provider store={storeWithMiddleware(reducers)}>
         <Router history={browserHistory} routes={routes} />
    </Provider>,
 document.getElementById('root'));

