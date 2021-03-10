import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';

import './Chat.css'

import Sidebar from '../Sidebar/Sidebar'
import MessageBar from '../MessageBar/MessageBar'
import Messages from '../Messages/Messages'
import Settings from '../Settings/Settings'

import profileImg04 from '../../Assets/ProfilePictures/profileImg04.gif'

let socket: any;

const Chat = ({ location, history }: any) => {
    const [name, setName] = useState<string | any>('');
    const [profilePic, setProfilePic] = useState(profileImg04)
    const [message, setMessage] = useState<string | any>('');
    const [messages, setMessages] = useState<string[] | any>([]);
    const [settings, setSettings] = useState(false);
    const ENDPOINT = 'localhost:5000';

    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        setMessages([]);
        socket = io(ENDPOINT);

        socket.emit('join', { name, room }, () => {

        });

        socket.on('error', (error: string) => {
            alert(error)
            history.push('/')
        });

        setName(name);

        // Use Effect cleanup for disconnecting.
        return () => {
            socket.emit('disconnectUser')
            socket.off();
        }
    }, [ENDPOINT, location.search, history]);

    // When the messages array changes set all the new messages & some extra stuff
    useEffect(() => {
        // Message Handler
        const handler = (message: string) => setMessages((messages: string[]) => [...messages, message])
        socket.on('message', handler)

        // Kick handler.
        const kickHandler = () => history.push('/')
        socket.on('kickUser', kickHandler)

        return () => {
            socket.off('message', handler)
            socket.off('kickUser', handler)
        }
    }, [messages, history]);

    // Send message function
    const sendMessage = (event: any) => {
        event.preventDefault();

        if(message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    // Clean up code for page reload or close.
    window.onbeforeunload = () => {
        socket.emit('disconnectUser');
        socket.off();
    }
    
    return (
        <div className="c-chat">
            <Sidebar name={name} history={history} trigger={settings} setTrigger={setSettings} profilePic={profilePic} socket={socket}/>
            <Settings trigger={settings} setTrigger={setSettings} setProfilePic={setProfilePic}/>
            <div className="chatContainer">
                <Messages messages={messages}/>
                <MessageBar message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat
