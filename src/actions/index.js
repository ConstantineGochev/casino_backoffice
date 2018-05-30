import axios from 'axios';
import { PLAYERS, PLAYER_LOGS, REQUESTS, PLAYER} from './types';
import {reset} from 'redux-form'

global.axios = axios



export const reset_form = () => dispatch => {
    dispatch(reset('add_form'));
}

export const fetch_players = () => async dispatch => {

    const res = await axios.get('https://'+ window.location.hostname + ':3000/new_path/apiv2/entry/players/');
   // console.log(res)

    dispatch({
        type: PLAYERS,
        payload: res
    })
}
export const fetch_player = (id) => async dispatch => {
   const res = await axios.get('https://'+ window.location.hostname + ':3000/new_path/apiv2/entry/players/' + id)

   dispatch({
       type: PLAYER,
       payload: res
   })
}

export const fetch_player_logs = () => async dispatch => {

    const res = await axios.get('https://'+ window.location.hostname + ':3000/new_path/apiv2/entry/logs/');
   // console.log(res)

    dispatch({
        type: PLAYER_LOGS,
        payload: res
    })
}

export const fetch_requests = () => async dispatch => {

    const res = await axios.get('https://'+ window.location.hostname + ':3000/new_path/apiv2/entry/requests/');
   // console.log(res)

    dispatch({
        type: REQUESTS,
        payload: res
    })
}