import React from 'react';
import {MapDispatchPropsType, MapStatePropsType} from './UsersContainer';
import axios from 'axios';
import {UsersDataType} from '../redux/UsersPageReducer';
import s from './Users.module.css'


type UsersPropsType = MapDispatchPropsType & MapStatePropsType
type GetUsersResponseType = {
    items: Array<UsersDataType>
    totalCount: number
    error: string | null
}


class Users extends React.Component<UsersPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setUsersTotalCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={this.props.currentPage === p ? s.selected : ''}
                        onClick={() => {
                            this.onPageChanged(p)
                        }}>
                    {p}
                </span>
                })}
            </div>

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