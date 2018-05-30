import React, { Component } from 'react'
import { connect } from 'react-redux';


class SettingsForm extends Component {
    constructor(props){
        super()
        // console.log(this.props.players.player)
        
    this.state = {
       screenname: '',
       password: '',
       player_id: 0,
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
    handleSubmit() {
        console.log('submit')
    }
    set_player = (screenname, player_id) => {
        this.setState({
            screenname,
            player_id
        })
    }
    componentWillMount() {
       // if(this.props.players.player === undefined) return 
        //console.log(this.props.players.player)
        // const {screenname, player_id } = this.props.players.player
        // this.set_player(screenname, player_id)
    }
    render() {
        const style = {
            left: '2px'
        }
          console.log(this.props.players.player)
    //    / let {screenname, player_id} = this.props.players.player
        return(
                <form onSubmit={this.handleSubmit} className="login-form">
       <div className="flex-row form-header">Authenticate </div>
  <label className="flex-row" >
    Screenname: 
    { this.props.players.player ? this.props.players.player.screenname: ''} 
  </label>
  <label className="flex-row" >
    Player ID: 
    { this.props.players.player ? this.props.players.player.player_id: ''} 
    
  </label>
  <label className="flex-row">
    Settings
   <select name="settings" style={style}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
  </select>
  </label>

 
  <br />
  <label>
  <input type="submit" value="Submit" className="btn"/>
  </label>
</form>
        )
    }
}
function map_state_to_props(state){
    return {
        players: state.players
    }
}

export default connect(map_state_to_props)(SettingsForm)