import React from 'react';
import {MapDispatchPropsType, MapStatePropsType} from './UsersContainer';


type UsersPropsType = MapDispatchPropsType & MapStatePropsType



const Users = (props:UsersPropsType) => {
if (props.usersData.length === 0) {
    props.setUsers([ {id: 1, followed: true, fullName: 'Robin', status: 'Hi', location:{city:'NY', country:'USA'}},
        {id: 2, followed: false, fullName: 'Ted', status: 'I love you', location:{city:'NY', country:'USA'}},
        {id: 3, followed: true, fullName: 'Barney', status: 'Awesome', location:{city:'NY', country:'USA'}},
        {id: 4, followed: false, fullName: 'Marshall', status: 'Lapushka', location:{city:'NY', country:'USA'}},
        {id: 5, followed: true, fullName: 'Lily', status: 'okay', location:{city:'NY', country:'USA'} }

    ])
}



    return (
        <div>
            {
                props.usersData.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={()=> {props.unfollow(u.id)}}>unfollow</button>
                                :<button onClick={()=> {props.follow(u.id)}}>follow</button> }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                             <div>{u.status}</div>
                        </span>
                        <span>
                           <div>{u.location.country}</div>
                             <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users