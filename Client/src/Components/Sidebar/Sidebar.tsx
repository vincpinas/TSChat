import React from 'react';

import './Sidebar.css'

import SidebarChannel from './SidebarChannel'

interface sidebarProps {
    name?: string;
}

const Sidebar = ({ name }: sidebarProps) => {
    return (
        <div className="sidebar">
            <SidebarChannel channelName="General" channelLink={`/chat?name=${name}&room=general`}/>
            <SidebarChannel channelName="TypeScript" channelLink={`/chat?name=${name}&room=typescript`}/>
            <SidebarChannel channelName="JavaScript" channelLink={`/chat?name=${name}&room=javascript`}/>
            <SidebarChannel channelName="React" channelLink={`/chat?name=${name}&room=react`}/>
        </div>
    )
}

export default Sidebar
