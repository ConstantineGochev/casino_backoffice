import axios from 'axios';
import { PLAYERS, PLAYER_LOGS, REQUESTS} from './types'
global.axios = axios


export const fetch_players = () => async dispatch => {

    const res = await axios.get('https://shrouded-sands-20038.herokuapp.com/new_path/apiv2/entry/players');
   // console.log(res)

    dispatch({
        type: PLAYERS,
        payload: res
    })
}

export const fetch_player_logs = () => async dispatch => {

    const res = await axios.get('https://shrouded-sands-20038.herokuapp.com/new_path/apiv2/entry/logs');
   // console.log(res)

    dispatch({
        type: PLAYER_LOGS,
        payload: res
    })
}

export const fetch_requests = () => async dispatch => {

    const res = await axios.get('https://shrouded-sands-20038.herokuapp.com/new_path/apiv2/entry/requests');
   // console.log(res)

    dispatch({
        type: REQUESTS,
        payload: res
    })
}