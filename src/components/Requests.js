import React, {Component} from 'react';
import {fetch_requests} from '../actions/index'
import { connect } from 'react-redux';
import ReactTable from "react-table";
import "react-table/react-table.css";
import axios from 'axios';

class Requests extends Component {
    constructor(props){
        super()
        this.state ={
            requests: []
        }
    }
    componentWillMount(){
        this.set_requests()
    }
    // componentWillUnmount(){
    //     //this.set_requests = this.set_requests.unbind(this)
    //     this.set_requests = null;
    //    // this.setState({players:[]})
    // }
    set_requests = async () =>{
         
        await this.props.fetch_requests()
        
        const arr = await this.props.requests
        
        this.setState({
           requests:arr
        })
    }
    render(){
        console.log(this.state.requests)
        return (
            <ReactTable
          data={this.state.requests}
          columns={[
            {
    
                  Header: "Date",
                  accessor: "created"
                
            },
            {

                  Header: "Request Code",
                  accessor: "err_code"
            },
              {  
                  Header: "Massage",
                  accessor: "msg"
                  
              },
            {
          
                  Header: "Operation",
                  accessor: "op"
 
            },
             {
          
                  Header: "Transfer  ID",
                  accessor: "transfer_id"
 
            },
             {
          
                  Header: "Player",
                  accessor: "user[0].screenname"
 
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
        requests: state.requests
    }
}

export default connect(map_state_to_props,{fetch_requests})(Requests)