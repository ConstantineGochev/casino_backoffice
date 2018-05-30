import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/App';
import Players from './components/Players'
import PlayerLogs from './components/PlayerLogs'
import Requests from './components/Requests'
import Dashboard from './components/Dashboard'
import AddForm from './components/AddForm'
import SettingsForm from './components/SettingsForm'


export default (
   <Route path="/" component={App}>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add_new_player" component={AddForm} />
        <Route path="/players" component={Players} />
        <Route path="/settings_form" component={SettingsForm} />
        <Route path="/player_logs" component={PlayerLogs} />
        <Route path="/requests" component={Requests} />                  
   </Route>
)