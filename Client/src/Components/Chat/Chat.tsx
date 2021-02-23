import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';

import './Chat.css'

import Sidebar from '../Sidebar/Sidebar'
import MessageBar from '../MessageBar/MessageBar'
import Messages from '../Messages/Messages'

let socket: any;

const Chat = ({ location }: any) => {
    const [message, setMessage] = useState<any | null>('');
    const [messages, setMessages] = useState<any | null>([]);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        socket.emit('join', { name, room }, () => {

        });

        // Use Effect cleanup for disconnecting.
        return () => {
            socket.emit('disconnectUser')
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    // When the messages array changes set all the new messages
    useEffect(() => {
        socket.on('message', (message: string) => {
            setMessages([...messages, message])
        });

        // Rerendering a big array in React.js everytime is a big no no, so this is a temp fix.
        if (messages.length > 7) {
            messages.shift();
        }
    }, [messages]);

    // Send message function
    const sendMessage = (event: any) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    return (
        <div className="c-chat">
            <Sidebar/>
            <div className="chatContainer">
                <Messages messages={messages}/>
                <MessageBar message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat
