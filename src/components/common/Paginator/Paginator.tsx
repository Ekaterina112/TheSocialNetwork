import React from 'react';
import style from './Paginator.module.css';


type PropsType = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (p: number) => void,
}


const Paginator: React.FC<PropsType> = ({
                                            totalUsersCount,
                                            pageSize,
                                            currentPage,
                                            onPageChanged,
                                        }) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {pages.map(p => {
            return <span
                className={currentPage === p ? style.selected : ''}
                onClick={() => {
                    onPageChanged(p)
                }}>
                    {p}
                </span>
        })}
    </div>
}

export default Paginator

