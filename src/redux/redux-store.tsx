import {applyMiddleware, combineReducers, createStore} from 'redux';
import usersReducer from './usersPageReducer';
import authReducer from './authReducer';
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import appReducer from './appReducer';
import profileReducer from './profilePageReducer';
import messageReducer from './messagePageReducer';


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



