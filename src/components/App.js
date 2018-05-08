import React from 'react';
import Navigation from './Navigation'

export default class App extends React.Component {
    constructor(props){
        super()
    }
    render(){
        return (
           <div>
             <Navigation />
             {this.props.children}
           </div>
        )
    }
}


