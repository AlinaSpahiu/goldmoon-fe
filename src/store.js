import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {roomListReducer, roomDetailsReducer} from "./reducers/roomReducers"
import {userLoginReducer, userRegisterReducer, userDetailsReducer} from './reducers/userReducers'
 
const reducer = combineReducers({
    roomList: roomListReducer,
    roomDetails: roomDetailsReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer
})

//user Storage Info
const userInfoFromStorage = localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null


const intialState = {
    userLogin: { userInfo: userInfoFromStorage}
}
const middleware = [thunk]


const store = createStore(reducer, intialState, composeWithDevTools(applyMiddleware(... middleware)))

export default store