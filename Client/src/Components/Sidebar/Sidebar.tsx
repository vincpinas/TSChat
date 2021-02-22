import React from 'react';

import './Sidebar.css'

import SidebarChannel from './SidebarChannel'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SidebarChannel channelName="General" channelLink="#"/>
        </div>
    )
}

export default Sidebar
