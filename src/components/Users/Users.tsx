import React from 'react';
import {MapDispatchPropsType, MapStatePropsType} from './UsersContainer';
import * as axios from 'axios';
import {UsersDataType} from '../redux/UsersPageReducer';
import {get} from 'http';




type UsersPropsType = MapDispatchPropsType & MapStatePropsType



type GetUsersResponseType = {
    items: Array<UsersDataType>
    totalCount: number
    error: string | null
}


const Users = (props:UsersPropsType) => {
let getUsers = () => {
        if (props.usersData.length === 0) {
           /* get("https://social-network.samuraijs.com/api/1.0/users",res => {props.setUsers(res.items)})*/

            // @ts-ignore
            axios.get<GetUsersResponseType>("https://social-network.samuraijs.com/api/1.0/users")
                .then((response: { data: { items: UsersDataType[]; }; }) => { //////&&&&&&&&&&&&&&&&
                    return props.setUsers(response.data.items)})
        }
    }


    return (
        <div>
            <button onClick={getUsers}> get users </button>
            {
                props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !=null ? u.photos.small:""}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=> {props.unfollow(u.id)}}>unfollow</button>
                                :<button onClick={()=> {props.follow(u.id)}}>follow</button> }
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
    )
}
export default Users