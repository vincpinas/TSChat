import React, { useState, useEffect } from 'react'
import * as BsIcons from 'react-icons/bs'

interface sidebarFooterProps {
    name?: string;
    history?: any;
    trigger?: boolean;
    setTrigger?: any;
    profilePic?: any;
    socket?: any;
}

function SidebarFooter({ name, trigger, setTrigger, profilePic, socket, history }: sidebarFooterProps) {
    name = name?.toLowerCase();

    const [home, setHome] = useState(false);
    const homeSetter = () => setHome(true);
    const [userRole, setUserRole] = useState('');

    useEffect(() => {
        if(home) {
            setHome(false);
            history.push('/');
        }
    }, [home, history])

    const triggerSetter = () => setTrigger(!trigger);

    useEffect(() => {
        if (socket === undefined) return
        const roleHandler = (role: string) => setUserRole(role)
        socket.on('setRole', roleHandler)
    }, [socket]);

    return (
        <div className="SidebarFooter">
            <div className="sfItem sfUser">
                <div className="sfImage">
                    <img src={profilePic} className="sfImage" alt="profile"/>
                </div>
                <div className="sfInfo">
                    <span>{name}</span>
                    <p>{userRole}</p>
                </div>
            </div>
            <button className="sfItem sfButton" onClick={homeSetter}>
                <BsIcons.BsHouseDoorFill/>
            </button>
            <button className="sfItem sfButton" onClick={triggerSetter}>
                <BsIcons.BsGearFill/>
            </button>
        </div>
    )
}

export default SidebarFooter
