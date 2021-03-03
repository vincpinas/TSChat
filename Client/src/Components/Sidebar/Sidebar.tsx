import React from 'react';

import './Sidebar.css'

import SidebarChannel from './SidebarChannel'
import SidebarFooter from './SidebarFooter';

interface sidebarProps {
    name?: string;
    history?: any;
}

const Sidebar = ({ name, history }: sidebarProps) => {
    return (
        <div className="sidebar">
            <SidebarChannel channelName="Rules" channelLink={`/chat?name=${name}&room=rules`}/>
            <SidebarChannel channelName="General" channelLink={`/chat?name=${name}&room=general`}/>
            <SidebarChannel channelName="TypeScript" channelLink={`/chat?name=${name}&room=typescript`}/>
            <SidebarChannel channelName="JavaScript" channelLink={`/chat?name=${name}&room=javascript`}/>
            <SidebarChannel channelName="React" channelLink={`/chat?name=${name}&room=react`}/>
            <SidebarFooter name={name} history={history}/>
        </div>
    )
}

export default Sidebar