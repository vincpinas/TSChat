import React from 'react'

import './Settings.css'

// Available Images
import profileImg01 from '../../Assets/ProfilePictures/profileImg01.gif'
import profileImg02 from '../../Assets/ProfilePictures/profileImg02.gif'
import profileImg03 from '../../Assets/ProfilePictures/profileImg03.jpg'
import profileImg04 from '../../Assets/ProfilePictures/profileImg04.gif'
import profileImg05 from '../../Assets/ProfilePictures/profileImg05.jpg'
import profileImg06 from '../../Assets/ProfilePictures/profileImg06.jpg'

interface ImageSelectorProps {
    setProfilePic(profilePic: any): any;
}

function ImageSelector({ setProfilePic }: ImageSelectorProps) {
    return (
        <div className="sImageList">
            <div className="sImageContainer">
                <img src={profileImg01} className="sImage" alt="profile" onClick={() => setProfilePic(profileImg01)}/>
                <div className="tooltip">Seizure</div>
            </div>
            <div className="sImageContainer">
                <img src={profileImg02} className="sImage" alt="profile" onClick={() => setProfilePic(profileImg02)}/>
                <div className="tooltip">Manga</div>
            </div>
            <div className="sImageContainer">
                <img src={profileImg03} className="sImage" alt="profile" onClick={() => setProfilePic(profileImg03)}/>
                <div className="tooltip">Sleepy</div>
            </div>
            <div className="sImageContainer">
                <img src={profileImg04} className="sImage" alt="profile" onClick={() => setProfilePic(profileImg04)}/>
                <div className="tooltip">Anime</div>
            </div>
            <div className="sImageContainer">
                <img src={profileImg05} className="sImage" alt="profile" onClick={() => setProfilePic(profileImg05)}/>
                <div className="tooltip">Adios</div>
            </div>
            <div className="sImageContainer">
                <img src={profileImg06} className="sImage" alt="profile" onClick={() => setProfilePic(profileImg06)}/>
                <div className="tooltip">Cute Cat</div>
            </div>
        </div>
    )
}

export default ImageSelector
