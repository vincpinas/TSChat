import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import './Join.css'

import RubberSpan from '../RubberSpan/RubberSpan'
import Alert from '../Alert/Alert'
import * as FaIcons from 'react-icons/fa'

function Join() {
    // Input Variables
    const [name, setName] = useState('');

    // Footer Variables
    const date = new Date();
    const year = date.getFullYear();

    // Error Conditionals
    const [nameError, setNameError] = useState(false);
    const nameErrorSetter = () => {
        setNameError(true)
        setTimeout(() => setNameError(false), 8500)
    }

    return (
        <div className="joinOuterContainer">
            <div className="c-alert-container">
                { nameError ? <Alert text="Please fill in a name of atleast 4 characters." timer={7500} delay={0} error={true} /> : null }
            </div>
            <h1 className="heading">
                <RubberSpan letters="TS" hero={true} margin={10}/> 
                <RubberSpan letters="Chat" hero={true}/> 
            </h1>
            <div className="joinInnerContainer">
                <div>
                    <input placeholder="Enter Name.." className="joinInput" type="text" onChange={(event) => setName(event.target.value)}/>
                </div>
            </div>

            <Link onClick={event => (!name || name.length < 4) ? (event.preventDefault(), nameErrorSetter()) : null} to={`/chat?name=${name}`}>
                <button className="joinButton margetop-20" type="submit">Click to Join</button>
            </Link>
            <div className="Footer">
                <p id="copyright">&#169; Super Guild Chat. {year}</p>
                <ul className="Socials">
                    <li><a href="https://github.com/vincpinas/" target="_blank" rel="noreferrer"><FaIcons.FaGithub/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default Join
