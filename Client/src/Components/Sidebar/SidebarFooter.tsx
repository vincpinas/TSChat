import React, { useState, useEffect } from 'react'
import * as BsIcons from 'react-icons/bs'

interface sidebarFooterProps {
    name?: string;
    history?: any;
}

function SidebarFooter({ name, history }: sidebarFooterProps) {
    name = name?.toLowerCase();

    const [home, setHome] = useState(false);
    const homeSetter = () => setHome(true);

    useEffect(() => {
        if(home) {
            setHome(false);
            history.push('/');
        }
    }, [home, history])

    return (
        <div className="SidebarFooter">
        <div className="sfItem sfUser">
            <div className="sfImage">

            </div>
            <div className="sfInfo">
                <span>{name}</span>
                <p>default</p>
            </div>
        </div>
        <button className="sfItem sfButton" onClick={homeSetter}>
            <BsIcons.BsHouseDoorFill/>
        </button>
        <button className="sfItem sfButton">
            <BsIcons.BsGearFill/>
        </button>
    </div>
    )
}

export default SidebarFooter
