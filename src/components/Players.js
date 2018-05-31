import React, {Component} from 'react';
import {fetch_players, fetch_player} from '../actions/index'
import { connect } from 'react-redux';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';
import { Link } from 'react-router'



class Players extends Component {
    constructor(props){
        super()
        this.state = {
            players: []
        }
    }

    componentWillMount(){

        this.set_players()        
    }
    // componentWillUnmount(){
    //     //this.set_players =  this.set_players.unbind(this)
    //     this.set_players = null;
    //     //this.setState({players:[]})
    // }

    set_players = async () =>{
         
        await this.props.fetch_players()
        
        const arr = await this.props.players
        
        this.setState({
           players:arr
        })
    }
    delete = async (id) => {
        await axios.delete('https://'+ window.location.hostname + `:3000/new_path/apiv2/entry/players/${id}`)
        await this.props.fetch_players()        
        const updated_players = await this.props.players
        this.setState({
            players: updated_players
        }) 
     //   console.log(id)
    }
    current_user =  (id) => {
        console.log('id', id)
         this.props.fetch_player(id)
    }
    render(){
       console.log(this.state.players)
       if(this.state.players.length === undefined || this.state.players.length === 0){
        return null
       }
        return (
             <ReactTable
          data={this.state.players}
          columns={[
            {
    
                  Header: "First Name",
                  accessor: "screenname"
                
            },
            {

                  Header: "Player ID",
                  accessor: "player_id"
            },
              {  
                  Header: "Status",
                  accessor: "banned"
                  
              },
            {
          
                  Header: "Balance",
                  accessor: "balance"
 
            },
              {
            
                  accessor: "_id",                  
                  Cell: row => (
              
                          <button onClick={() => this.delete(row.original._id)} className="btn red" ><span>Delete</span></button>
                   
   
                         ),
                
            },
            {
                  Cell: row => (
                        <Link to="/players/settings_form" onClick={() => this.current_user(row.original._id)} className="btn green" ><span>Settings</span></Link> 


                         // <button onClick={() => console.log('sadasd')} className="btn green" ><span>Settings</span></button>
                   
   
                         )

            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
        )
    }
}

function map_state_to_props(state){
     return {
           players: state.players,
            }
}

export default connect(map_state_to_props,{fetch_players, fetch_player})(Players)