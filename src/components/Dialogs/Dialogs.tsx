import React from 'react';
import s from './Dialogs.module.css'
import MessagesItems from './MessagesItems/MessagesItems';
import DialogsItems from './DialogsItems/DialogsItems';
import DialogsReduxForm from './DialogsForm';
import {MessagePageType} from '../../redux/messagePageReducer';


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
        //console.log(value)
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
            <h2>this page in progress...</h2>
        </div>
    )
}
export default Dialogs