import {getAuthUserData} from './authReducer';
import {Dispatch} from 'redux';
import {ActionTypes} from './types';

//types
export type InitializedType = {
    initialized: boolean,
}

//actions
const SET_INITIALIZED = 'authReducer/SET_INITIALIZED'

let initialState: InitializedType = {
    initialized: false,
}

const appReducer = (state = initialState, action: ActionTypes): InitializedType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: action.payload,
            }
        }
        default:
            return state
    }
}
//actionCreator
export const setInitialized = (payload: boolean) => ({type: SET_INITIALIZED, payload}) as const

//thunkCreator
export const initializeApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData())
    //when all promises wil be resolved....then....
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized(true))
        })
}


//dispatch return us which return from thunk
export default appReducer