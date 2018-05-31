import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import Select from 'react-select'
import axios from 'axios'

class SettingsForm extends Component {
    constructor(props){
        super()
        // console.log(this.props.players.player)
        
    this.state = {
       screenname: '',
       password: '',
       player_id: 0,
       msg: ''
     }
    }
    handleChange(event) {
        console.log('change')
         const target = event.target;

  this.setState({
    [ target.name]: target.type === 'checkbox' 
      ? target.checked 
      : target.value
  });
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log('submit')

    }
    set_player = (screenname, player_id) => {
        this.setState({
            screenname,
            player_id
        })
    }
    // componentWillUpdate() {
    //    if(this.props.players.player === undefined) {
    //      return
    //    }
    //     console.log(this.props.players.player)
    //     const {screenname, player_id } = this.props.players.player
    //     this.set_player(screenname, player_id)
    // }
    componentWillReceiveProps(nextProps) {
        if(nextProps.players.player !== undefined ) {
                const {screenname, player_id } = nextProps.players.player
                this.set_player(screenname, player_id)
        }
    }
    updateState = (select) => {
        // this.setState({
        //     msg: select.value
        // });
        var obj = {'auth': {'code': select.value,'msg': 'hahaha'},'player_id': this.state.player_id}
        console.log(obj)
        axios.post('https://' + window.location.hostname + ':3000/new_path/apiv2/entry/settings', obj).then(res => console.log(res))
    }


    render() {
        const style = {
            left: '2px'
        }
         // console.log(this.props.players.player)
        // console.log(this.state.screenname)
         console.log(this.state.msg)
    //    / let {screenname, player_id} = this.props.players.player
    var options = [
      { value: '1000', label: 'OK - 1000' },
      { value: '2000', label: 'TIME_OUT -2000' },
      { value: '3000', label: 'INTERNAL_SERVER_ERROR-3000' },
      { value: '3100', label: 'EXPIRED -3100' },      
      
  ];
        return(
    <form className="login-form">
       <div className="flex-row form-header">Authenticate </div>
      <label className="flex-row" >
      Screenname: 
    { this.state.screenname ? this.state.screenname: ''} 
      </label>
     <label className="flex-row" >
    Player ID: 
    { this.state.player_id ? this.state.player_id: ''} 
    
     </label>
     <label className="flex-row">
    Code Settings:
    <Select
         name="form-select"
         value={this.state.currency}
         options={options}
         onChange={this.updateState}
      />
   {/* <select name="settings" style={style}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
   </select> */}
    </label>

 
  <br />
  <label>
  <button type="button" onClick={this.handleSubmit}  className="btn" > Submit </button>
  </label>
</form>
        )
    }
}
function map_state_to_props(state){
    console.log(state.players)
    //if(state.players != undefined) {
    return {
        players: state.players
    }

   // } else {
     //   return {}
   // }
}

export default connect(map_state_to_props)(SettingsForm)