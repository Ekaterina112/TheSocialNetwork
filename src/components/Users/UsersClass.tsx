import React from 'react';
import {MapDispatchPropsType, MapStatePropsType} from './UsersContainer';
import * as axios from 'axios';
import {UsersDataType} from '../redux/UsersPageReducer';
//FIRST CLASS 

type UsersPropsType = MapDispatchPropsType & MapStatePropsType


type GetUsersResponseType = {
    items: Array<UsersDataType>
    totalCount: number
    error: string | null
}


class Users extends React.Component<UsersPropsType> {
    getUsers = () => {
        if (this.props.usersData.length === 0) {
            // @ts-ignore
            axios.get<GetUsersResponseType>('https://social-network.samuraijs.com/api/1.0/users')
                .then((response: { data: { items: UsersDataType[]; }; }) => { //////&&&&&&&&&&&&&&&&
                    return this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return <div>
            <button onClick={this.getUsers}> get users</button>
            {
                this.props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small != null ? u.photos.small : ''}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}

export default Users