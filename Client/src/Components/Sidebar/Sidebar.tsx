import React, { useEffect, useState} from 'react';
import queryString from 'query-string';

import './Sidebar.css'

import SidebarChannel from './SidebarChannel'

const Sidebar = () => {
    const [userName, setUserName] = useState<any | null>('');

    useEffect(() => {
        const { name } = queryString.parse(window.location.search);

        setUserName(name);

    }, []);

    return (
        <div className="sidebar">
            <SidebarChannel channelName="General" channelLink={`/chat?name=${userName}&room=general`}/>
            <SidebarChannel channelName="TypeScript" channelLink={`/chat?name=${userName}&room=typescript`}/>
            <SidebarChannel channelName="JavaScript" channelLink={`/chat?name=${userName}&room=javascript`}/>
            <SidebarChannel channelName="React" channelLink={`/chat?name=${userName}&room=react`}/>
        </div>
    )
}

export default Sidebar
