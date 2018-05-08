import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Players from './components/Players'


export default (
   <Route path="/" component={App}>
        <Route path="/players" component={Players} />
   </Route>
)