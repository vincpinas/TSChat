import React from 'react'

interface messageProps {
    message: {
        text: string;
        user: string;
        role?: string;
        typewriter?: { typestate: boolean; duration: string;}
    }
}

const Message = ({ message }: messageProps) => {
    const noUserStyles = {
        marginTop: "0px"
    }
    
    const animationVariables = {
        overflow: "hidden",
        borderRight: ".15em solid orange",
        animationName: "typing",
        animationDuration: message.typewriter?.duration,
        animationFillMode: "forwards",
    }
    
    const disableAnimation = (e: any) => {
        setTimeout(() => {
            e.target.style.animation = "none"
            e.target.style.border = "none"
        }, 100)
    }

    console.log(message)

    return (
        <div className="messageContainer" style={message.user === undefined ? noUserStyles : {}}>
            <p className={message.role ? `messageSender ${message.role}` : "messageSender"}>{message.user}</p>
            <div className="messageBox">
                <p 
                    className="messageText"
                    onAnimationEnd={disableAnimation}
                    style={message.typewriter?.typestate ? animationVariables : {}}
                >{message.text}
                </p>
            </div>
        </div>
    )
}

export default Message
