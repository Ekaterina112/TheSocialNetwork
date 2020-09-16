import React from 'react';
import s from './../Dialogs.module.css'



type MessagesItemsType = {
    message: string
}


const MessagesItems: React.FC<MessagesItemsType> = (props) => {


    return <div>
    <div className={s.dialog}>{props.message}
    </div>
    </div>
}

export default MessagesItems