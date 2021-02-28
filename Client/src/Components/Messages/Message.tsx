import React from 'react'

interface messageProps {
    message: {
        text: string;
        user: string;
    }
}

const noUserStyles = {
    marginTop: "0px"
}

const Message = ({ message }: messageProps) => {
    console.log(message)
    return (
        <div className="messageContainer" style={message.user === undefined ? noUserStyles : {}}>
            <p className="messageSender">{message.user}</p>
            <div className="messageBox">
                <p className="messageText">{message.text}</p>
            </div>
        </div>
    )
}

export default Message
