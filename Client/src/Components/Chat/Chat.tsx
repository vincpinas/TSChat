import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';

import './Chat.css'

import Sidebar from '../Sidebar/Sidebar'
import MessageBar from '../MessageBar/MessageBar'

let socket: any;

const Chat = ({ location }: any) => {
    const [name, setName] = useState<any | null>('');
    const [room, setRoom] = useState<any | null>('');
    const [message, setMessage] = useState<any | null>('');
    const [messages, setMessages] = useState<any | null>('');
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        socket.emit('join', { name, room }, () => {
            
        });

        // Use Effect cleanup for disconnecting.
        return () => {
            socket.off();
        }
    }, [ENDPOINT, location.search]);

    // When the messages array changes set all the new messages
    useEffect(() => {
        socket.on('message', (message: string) => {
            setMessages([...messages, message])
        });
    }, [messages]);

    const sendMessage = (event: any) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages)

    return (
        <div className="c-chat">
            <Sidebar/>
            <div className="chatContainer">
                <MessageBar message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat
