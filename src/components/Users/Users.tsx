import React from 'react';
import {MapDispatchPropsType, MapStatePropsType} from './UsersContainer';
import * as axios from 'axios';


type UsersPropsType = MapDispatchPropsType & MapStatePropsType

type GetUsersResponseType = {
    items: [],
            name: string,
            id: number,
            photos: {
                "small": string | null,
                "large": string | null
            },
            status: string | null,
            followed: boolean
}

const Users = (props:UsersPropsType) => {
if (props.usersData.length === 0) {
    axios.get<GetUsersResponseType>("https://social-network.samuraijs.com/api/1.0/users").then(
        (response: { data: { items: import("../../../../TheSocialNetwork/src/components/redux/UsersPageReducer").UsersData[]; }; }) => {
            props.setUsers(response.data.items)}
        )
}



    return (
        <div>
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