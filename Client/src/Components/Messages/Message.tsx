import React from 'react'


const Message = ({ message }: any) => {
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
