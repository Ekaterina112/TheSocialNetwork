import React from 'react';
import {UsersDataType} from '../../redux/usersPageReducer';
import userPhoto from './../../avatar.jpg'
import {NavLink} from 'react-router-dom';


type PropsType = {
    user: UsersDataType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    followingInProgress: Array<number>,
}


const User: React.FC<PropsType> = ({user, followingInProgress, follow, unfollow}) => {

    return <div>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                            <img alt={'here'} src={user.photos.small != null ? user.photos.small : userPhoto} width={100}
                                 height={100}/>
                            </NavLink>
                        </div>
                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              unfollow(user.id)
                                          }}>unfollow</button>
                                : <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => {
                                              follow(user.id)
                                          }}>follow</button>}
                        </div>
                    </span>
        <span>
                        <span>
                            <div>{user.name}</div>
                             <div>{user.status}</div>
                        </span>
                        <span>
                           <div>{'u.location.country'}</div>
                             <div>{'u.location.city'}</div>
                        </span>
                    </span>
    </div>
}

export default User

