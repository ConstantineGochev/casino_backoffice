import React from 'react';
import {Route, IndexRoute, Router } from 'react-router-dom';
import {hashHistory} from 'react-router'

import App from './components/App';
import Players from './components/Players'
import PlayerLogs from './components/PlayerLogs'
import Requests from './components/Requests'
import Dashboard from './components/Dashboard'
import AddForm from './components/AddForm'
import SettingsForm from './components/SettingsForm'
import PlayersRoute from './components/PlayersRoute'



export default (
   <Route exact path="/" component={App}>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/add_new_player" component={AddForm} />
        <Route path="/players" component={PlayersRoute} />
        <Route path="/player_logs" component={PlayerLogs} />
        <Route path="/requests" component={Requests} />                  
        <Route path="/players/settings_form" component ={SettingsForm} /> */}

   </Route>
   
)