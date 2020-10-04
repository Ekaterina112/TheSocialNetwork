import {combineReducers, createStore} from 'redux';
import profileReducer from './ProfilePageReducer';
import messageReducer from './MessagePageReducer';


let reducers= combineReducers({    //as a state
    profilePage: profileReducer,
    messagePage:messageReducer
})

let store = createStore(reducers)


export default store



