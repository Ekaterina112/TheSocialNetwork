import React from 'react';
import {UsersDataType} from '../../redux/usersPageReducer';
import Paginator from '../common/Paginator/Paginator';
import User from './User';


type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (p: number) => void,
    usersData: Array<UsersDataType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: Array<number>,
}


const Users: React.FC<PropsType> = ({totalUsersCount, pageSize, currentPage, onPageChanged, usersData, followingInProgress, unfollow, follow}) => {
    return <div>
        <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                   onPageChanged={onPageChanged}/>
        <div>
            {
                usersData.map(u => <User key={u.id} user={u} follow={follow} unfollow={unfollow}
                                         followingInProgress={followingInProgress}/>)
            }
        </div>
    </div>
}

export default Users

