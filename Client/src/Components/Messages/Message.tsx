import React from 'react'

interface messageProps {
    message: {
        text: string;
        user: string;
    }
}

const Message = ({ message }: messageProps) => {
    return (
        <div className="messageContainer">
            <p className="messageSender">{message.user}</p>
            <div className="messageBox">
                <p className="messageText">{message.text}</p>
            </div>
        </div>
    )
}

export default Message
