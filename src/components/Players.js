import React, {Component} from 'react';
import {fetch_player_logs} from '../actions/index'
import { connect } from 'react-redux';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';




class Players extends Component {
    constructor(props){
        super()
        this.state = {
            players: []
        }
    }

    componentDidMount(){

        this.set_players()        
    }

    set_players = async () =>{
         
        await this.props.fetch_player_logs()
        
        const arr = await this.props.players
        
        this.setState({
           players:arr
        })
    }
    delete = async (id) => {
        await axios.delete(`https://shrouded-sands-20038.herokuapp.com/new_path/apiv2/entry/players/${id}`)
        await this.props.fetch_player_logs()        
        const updated_players = await this.props.players
        this.setState({
            players: updated_players
        }) 
        console.log(id)
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

export default connect(map_state_to_props,{fetch_player_logs})(Players)