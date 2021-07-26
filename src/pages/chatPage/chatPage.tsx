import React, {useEffect} from 'react';
import TextArea from "antd/lib/input/TextArea";
import {Button} from "antd";

const ws = new WebSocket('wss://social-network.samuraijs.com/handlers/ChatHandler.ashx')

const ChatPage = () => {
    return (
        <>
            <Chat/>
        </>
    );
};


const Chat = () => {
    useEffect(() => {
        ws.addEventListener('message', (e) => {
            console.log(e.data)
        })
    }, [])
    return (
        <>

            <Messages messages={[]}/>
            <MessageForm/>
        </>
    );
};
// @ts-ignore
const Messages = ({messages}) => {
    return (
        <div>
            {messages.map((message: any) => <Message key={message.id} message={message}/>)}
        </div>
    );
};

// @ts-ignore
const Message = ({message}) => {
    return (
        <div>
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