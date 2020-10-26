import Users from './Users';
import {connect} from 'react-redux';
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersTotalCountAC,
    unfollowAC,
    UsersDataType
} from '../redux/UsersPageReducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../redux/redux-store';


export type MapStatePropsType = {
    // описываем, что возвращает MapStateToProps
    usersData: Array<UsersDataType>
    pageSize: number,
    totalUsersCount:number,
    currentPage:number
}

export  type MapDispatchPropsType = {
    // описываем, что возвращает MapDispatchToProps
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (usersData: Array<UsersDataType>) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersTotalCount:(totalCount:number) => void
}


//контейнерная компонента просто снабжает нашу презентационную компоненту нужными пропсами
//принимает весь стэйт целиком, глобальный и возвращает обьект с нужными данными!,
//которые в свою очередь берем из закомбайненого редьюсеров

let mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        usersData: state.usersPage.usersData, //необходимые данные
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage

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
        setUsers: (usersData: Array<UsersDataType>) => {
            dispatch(setUsersAC(usersData))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: (totalCount: number) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }

}
//коннектим с помощью функции
//mapStateToProps = state for our component
//mapDispatchToProps for get out needed callbacks
export default connect(mapStateToProps, mapDispatchToProps)(Users)