import {ROOM_LIST_REQUEST, ROOM_LIST_SUCCESS, ROOM_LIST_FAIL, ROOM_DETAILS_REQUEST, ROOM_DETAILS_SUCCESS, ROOM_DETAILS_FAIL, ROOM_DELETE_REQUEST, ROOM_DELETE_SUCCESS, ROOM_DELETE_FAIL, ROOM_CREATE_REQUEST, ROOM_CREATE_SUCCESS, ROOM_CREATE_FAIL, ROOM_UPDATE_SUCCESS, ROOM_UPDATE_FAIL, ROOM_UPDATE_REQUEST,} from '../constants/roomConstants'
import axios from 'axios'
import {logout} from './userActions'

// ~~~
// Room List:
// ~~~
export const listRooms = () => async(dispatch) =>{
    try{
        dispatch({type: ROOM_LIST_REQUEST})

        const { data } = await axios.get('https://goldenmoon-be.herokuapp.com/api/rooms')

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

        const { data } = await axios.get(`https://goldenmoon-be.herokuapp.com/api/rooms/${id}`)

        dispatch({ type: ROOM_DETAILS_SUCCESS, payload: data})
    }catch(error){
        dispatch({ type: ROOM_DETAILS_FAIL, payload: error.response && error.response.data.message ? error.response.data.message : error.message})
    }
}

// ~~~
// Room List Delete:
// ~~~
export const deleteRoom = (id) =>async(dispatch, getState) => {
    try{
        dispatch({
            type: ROOM_DELETE_REQUEST
        })
    const{userLogin: {userInfo}} = getState()

    const config = { headers: { Authorization: `Bearer ${userInfo.token}`,}}

   await axios.delete(`https://goldenmoon-be.herokuapp.com/api/rooms/${id}`, config)

   dispatch({
       type: ROOM_DELETE_SUCCESS
   })
    } catch(error){
        dispatch({
            type: ROOM_DELETE_FAIL,
            payload:
               error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
        })
    }
}


// ~~~
// Room List CREATE:
// ~~~
export const createRoom = () =>async(dispatch, getState) => {
    try{
        dispatch({
            type: ROOM_CREATE_REQUEST,
        })
    const{userLogin: {userInfo}, } = getState()

    const config = { headers: 
        { Authorization: `Bearer ${userInfo.token}`,},}

   const{data} = await axios.post(`https://goldenmoon-be.herokuapp.com/api/rooms`,{}, config)

   dispatch({
       type: ROOM_CREATE_SUCCESS,
       payload: data,
   })
    } catch(error){
        const message = error.response & error.response.data.message
              ? error.response.data.message
              : error.message
        if(message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ROOM_CREATE_FAIL,
            payload: message,
        })
    }
}

// ~~~
// Room List Update:
// ~~~
export const updateRoom = (room) =>async(dispatch, getState) => {
    try{
        dispatch({
            type: ROOM_UPDATE_REQUEST
        })
    const{userLogin: {userInfo}, } = getState()

    const config = { headers: 
        {   'Content-Type': 'application/json',
            Authorization: `Bearer ${userInfo.token}`,},}

   const{data} = await axios.put(`https://goldenmoon-be.herokuapp.com/api/rooms/${room._id}`,room, config)

   dispatch({
       type: ROOM_UPDATE_SUCCESS,
       payload: data,
   })
    } catch(error){
        const message = error.response & error.response.data.message
              ? error.response.data.message
              : error.message
        if(message === 'Not authorized, token failed') {
            dispatch(logout())
        }
        dispatch({
            type: ROOM_UPDATE_FAIL,
            payload: message,
        })
    }
}