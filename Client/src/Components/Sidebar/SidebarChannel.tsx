import React from 'react';
import { Link } from 'react-router-dom';

interface sidebarChannelProps {
    channelName: string;
    channelLink: string;
    currentRoom?: string;
}

const SidebarChannel = (props: sidebarChannelProps) => {
    return (
        <Link className="sidebarChannel" to={props.channelLink}>
            <div className="channelName">
                <span className="channelHashtag">#</span>
                { props.channelName }
            </div>
        </Link>
    )
}

export default SidebarChannel
