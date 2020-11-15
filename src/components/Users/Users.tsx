import React from 'react';
import s from './Users.module.css';
import {UsersDataType} from '../redux/UsersPageReducer';
import userPhoto from './../../avatar.jpg'
import {NavLink} from 'react-router-dom';



type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (p: number) => void,
    usersData: Array<UsersDataType>,
    follow: (userId:number)=>void,
    unfollow: (userId:number)=>void,
    followingInProgress: Array<number>,
}


const Users = (props: PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p ? s.selected : ''}
                    onClick={() => {
                        props.onPageChanged(p)
                    }}>
                    {p}
                </span>
            })}
        </div>

        {
            props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} width={100} height={100}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id== u.id)}
                                          onClick={() => { props.unfollow(u.id)
                                          }}>unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id== u.id)}
                                          onClick={() => { props.follow(u.id)}}>follow</button>}
                        </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                             <div>{u.status}</div>
                        </span>
                        <span>
                           <div>{'u.location.country'}</div>
                             <div>{'u.location.city'}</div>
                        </span>
                    </span>
            </div>)
        }
    </div>
}

export default Users

