import {combineReducers} from 'redux';
import playersReducer from './playersReducer'
import playerLogsReducer from './playerLogsReducer'
import requestsReducer from './requestsReducer'


//console.log(playerLogsReducer)
export default combineReducers({
    //state: (state = {}) => state,
    player_logs: playerLogsReducer,
    players: playersReducer,
    requests: requestsReducer
})