import React from 'react'

import './MessageBar.css'

interface MessageBarProps {
    message: string;
    setMessage(value: string): any;
    sendMessage(event: any): any;
}

const MessageBar = ({ message, setMessage, sendMessage}: MessageBarProps) => {
    return (
        <form className="messageBarContainer"> 
            <input 
                className="messageBar"
                type="text"
                placeholder="Type a message.."
                value={message} 
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
            />
            <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
        </form>
    )
}

export default MessageBar
