import {ActionTypes, FollowActionType, UnFollowActionType, UsersPageType} from './store';


const FOLLOW='FOLLOW'
const UNFOLLOW='UNFOLLOW'

let initialState:UsersPageType= {
    usersData: [
        {id: 1, followed: true, fullName: 'Robin', status: 'Hi', location:{city:'NY', country:'USA'}},
        {id: 2, followed: false, fullName: 'Ted', status: 'I love you', location:{city:'NY', country:'USA'}},
        {id: 3, followed: true, fullName: 'Barney', status: 'Awesome', location:{city:'NY', country:'USA'}},
        {id: 4, followed: false, fullName: 'Marshall', status: 'Lapushka', location:{city:'NY', country:'USA'}},
        {id: 5, followed: true, fullName: 'Lily', status: 'okay', location:{city:'NY', country:'USA'} }
    ]
}

const usersReducer=(state=initialState, action:ActionTypes) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,

            }
        }
        case UNFOLLOW: {
            return {
                ...state,

            }
        }
        default:
            return state
    }
}


export const followAC = ():FollowActionType =>({type:FOLLOW})
export const unfollowAC = ():UnFollowActionType => ({
    type:UNFOLLOW})


export default usersReducer