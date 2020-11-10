import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import MessagesItems from './MessagesItems/MessagesItems';
import DialogsItems from './DialogsItems/DialogsItems';
import {MessagePageType} from '../redux/types';
import { Redirect } from 'react-router-dom';

type DialogsPropsType = {
    messagePage: MessagePageType
    upDateNewMessageText:(body:string)=>void //tyt pravilno ili net
    sendMessage:() =>void
    isAuth:boolean
}


const Dialogs = (props: DialogsPropsType) => {
    let state=props.messagePage

    let dialogArr = state.dialogItemsData.map((d) => <DialogsItems name={d.name} key={d.id} id={d.id}/>)
    let messageArr = state.messageData.map((m) => <MessagesItems message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageText

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body= e.target.value
        props.upDateNewMessageText(body)
    }
    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={s.allDialogs}>
            <div className={s.dialogs}>
                {dialogArr}
            </div>
            <div className={s.messages}>
                {messageArr}
            </div>
            <div>
                <textarea
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                    placeholder={'enter your message...'}></textarea>

                <button onClick={onSendMessageClick}>send</button>
            </div>
        </div>
    )
}
export default Dialogs