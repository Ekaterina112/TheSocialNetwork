import React from 'react';
import s from './Users.module.css';
import {UsersDataType} from '../redux/UsersPageReducer';
import userPhoto from './../../avatar.jpg'
import {NavLink} from 'react-router-dom';
import {deleteUnfollow, postFollow} from '../../API/api';


type PropsType = {
    totalUsersCount:number,
    pageSize:number,
    currentPage:number,
    onPageChanged:(p:number) =>void,
    usersData:Array<UsersDataType>,
    unfollow:(userId: number) => void,
    follow:(userId: number) => void
}


let Users = (props:PropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount /props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
  return  <div>
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
                            <NavLink  to={'/profile/'+u.id}>
                            <img src={u.photos.small != null ? u.photos.small :userPhoto} width={100} height={100}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    deleteUnfollow(u.id)
                                        .then(data => {
                                            if(data.resultCode==0) {
                                                props.unfollow(u.id)
                                            }
                                        })
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    postFollow(u.id)
                                        .then(data => {
                                            if(data.resultCode==0) {
                                                props.follow(u.id)
                                            }
                                        })
                                }}>follow</button>}
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

