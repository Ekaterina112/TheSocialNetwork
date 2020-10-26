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
import React from 'react';
import axios from 'axios';
import Users from './Users';

type UsersPropsType = MapDispatchPropsType & MapStatePropsType

class UsersAPIContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {

        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            usersData={this.props.usersData}
        />
    }
}

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
export default connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer)