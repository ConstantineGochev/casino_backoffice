import {REQUESTS} from '../actions/types';
const initialState = {}

export default(state = initialState, actions) =>{
      //console.log(state)
    switch(actions.type){
        case REQUESTS:
           //console.log(actions.payload.data.data)
           return actions.payload.data.data
        default:
        return state;
    }
}