import {applyMiddleware, combineReducers, createStore} from 'redux';
import profileReducer from './ProfilePageReducer';
import messageReducer from './MessagePageReducer';
import usersReducer from './UsersPageReducer';
import authReducer from './authReducer';
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from './appReducer';

let reducers= combineReducers({    //as a state
    profilePage: profileReducer,
    messagePage:messageReducer,
    usersPage:usersReducer,
    auth:authReducer,
    app:appReducer,
    form: formReducer
})


export type AppStateType = ReturnType<typeof reducers>

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// @ts-ignore  //save store global
window.store = store
export default store



