import {ROOM_LIST_REQUEST, ROOM_LIST_SUCCESS, ROOM_LIST_FAIL, ROOM_DETAILS_REQUEST, ROOM_DETAILS_SUCCESS, ROOM_DETAILS_FAIL} from '../constants/roomConstants'
import axios from 'axios'

// ~~~
// Room List:
// ~~~
export const listRooms = () => async(dispatch) =>{
    try{
        dispatch({type: ROOM_LIST_REQUEST})

        const { data } = await axios.get('/api/rooms')

        dispatch({ type: ROOM_LIST_SUCCESS, payload: data})
    }catch(error){
        dispatch({ type: ROOM_LIST_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }
}

// ~~~
// Room List Details:
// ~~~
export const listRoomsDetails = (id) => async(dispatch) =>{
    try{
        dispatch({type: ROOM_DETAILS_REQUEST})

        const { data } = await axios.get(`/api/rooms/${id}`)

        dispatch({ type: ROOM_DETAILS_SUCCESS, payload: data})
    }catch(error){
        dispatch({ type: ROOM_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }
}