import React, {Component} from 'react';
import {slide as Menu} from 'react-burger-menu';
import { Link } from 'react-router';

export default class Navigation extends Component {
    constructor(props){
        super()
    }
    render(){
        return (
            <Menu>
                <h1 className="header">CASINO<span className="version">v 1.0</span></h1>
                <Link to="/dashboard"> DASHBOARD </Link>
                <Link to="/players"> PLAYERS </Link>
                <Link to="/player_logs"> PLAYER LOGS</Link>                
                <Link to="/requests"> REQUESTS </Link>
            </Menu>                
        )
    }
}