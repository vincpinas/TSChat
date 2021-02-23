import React from 'react'

import './Messages.css'

import Message from './Message'

interface messagesProps {
    messages: object[];
}

const Messages = ({messages}: messagesProps) => {
    return (
        <div className="messagesContainer">
            { messages.map((message: any, index: number) => {
                return (
                    <div key={`message${index}`}>
                        <Message message={message} />
                    </div>
                )
            })}
        </div>
    )
}

export default Messages
