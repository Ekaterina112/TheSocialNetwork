import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import MessagesItems from './MessagesItems/MessagesItems';
import DialogsItems from './DialogsItems/DialogsItems';
import {upDateNewMessageTextCreator, sendMessageCreator,} from '../redux/MessagePageReducer';
import {MessagePageType, StoreType} from '../redux/state';

type DialogsPropsType = {
    messagePage: MessagePageType
    store:StoreType
}


const Dialogs = (props: DialogsPropsType) => {
    let dialogArr = props.messagePage.dialogItemsData.map((d) => <DialogsItems name={d.name} id={d.id}/>)
    let messageArr = props.messagePage.messageData.map((m) => <MessagesItems message={m.message}/>)
    let newMessageBody = props.messagePage.newMessageText


    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        let body= e.target.value
        props.store.dispatch(upDateNewMessageTextCreator(body))
    }
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