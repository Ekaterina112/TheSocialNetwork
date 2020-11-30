import {ActionTypes} from './types';
import {getAuthUserData} from './authReducer';


const SET_INITIALIZED = 'SET_INITIALIZED'

export type InitilizedType = {
    initialized: boolean,
}


let initialState: InitilizedType = {
    initialized: false,
}


const appReducer = (state = initialState, action: ActionTypes): InitilizedType => {
    switch (action.type) {
        case SET_INITIALIZED: {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}
//actionCreator
export const setInitialized = () => ({type: SET_INITIALIZED})
//thunkCreator
export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
    //when all promises wil be resolved....then....
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialized())
        })
}

//dispatch return us which return from thunk
export default appReducer