import React from 'react';

import './Sidebar.css'

import SidebarChannel from './SidebarChannel'
import SidebarFooter from './SidebarFooter';

interface sidebarProps {
    name?: string;
    history?: any;
    setTrigger?: any;
    profilePic?: any;
    trigger?: boolean;
    socket?: any;
}

const Sidebar = ({ name, setTrigger, trigger, profilePic, socket, history }: sidebarProps) => {
    return (
        <div className="sidebar">
            <SidebarChannel channelName="Rules" channelLink={`/chat?name=${name}&room=rules`}/>
            <SidebarChannel channelName="General" channelLink={`/chat?name=${name}&room=general`}/>
            <SidebarChannel channelName="TypeScript" channelLink={`/chat?name=${name}&room=typescript`}/>
            <SidebarChannel channelName="JavaScript" channelLink={`/chat?name=${name}&room=javascript`}/>
            <SidebarChannel channelName="React" channelLink={`/chat?name=${name}&room=react`}/>
            <SidebarFooter name={name} history={history} trigger={trigger} setTrigger={setTrigger} profilePic={profilePic} socket={socket}/>
        </div>
    )
}

export default Sidebar