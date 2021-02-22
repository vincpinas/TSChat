import React from 'react';

import './Sidebar.css'

import SidebarChannel from './SidebarChannel'

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarChannel channelName="General" channelLink="#"/>
        </div>
    )
}

export default Sidebar
