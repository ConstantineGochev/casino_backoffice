import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form'
import axios from 'axios';
import Expire from './Expire'


const validate = values => {
  const errors = {}
  if (!values.screenname) {
    errors.screenname = 'Screenname is required'
  } else if (values.screenname.length > 10) {
    errors.screenname = 'Must be 10 characters or less'
  }
  if(!values.player_id){
    errors.player_id = 'Player ID is required'
  }else if(isNaN(Number(values.player_id))){
    errors.player_id = 'Player ID must be a number'
  }else if(Number(values.player_id) <= 0){
    errors.player_id = 'Player ID must be a positive number';
  }
  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length > 10) {
    errors.password = 'Password must be 10 characters or less'
  }
  if (!values.balance) {
    errors.balance = 'Balance Required'
  } else if (isNaN(Number(values.balance))) {
    errors.age = 'Balance must be a number'
  } else if (Number(values.balance) <= 0) {
    errors.age = 'Sorry, balance must be a positive number'
  }
  return errors
}

const renderField = ({
  input,
  label,

  type,
  meta: { touched, error }
}) => (
  <div>
    <label className="lf--label">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="lf--input"  />
      {touched &&
        ((error && <span className="form-error">{error}</span>))}
    </div>
  </div>
)
var doesExist = false;
var new_player_created = false;
const user_exists =  () => {

    return (
      <Expire delay={3000}>Player screenname, password or player ID exists in the database</Expire>
    )

}
const new_user_created = () => {
    return (
     <Expire delay={3000}>Player created</Expire>
    )
}
const onSubmit = async (player) => {
    let new_player;
    console.log(player)
    try{
         new_player = await axios.post('https://shrouded-sands-20038.herokuapp.com/new_path/apiv2/entry/players',player)


         new_player_created = true;
         doesExist = false;
       
    }catch(err){
      
         doesExist = true;
         new_player_created = false;
        
        console.log(err)
    }
                       
    console.log(new_player )

}
 

let AddForm = props => {
  const { handleSubmit, pristine, reset, submitting, error  } = props
  return <form onSubmit={handleSubmit(onSubmit)} className="login-form" autoComplete="off">
      <div className="flex-row form-header">ADD NEW PLAYER</div>
      <div className="flex-row">
   
        <Field name="screenname" component={renderField} type="text" label="Screenname:" />
      </div>
      <div className="flex-row">

        <Field name="password" component={renderField}  type="password" label="Password:" />
      </div>
      <div className="flex-row">
        <Field name="player_id" component={renderField}  type="number" label="Player ID:" />
      </div>
      <div className="flex-row">
        <Field name="balance" component={renderField}  type="number" label="Balance:" />
      </div>
         {error && <strong>{error}</strong>}
         {doesExist ? user_exists(): ''}
         {new_player_created ? new_user_created(): ''}      
      <div className="btn-container">
         <button className="btn" type="submit" disabled={submitting}><span>
          Submit</span></button>
         <button className="btn red clear-values" type="button" disabled={pristine || submitting} onClick={reset}><span>
          Clear Values</span></button>
      </div>
  </form>
}


AddForm = reduxForm({
  form: 'add_form',
  validate
})(AddForm)





export default AddForm


// class AddForm extends Component {
//     constructor(props){
//         super()
//     }
//     render(){
//         return (

//            <form className='login-form'>
//              <div className="flex-row">
//                <label className="lf--label" htmlFor="screenname">
//                  <svg x="0px" y="0px" width="12px" height="13px">
//                  <path fill="#B1B7C4" d="M8.9,7.2C9,6.9,9,6.7,9,6.5v-4C9,1.1,7.9,0,6.5,0h-1C4.1,0,3,1.1,3,2.5v4c0,0.2,0,0.4,0.1,0.7 C1.3,7.8,0,9.5,0,11.5V13h12v-1.5C12,9.5,10.7,7.8,8.9,7.2z M4,2.5C4,1.7,4.7,1,5.5,1h1C7.3,1,8,1.7,8,2.5v4c0,0.2,0,0.4-0.1,0.6 l0.1,0L7.9,7.3C7.6,7.8,7.1,8.2,6.5,8.2h-1c-0.6,0-1.1-0.4-1.4-0.9L4.1,7.1l0.1,0C4,6.9,4,6.7,4,6.5V2.5z M11,12H1v-0.5 c0-1.6,1-2.9,2.4-3.4c0.5,0.7,1.2,1.1,2.1,1.1h1c0.8,0,1.6-0.4,2.1-1.1C10,8.5,11,9.9,11,11.5V12z"/>
//                  </svg>
//               </label>
//                  <input id="username" className='lf--input' placeholder='Screenname' type='text' />
//              </div>
//            <div className="flex-row">
//               <label className="lf--label" htmlFor="password">
//                 <svg x="0px" y="0px" width="15px" height="5px">
//                   <g>
//                     <path fill="#B1B7C4" d="M6,2L6,2c0-1.1-1-2-2.1-2H2.1C1,0,0,0.9,0,2.1v0.8C0,4.1,1,5,2.1,5h1.7C5,5,6,4.1,6,2.9V3h5v1h1V3h1v2h1V3h1 V2H6z M5.1,2.9c0,0.7-0.6,1.2-1.3,1.2H2.1c-0.7,0-1.3-0.6-1.3-1.2V2.1c0-0.7,0.6-1.2,1.3-1.2h1.7c0.7,0,1.3,0.6,1.3,1.2V2.9z"/>
//                  </g>
//                </svg>
//              </label>
//                  <input id="password" className='lf--input' placeholder='Password' type='password' />
//            </div>
//               <input className='lf--submit' type='submit' value='REGISTER' />
//          </form>

//         )
//     }
// }