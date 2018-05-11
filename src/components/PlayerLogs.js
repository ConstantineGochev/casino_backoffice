import React, {Component} from 'react';
import {fetch_player_logs} from '../actions/index'
import { connect } from 'react-redux';
import ReactTable from "react-table";
import "react-table/react-table.css";


class PlayerLogs extends Component {
    constructor(props){
        super();
        this.state = {
            logs: []
        }
    }
    componentDidMount(){
           this.set_logs()
    }
    componentWillUnmount(){
        this.set_logs = null;
        this.setState({logs:[]})
    }
    set_logs = async () =>{
         
        await this.props.fetch_player_logs()
        const arr = await this.props.player_logs
        this.setState({
           logs:arr
        })
    }
    render(){
        console.log(this.state.logs)
        return (
               <ReactTable
          data={this.state.logs}
          columns={[
            {
    
                  Header: "Date",
                  accessor: "created"
                
            },
            {

                  Header: "Operation",
                  accessor: "op"
            },
              {  
                  Header: "Player name",
                  accessor: "player_name"
                  
              },
          ]}
          defaultPageSize={20}
          className="-striped -highlight"
        />
        )
    }
}

function map_state_to_props(state){
    return {
        player_logs: state.player_logs
    }
}

export default connect(map_state_to_props, {fetch_player_logs})(PlayerLogs)