import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogsItemsType = {
    name: string
    id: number
}

const DialogsItems: React.FC<DialogsItemsType> = (props) => {
    let path = '/dialogs/' + props.id
    return <div className={s.dialog}>
        <NavLink to={path}>{props.name} </NavLink>
    </div>
}




export default DialogsItems