import React, {Component} from 'react';
import { Link } from 'react-router';


class Dashboard extends Component {
    constructor(props){
        super()
    }
    animate(){
        console.log('redirect to form biathc ')
    }
    render(){
        return (
      
                <Link to="/add_new_player" onClick={() => this.animate()} className="btn add" ><span>Add New Player</span></Link>
   
        )
    }
}


export default Dashboard