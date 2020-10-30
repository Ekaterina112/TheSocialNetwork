import {connect} from 'react-redux';
import {
    follow, setCurrentPage, setDisabledFollowingBTN, setIsFetching, setUsers, setUsersTotalCount, unfollow,
    UsersDataType
} from '../redux/UsersPageReducer';
import {AppStateType} from '../redux/redux-store';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader';
import {getUsers} from '../../API/api';

type UsersPropsType = MapDispatchPropsType & MapStatePropsType

class UsersAPIContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
            getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setUsersTotalCount(data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
            })
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users

                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                usersData={this.props.usersData}
                followingInProgress={this.props.followingInProgress}
                setDisabledFollowingBTN={this.props.setDisabledFollowingBTN}

            />
        </>
    }
}

export type MapStatePropsType = {
    // описываем, что возвращает MapStateToProps
    usersData: Array<UsersDataType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>
}

export  type MapDispatchPropsType = {
    // описываем, что возвращает MapDispatchToProps
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (usersData: Array<UsersDataType>) => void
    setCurrentPage: (pageNumber: number) => void
    setUsersTotalCount: (totalCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    setDisabledFollowingBTN:(isFetching:boolean,userId: number)=>void

}


//контейнерная компонента просто снабжает нашу презентационную компоненту нужными пропсами
//принимает весь стэйт целиком, глобальный и возвращает обьект с нужными данными!,
//которые в свою очередь берем из закомбайненого редьюсеров

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersData: state.usersPage.usersData, //необходимые данные
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}
/*let mapDispatchToProps = (dispatch: Dispatch) => {
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
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setFetchingAC(isFetching))
        }
    }

}*/
//коннектим с помощью функции
//mapStateToProps = state for our component
//mapDispatchToProps for get out needed callbacks
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType >(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, setIsFetching,setDisabledFollowingBTN})
(UsersAPIContainer)