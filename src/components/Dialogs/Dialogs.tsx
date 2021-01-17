import React from 'react';
import s from './Dialogs.module.css'
import MessagesItems from './MessagesItems/MessagesItems';
import DialogsItems from './DialogsItems/DialogsItems';
import {MessagePageType} from '../redux/types';
import DialogsReduxForm from './DialogsForm';


type DialogsPropsType = {
    messagePage: MessagePageType
    sendMessage:(newMessageBody:string) =>void
}


const Dialogs = (props: DialogsPropsType) => {
    let state=props.messagePage

    let dialogArr = state.dialogItemsData.map((d) => <DialogsItems name={d.name} key={d.id} id={d.id}/>)
    let messageArr = state.messageData.map((m) => <MessagesItems message={m.message} key={m.id}/>)


    const onSendMessageClick = (value:any) => {
        // field name
        props.sendMessage(value.newMessageBody)
    }


    return (
        <div className={s.allDialogs}>
            <div className={s.dialogs}>
                {dialogArr}
            </div>
            <div className={s.messages}>
                {messageArr}
            </div>
          <DialogsReduxForm onSubmit={onSendMessageClick}/>
        </div>
    )
}
export default Dialogs