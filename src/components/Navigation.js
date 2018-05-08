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
                <Link to="/"> Dashboard </Link>
                <Link to="/players"> Players </Link>
                <Link to="/requests"> Requests </Link>
            </Menu>                
        )
    }
}