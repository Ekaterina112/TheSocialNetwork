import React, {useEffect, useState} from 'react';
import TextArea from "antd/lib/input/TextArea";
import {Button} from "antd";

interface IMessage {
    userId: string,
    userName: string,
    message: string,
    photo: null | string
}

//open channel
const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const ChatPage = () => {
    return (
        <>
            <Chat/>
        </>
    );
};


const Chat = () => {

    return (
        <>

            <Messages/>
            <MessageForm/>
        </>
    );
};

const Messages = () => {

    const [messages, setMessages] = useState<IMessage[]>([])

    useEffect(() => {
        ws.addEventListener('message', (e) => {
            //parse string
            setMessages(JSON.parse(e.data))
        })
    }, [])


    return (
        <>
            {messages.length !== 0 ?
                <div>{messages.map((message: IMessage) => <Message key={Symbol(message.message).toString()}
                                                                   userId={message.userId} userName={message.userName}
                                                                   message={message.message}
                                                                   photo={message.photo}/>)}</div> :
                <div>You have no messages</div>}
        </>
    );
};

const Message: React.FC<IMessage> = ({userName, message, photo}) => {
    return (
        <div>
            {userName}
            {message}
        </div>
    );
};

const MessageForm = () => {
    return (
        <div>
            <TextArea rows={4}/>
            <Button type="primary">Send</Button>
        </div>
    );
};


export default ChatPage;