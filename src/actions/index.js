import axios from 'axios';
import { FETCH_PLAYERS} from './types'
global.axios = axios
export const fetch_player_logs = () => async dispatch => {

    const res = await axios.get('https://shrouded-sands-20038.herokuapp.com/new_path/apiv2/entry/players');
   // console.log(res)

    dispatch({
        type: FETCH_PLAYERS,
        payload: res
    })
}