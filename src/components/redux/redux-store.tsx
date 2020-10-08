import {combineReducers, createStore} from 'redux';
import profileReducer from './ProfilePageReducer';
import messageReducer from './MessagePageReducer';


let reducers= combineReducers({    //as a state
    profilePage: profileReducer,
    messagePage:messageReducer
})

let store = createStore(reducers)

// @ts-ignore  //save store global
window.store =store
export default store



