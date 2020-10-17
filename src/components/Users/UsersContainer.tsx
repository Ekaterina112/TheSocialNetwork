import Users from './Users';
import {connect} from 'react-redux';
import {followAC, setUsersAC, unfollowAC, UsersData} from '../redux/UsersPageReducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../redux/redux-store';
import {ActionTypes, DispatchType, FollowActionType, SetUsersActionType, UnFollowActionType} from '../redux/types';

export type MapStatePropsType = {
    // описываем, что возвращает MapStateToProps
    usersData: Array<UsersData>
}

export  type MapDispatchPropsType = {
    // описываем, что возвращает MapDispatchToProps
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (usersData: Array<UsersData>) => void
}


//контейнерная компонента просто снабжает нашу презентационную компоненту нужными пропсами
//принимает весь стэйт целиком, глобальный и возвращает обьект с нужными данными!,
//которые в свою очередь берем из закомбайненого редьюсеров

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        usersData: state.usersPage.usersData //необходимые данные
    }
}
let mapDispatchToProps = (dispatch:Dispatch)=> {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (usersData: Array<UsersData>) => {
            dispatch(setUsersAC(usersData))
        }
    }

}
//коннектим с помощью функции
//mapStateToProps = state for our component
//mapDispatchToProps for get out needed callbacks
export default connect(mapStateToProps, mapDispatchToProps)(Users)