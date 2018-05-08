import {combineReducers} from 'redux';
import playersReducer from './playersReducer'

export default combineReducers({
    state: (state = {}) => state,
    players: playersReducer
})