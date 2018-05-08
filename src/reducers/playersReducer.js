import {FETCH_PLAYERS} from '../actions/types';
const initialState = {}

export default(state = initialState, actions) =>{
      console.log(state)
    switch(actions.type){
        case FETCH_PLAYERS:
           //console.log(actions.payload.data.data)
           return actions.payload.data.data
        default:
        return state;
    }
}