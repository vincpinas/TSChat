import React from 'react'
import * as IoIcons from 'react-icons/io'

import './Settings.css'

import ImageSelector from './ImageSelector'



interface settingsProps {
    trigger: boolean;
    setTrigger(trigger: boolean): any;
    setProfilePic(profilePic: any): any;
}

function Settings({ trigger, setTrigger, setProfilePic }: settingsProps) {
    const triggerSetter = () => setTrigger(false);

    return trigger ? (
        <div className="settingsModal">
            <button className="settingsExit" onClick={triggerSetter}>
                <IoIcons.IoMdClose/>
            </button>
            <div className="settingsInnerContainer">
                <ImageSelector setProfilePic={setProfilePic}/>
            </div>
        </div>
    ) : null
}

export default Settings