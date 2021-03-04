import React, { useState, useEffect } from 'react'
import * as BsIcons from 'react-icons/bs'

interface sidebarFooterProps {
    name?: string;
    history?: any;
    trigger?: boolean;
    setTrigger?: any;
    profilePic?: any;
}

function SidebarFooter({ name, trigger, setTrigger, profilePic, history }: sidebarFooterProps) {
    name = name?.toLowerCase();

    const [home, setHome] = useState(false);
    const homeSetter = () => setHome(true);

    useEffect(() => {
        if(home) {
            setHome(false);
            history.push('/');
        }
    }, [home, history])

    const triggerSetter = () => setTrigger(!trigger);

    return (
        <div className="SidebarFooter">
            <div className="sfItem sfUser">
                <div className="sfImage">
                    <img src={profilePic} className="sfImage" alt="profile"/>
                </div>
                <div className="sfInfo">
                    <span>{name}</span>
                    <p>default</p>
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
