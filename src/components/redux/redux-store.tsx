import {combineReducers, createStore} from 'redux';
import profileReducer from './ProfilePageReducer';
import messageReducer from './MessagePageReducer';
import usersReducer from './UsersPageReducer';


let reducers= combineReducers({    //as a state
    profilePage: profileReducer,
    messagePage:messageReducer,
    usersPage:usersReducer
})


export type AppStateType = ReturnType<typeof reducers>

let store = createStore(reducers)

// @ts-ignore  //save store global
window.store =store
export default store



