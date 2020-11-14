import {connect} from 'react-redux';
import {follow, getUsers, setCurrentPage, unfollow, UsersDataType} from '../redux/UsersPageReducer';
import {AppStateType} from '../redux/redux-store';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader';
import {WithAuthRedirectComponent} from '../../hoc/withAuthRedirect';

type UsersPropsType = MapDispatchPropsType & MapStatePropsType

class UsersAPIContainer extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
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
    setCurrentPage: (pageNumber: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
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
let AuthRedirectComponent= WithAuthRedirectComponent(UsersAPIContainer)
//коннектим с помощью функции
//mapStateToProps = state for our component
//mapDispatchToProps for get out needed callbacks
export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
    {follow, unfollow, setCurrentPage, getUsers})
(AuthRedirectComponent)